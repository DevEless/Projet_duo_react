import React from 'react'

export const Summary = ({change}) => {
  return (

    <div id='summary' className='flex flex-col h-full justify-center'>
        <h1 className='text-3xl mb-5 font-bold'>Finishing up</h1>
        <p className=''>Double-check everything looks OK before confirming.</p>
        <div>
            <p onClick={()=> change()}>Change</p>
        </div>
    </div>

  )
}
