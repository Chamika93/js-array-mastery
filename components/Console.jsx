import React, { useState } from 'react'

const  Console = ({result,testCases,hasForLoop}) => {
  const [ selectedTestIndex, setSelectedTestIndex ] = useState(0);
    if(hasForLoop){
      return (
        <div className=' w-full bg-white rounded-md drop-shadow-sm p-5'>
            <p>Dont use a for loop and try to array methods.</p>
        </div> 
      )
    }

  const renderOutput = () => {
    return (
      <div>
        <p className='mt-4'>Your Output</p>
        <div className='bg-slate-100 mt-4 px-4'>
        {
            <div> 
              <span className='pr-2 w- text-mid-grey border-r-[1px]'>0</span>
              <span className='pl-2'>{JSON.stringify(result[selectedTestIndex]?.ans)}</span>
            </div>
        }
        </div>
        <p className='mt-4'>Log</p>
        <div className='bg-slate-100 mt-4 px-4'>
        {
            result[selectedTestIndex]?.logs?.map((log, index) => (
            <div className='flex'> 
              <div className='w-[15px] text-mid-grey border-r-[1px]'>{index}</div>
              <div className='pl-2'>{log}</div>
            </div>
            )
          )
        }
        </div>
      </div>
    )
  }

  return (
    <div className=' w-full bg-white rounded-md drop-shadow-sm p-5'>
      <div className='flex w-full border-mid-grey border-b-[1px]'>
        { testCases.map((testCase, index)=>  {
            if(!result[index]) return null;
            const isSelected = ( index === selectedTestIndex );
            let isSuccess = (testCase.output === result[index]?.ans);
            if(typeof testCase.output === 'object') {
              isSuccess = JSON.stringify(testCase.output) === JSON.stringify(result[index]?.ans)
            } else {
              isSuccess = (testCase.output === result[index]?.ans);
            }
          
            return ( 
              <button 
                className={`p-4 text-lg ${isSuccess ? 'text-success' : 'text-danger'} ${isSelected ? 'border-b-[2px] font-bold': 'shadow-inner' }`}
                onClick= {() => setSelectedTestIndex(index)} 
                key= {index} 
              >
                Test case {index+1}
              </button>
            ) 
          }).filter(Boolean)
        }
      </div>
      {
        result[selectedTestIndex]?.error ?
        <div className='bg-slate-100 mt-4 p-4'> 
          <span className='text-danger'> Error: { result[selectedTestIndex].error.message  }</span>
        </div> : <></>
      }
      <p className='mt-4'>Input</p>
      <div className='bg-slate-100 mt-4 px-4'>
      {
          <div> 
            <span className='pr-2 text-mid-grey border-r-[1px]'>0</span>
            <span className='pl-2'>{JSON.stringify(testCases[selectedTestIndex].input)}</span>
          </div>
      }
      </div>
      <p className='mt-4'>Expected Output</p>
      <div className='bg-slate-100 mt-4 px-4'>
      {
          <div> 
            <span className='pr-2 text-mid-grey border-r-[1px]'>0</span>
            <span className='pl-2'>{JSON.stringify(testCases[selectedTestIndex].output)}</span>
          </div>
      }
      </div>
      {!result[selectedTestIndex].error ? renderOutput() : <></>}
    </div>
  )
}

export default Console;
