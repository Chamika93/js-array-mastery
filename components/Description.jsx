import React from 'react'

function Description({body, title}) {
  return (
    <div className='h-full w-[600px] p-[20px] bg-light-blue'>
      <div className='bg-panel h-full rounded-md p-[20px] drop-shadow-lg'>
        <h1 className='text-2xl'>{title}</h1>
        <article className='mt-[20px]'>
          <div dangerouslySetInnerHTML={{ __html: body.html }} />
        </article>
      </div>
  </div>
  )
}

export default Description;
