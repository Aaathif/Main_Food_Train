import React from 'react'
import data from './SingleEventData'
import EventDesc from './SingleEvent'

 function SingleEventMain() {
  return (
    <div>
      <div>
        {data.map(Data =>{
            return <div><EventDesc Data = {Data}/></div>

        })}
      </div>
    </div>
  )
}
export default SingleEventMain
