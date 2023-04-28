import React from 'react'
import Reg from './Reg'
import data from './RegData'

function RegMain() {
  return (
    <div>
         <div>
            {data.map(Data => { 
                return <div><Reg Data ={Data}/></div>

            })}
        </div>
    </div>
  )
}

export default RegMain