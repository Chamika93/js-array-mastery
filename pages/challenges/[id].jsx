
import React, { useState, useEffect } from 'react'; 
import Head from 'next/head'
import { allChallenges } from 'contentlayer/generated'
import Description from '../../components/Description';
import CodeEditor from '../../components/CodeEditor';
import Console from '../../components/Console';
import codeExecutor from '../../helpers/codeExecutor';
import codeForLoopValidator from '../../helpers/codeForLoopValidator'
import getMethods from '../../helpers/getMethods';
import Confetti from '../../components/Confetti';

export default function Post({ post }) {
  const [result, setResult] = useState();
  const [success, setSuccess] = useState(false);
  const [hasForLoop, setHasForLoop] = useState(false);
  const comment = 'write your code here';
  const initialCode = `function ${post.functionName}(arr) {
    // ${comment}
};`;
  const [code, setCode] = useState(initialCode);


  useEffect(()=> {
    const savedCode =  localStorage.getItem(`${post.slug}-code`);
    if(savedCode){
      setCode(savedCode);
    }
  }, [])

  useEffect(()=> {
    localStorage.setItem(`${post.slug}-code`, code)
  }, [code])

  const handleRunClick = () => {
    const isForLoop = codeForLoopValidator(code);

    setHasForLoop(isForLoop);
    const executedResult = codeExecutor(code, post.testCases.slice(0,2), post.functionName);
    setResult(executedResult);
  }

  const handleSubmit = () => {
    const executedResult = codeExecutor(code, post.testCases, post.functionName);
    setResult(executedResult);
    const isSuccess = post.testCases.every(({output}, index) => {
      let outcome;
      if(typeof output === 'object') {
        outcome = JSON.stringify(output) === JSON.stringify(executedResult[index].ans)
      } else {
        outcome = (output === executedResult[index].ans);
      }
      return outcome;
    });
    setSuccess(isSuccess)
    if(isSuccess) {
      let usedMethods = getMethods(code);
      const storedMethods = localStorage.getItem('usedMethods');
      if(storedMethods) {
        usedMethods = [...usedMethods, ...storedMethods.split(',')];
      }
      localStorage.setItem('usedMethods',[...new Set(usedMethods)])
    }
    localStorage.setItem(post.slug, isSuccess)
  }

  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <div className='flex flex-col md:flex-row min-h-screen'>
        <Description body={post.body} title={post.title} />
        <div className='w-full h-full'>
          <CodeEditor code={code} setCode={setCode} />
          <div className='flex justify-end text-white py-2 px-2 bg-light-blue'>
            <button onClick={handleRunClick} className='py-[9.6px] px-[14.4px] bg-secondary rounded-md mr-2'>Run Code</button>
            <button onClick={handleSubmit} className='py-[9.6px] px-[14.4px] bg-grey rounded-md'>Submit</button>
          </div>
          { result && <Console result={result} testCases={post.testCases} hasForLoop={hasForLoop} /> }
          { success && <Confetti /> }
        </div>
      </div>
    </>
  )
}

export async function getStaticPaths() {
  return {
    paths: allChallenges.map((p) => ({ params: { id: p.slug } })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const post = allChallenges.find((post) => post.slug === params?.id)

  return { props: { post } }
}
