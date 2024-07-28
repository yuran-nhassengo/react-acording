import React, { useState } from 'react'


import {data} from "./data"


export const Accordian = () => {

    const [selected,setSelected] = useState(null);
    const [enableMulti,setEnableMulti] = useState(false);
    const [multi,setMulti] = useState([]);

    function handleSingleSelection (getCurrentId){
        setSelected(getCurrentId === selected ? null : getCurrentId)
    }

    function handleMultiSelection(getCurrentId){
        let cpyMulti = [...multi];
        const findIndexOfCurrentId = cpyMulti.indexOf(getCurrentId);
        if(findIndexOfCurrentId === -1) cpyMulti.push(getCurrentId)
        else cpyMulti.splice(findIndexOfCurrentId,1);

        setMulti(cpyMulti);
    }


  return (
    <div className='flex flex-col justify-center items-center h-screen bg-gray-200'>
      <button className={`border ${enableMulti ? 'bg-blue-400 text-white' : 'border-blue-400 text-blue-400'} px-4 py-2 mb-4`}  onClick={() => setEnableMulti(!enableMulti)}>Enable Multi Selection</button>
      <div className='w-full max-w-screen-md text-center'>
        {
            data && data.length > 0 ?
             data.map(dataItem => <div className=" border border-blue-400 rounded-lg shadow-md mb-4 p-4 " key={dataItem.id}>
                <div className="cursor-pointer flex justify-between items-center"  
                
                onClick={enableMulti ? () =>handleMultiSelection(dataItem.id) :()=>handleSingleSelection(dataItem.id)}>
                    <h3 className="text-lg font-semibold">{dataItem.pergunta}</h3>
                    <span className="text-xl">+</span>
                </div>
                {
                  selected === dataItem.id || multi.indexOf(dataItem.id) !== -1? <div className="mt-2"><p>{dataItem.resposta}</p></div> 
                  :null
                }
             </div>)
             : <div>No data Found!</div>
        }
      </div>
    </div>
  )
}


