import React from 'react';
import { allChallenges } from 'contentlayer/generated'
import { pick } from '@contentlayer/client'
import ChallengeButton from '../components/ChallengeButton';

export default function challengeList({challenges}) {
  return (
    <div className='bg-extra-light-blue w-full h-full'>
        <div className='pt-10  px-[80px] flex flex-col'>
          <p className='text-[20px] text-mid-blue font-bold mb-4'>Challenges</p>
            {challenges.map(({ slug, title }) => (
                <ChallengeButton slug={slug} title={title} />
            ))}
        </div>
    </div>
  )
}

export async function getStaticProps() {
    const challenges = allChallenges.map((challenge) => pick(challenge, ['title', 'slug']))
  
    return { props: { challenges } }
  }