import './App.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
export default function App (){
  const [advice, setAdvice] = useState({advice:"", id:""})
  const getData = async ()=>{
    await axios.get('https://api.adviceslip.com/advice').then(response=>{setAdvice(response.data.slip)})
  }

  useEffect(()=>{
    getData()
  }, [])
 


  return<>
  <div className="container">
    <p>Advice #{advice.id}</p>
    <h5>
      {advice.advice}
    </h5>
    <br />
    <img className="divider" />
    <br />
  </div>
  <div className="dicediv" onClick={()=>{getData()}}>
   <img src='/images/icon-dice.svg' className='dice' />
   </div>
  </>
}