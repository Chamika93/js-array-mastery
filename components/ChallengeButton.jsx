import React, { useState, useEffect } from 'react'; 
import Link from 'next/link';

export default function ChallengeButton({ title, slug }) {
  const [success, setSuccess] = useState(false);
  useEffect(()=> setSuccess(localStorage.getItem(slug)));
  console.log('success', success)
  return (
    <Link  className='flex justify-between border-2 border-dark-blue py-6 px-4 my-2 rounded-lg bg-white drop-shadow-sm' key={slug} href={`/challenges/${slug}`}>
        {title}
        { success === 'true' && <span className='text-dark-green font-medium'>Passed</span> }
    </Link>
  )
}