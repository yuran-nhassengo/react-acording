import React, { useState } from 'react'


import {data} from "./data"


export const Accordian = () => {

    const [selected,setSelected] = useState(null);

    function handleSingleSelection (getCurrentId){
        setSelected(getCurrentId === selected ? null : getCurrentId)
    }


  return (
    <div className='flex justify-center items-center h-screen bg-gray-200'>
      <div className='w-full max-w-screen-md text-center'>
        {
            data && data.length > 0 ?
             data.map(dataItem => <div className=" border border-blue-400 rounded-lg shadow-md mb-4 p-4 " key={dataItem.id}>
                <div className="cursor-pointer flex justify-between items-center"  onClick={()=>handleSingleSelection(dataItem.id)}>
                    <h3 className="text-lg font-semibold">{dataItem.pergunta}</h3>
                    <span className="text-xl">+</span>
                </div>
                {
                  selected === dataItem.id ? <div className="mt-2"><p>{dataItem.resposta}</p></div> 
                  :null
                }
             </div>)
             : <div>No data Found!</div>
        }
      </div>
    </div>
  )
}


