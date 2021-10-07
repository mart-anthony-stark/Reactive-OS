import React, {useState} from 'react'
import {AiFillCloseCircle} from 'react-icons/ai'
import './style.css'

export default function Calculator({tasks, setTasks}){
  const [res, setRes] = useState('')

  function handleNumber(value){
    setRes(res+value)
  }
  return(
    <div className='calculator' style={{zIndex: tasks.indexOf('calculator')+1}}>
        <div className="close-btn" onClick={()=> setTasks((prev)=> prev.filter(p => p !== 'calculator'))}>
          <AiFillCloseCircle/>
        </div>
      <table>
            <tr id='result'>
                <td colspan="4">
                <input type="text" style={{textAlign: 'right'}} id='result' placeholder="0" readOnly
                  value={res}
                  
                /></td>
            </tr>
            <tr>
                <td><button onClick={()=>{
                  let sin = Math.sin(res) 
                  setRes(sin)
                 }} className='green'>sin</button></td>
                <td><button onClick={()=>{
                  let cos = Math.cos(res) 
                  setRes(cos)
                 }} className='green'>cos</button></td>
                <td><button onClick={()=>{
                  let tan = Math.tan(res)
                  setRes(tan)
                 }} className='green'>tan</button></td>
                <td colspan="2"><button onClick={()=> setRes('')} style={{color: 'rgb(255, 102, 0)'}}>C</button></td>
            </tr>
            <tr>
                <td><button className='green'> x<sup>2</sup> </button> </td>
                <td><button className='green'> x<sup>3</sup> </button> </td>
                <td><button className='green'> &radic; </button> </td>
                <td><button className='green'> &#8731; </button> </td>
            </tr>
            <tr>
              <td><button onClick={()=> handleNumber('7')}>7</button></td>
              <td><button onClick={()=> handleNumber('8')}>8</button></td>
              <td><button onClick={()=> handleNumber('9')}>9</button></td>
              <td><button onClick={()=> setRes(res.substring(0, res.length-1))} className='red'>&#60;</button></td>
            </tr>
            <tr>
              <td><button onClick={()=> handleNumber('4')}>4</button></td>
              <td><button onClick={()=> handleNumber('5')}>5</button></td>
              <td><button onClick={()=> handleNumber('6')}>6</button></td>
              <td><button onClick={()=> handleNumber('-')} className='red'>-</button></td>
            </tr>
            <tr>
              <td><button onClick={()=> handleNumber('1')}>1</button></td>
              <td><button onClick={()=> handleNumber('2')}>2</button></td>
              <td><button onClick={()=> handleNumber('3')}>3</button></td>
              <td><button onClick={()=> handleNumber('/')} className='red'>/</button></td>
            </tr>
            <tr>
              <td><button onClick={()=> handleNumber('.')}>.</button></td>
              <td><button onClick={()=> handleNumber('0')}>0</button></td>
              <td><button onClick={()=> handleNumber('*')} className='red'>X</button></td>
              <td><button onClick={()=> handleNumber('%')} className='red'>%</button></td>
            </tr>
            <tr>
                <td colspan="3"> <button onClick={()=>{
                  setRes(eval(res))
                }}
                
                >=</button> </td>
                <td><button onClick={()=> handleNumber('+')} className='red'> + </button> </td>
            </tr>
      </table>
    </div>
  )
}