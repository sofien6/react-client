import React , { useState } from 'react'
import Axios from 'axios'

const Form = () => {

    const [name, setname] = useState('');
    async function postName(e){
       e.preventDefault()
       try {
        Axios(
          {
            method:'POST',
            url:`http://localhost:3001?name=${name}`,
            headers:{
              "content-type":"application/json"
            }
          }
        ).then(res => {
          console.log(res.data.message)
        })
       } catch (error) {
         console.log(error);
       }
   }

  return (
    <div>
        <form onSubmit={postName}>
            <input type="text" value={name} onChange={(e)=> setname(e.target.value) } placeholder='fullName' />
            <button type='submit'>Send</button>
        </form>
    </div>
  )
}

export default Form