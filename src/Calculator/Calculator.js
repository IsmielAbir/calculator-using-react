import React, { useState } from 'react';
import './Calculator.css'
const Calculator = () => {
    const [result, setResult] = useState('');

    const click = (e) =>{
        setResult(result.concat(e.target.name));

    }

    const clear = () => {
            setResult("");
    }
    const backspace = () => {
        setResult(result.slice(0, result.length-1))

    }
    const calculate = () =>{
       try{
        setResult(eval(result).toString())
       }
       catch(error){
        setResult("Error")
       }
    }

    return (
        <div className='container'>
            <form action="">
                <input type="text"  value={result}/>
            </form>
            <div className='key'>
                <button name="7" onClick={click}>7</button>
                <button name="8" onClick={click}>8</button>
                <button name="9" onClick={click}>9</button>
                <button name="+" onClick={click}>+</button>
               
               
                <button name="4" onClick={click}>4</button>
                <button name="5" onClick={click}>5</button>
                <button name="6" onClick={click}>6</button>
                <button name="-" onClick={click}>-</button>
                
               
                <button name="1" onClick={click}>1</button>
                <button name="2" onClick={click}>2</button>
                <button name="3" onClick={click}>3</button>
                <button name="*" onClick={click}>*</button>
               
                <button onClick={click}>EXP</button>
                <button name="0" onClick={click}>0</button>
                <button name="." onClick={click}>.</button>
                <button name="/" onClick={click}>/</button>
               
               
               
                <button onClick={backspace} id="backspace">DEL</button>
                <button onClick={clear} id="clear">Clear</button>
                <button onClick={calculate} id="result">=</button>
               
               <button onClick={calculate} id="result">Ans</button>
                

            </div>
            
        </div>
    );
};

export default Calculator;