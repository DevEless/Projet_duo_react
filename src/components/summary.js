import React , {useState} from 'react'

export const Summary = ({change, dataPlan, dataAdd}) => {

    let dataPlanSplit = dataPlan.split(' ');

   

    let dataAddMap = dataAdd.map((item)=>{
        const da = item.split('*');
        
        return (
            <div className='flex justify-between'>
                <p>{da[0]}</p>
                <p className='prix'>{da[1]}</p>
            </div>
        )}
    )
    
  return (

    <div id='summary' className='flex flex-col h-full justify-center'>
        <h1 className='text-3xl mb-5 font-bold'>Finishing up</h1>
        <p className=''>Double-check everything looks OK before confirming.</p>
        <div>
            <div className='flex justify-between'>
                <p>{dataPlanSplit[0]}</p>
                <p>${dataPlanSplit[1]}</p>
            </div>
            <p onClick={()=> change()}>Change</p>
            
            {dataAddMap}
        </div>
    </div>

  )
}
