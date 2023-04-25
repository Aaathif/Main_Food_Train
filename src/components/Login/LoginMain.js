import React from 'react'
import data from './LoginData'
import Login from './Login'
function LoginMain() {
  return (
    <div>
        <div>
            {data.map(Data => { 
                return <div><Login Data ={Data}/></div>

            })}
        </div>
    </div>
  )
}

export default LoginMain