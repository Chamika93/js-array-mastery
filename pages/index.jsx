import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'; 
import { allChallenges } from 'contentlayer/generated'
import { pick } from '@contentlayer/client'
import ChallengeButton from '../components/ChallengeButton';
import { methods } from '../constants/methods';
import consoleimg from '../assets/console.png';
import challengesimg from '../assets/challenges.png';

export default function Home({ posts }) {
  
  const [usedMethods, setUsedMethods] = useState([]);
  const router = useRouter()
  
  useEffect(()=> {
    const storedMethods = localStorage.getItem('usedMethods');
    if(storedMethods) {
      setUsedMethods(storedMethods.split(','))
    }
  }, [])

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <section>
        <div className='flex flex-col md:flex-row pb-[200px] pt-8 bg-extra-light-blue pl-[40px] pr-[40px] md:pr-0 md:pl-[80px]'>
          <div className='mt-[50px]'>
            <p className='text-[48px] font-bold text-charcoal'>Master your JS Array methods</p>
            <p className='text-[20px] text-mid-blue mt-[50px]'>Cleverly designed coding challenges that covers all array methods.</p>
            <p className='text-[20px] text-mid-blue'>perefct way to brush up your array knowledge. </p>
            <p className='text-[20px] text-mid-blue font-bold'>No Signup required to get started</p>
            <button className="mt-10 bg-special-blue text-white font-bold p-2 rounded" onClick={() => router.push('/challenge-list')}>Get Started</button>
          </div>
          <div className='relative overflow-hidden w-full h-[700px] hidden md:block'>
            <div className='absolute top-[80px] w-[1160px] h-[660px] left-[80px] drop-shadow-2xl'>
              <Image
                src={consoleimg}
                alt="Picture of the author"
                fill="cover"
              />
            </div>
          </div>
        </div>
        {/* <div className='w-full grid grid-cols-8 mt-6'>
          {methods.map(val => {
            const hasUsed = usedMethods.includes(val);
            return(
            <div className='px-4 py-2 w-full flex justify-center'>
              <div className={`${hasUsed ? 'bg-secondary text-white': 'bg-white'}  rounded-full shadow-lg flex justify-center w-fit p-4`}>
                {val}
              </div>
            </div>
          )})}
        </div> */}
        <div className='md:mt-[80px] my-[100px] px-[80px] flex'>
          <div className='w-[1206px] h-[574px] hidden md:block'>
              <Image
                  src={challengesimg}
                  alt="Challenges list"
                />
          </div>
         <div className='md:pl-[60px] md:mt-[200px] w-[600px]'>
            <p className='text-[36px] font-bold text-charcoal'>Solve challenges using array method knowledge</p>
            <p className='text-[20px] text-black mt-[50px]'>Cleverly designed coding challenges that covers all array methods.
              perefct way to brush up your array knowledge.No Signup required to get started</p>
         </div>
        </div>
      </section>
    </>
  )
}

export async function getStaticProps() {
  const posts = allChallenges.map((post) => pick(post, ['title', 'slug']))

  return { props: { posts } }
}
