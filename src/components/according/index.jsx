import React, { useState } from 'react'


import {data} from "./data"


export const Accordian = () => {

    const [selected,setSelected] = useState(null);

    function handleSingleSelection (getCurrentId){
        console.log(getCurrentId)
    }


  return (
    <div>
      <div className='text-center'>
        {
            data && data.length > 0 ?
             data.map(dataItem => <div>
                <div onClick={()=>handleSingleSelection(dataItem.id)}>
                    <h3>{dataItem.pergunta}</h3>
                    <span>+</span>
                </div>
             </div>)
             : <div>No data Found!</div>
        }
      </div>
    </div>
  )
}


