import React from 'react';
import Keypad from '../keypad';
import Screen from '../screen';
import s from './calculator.module.css';
import { useState } from "react";

export default function Calculator() {
  // TODO: Implement calculator logic here

  const [data, setData] = useState("");

  const calculate = () => {
      setData(eval(data));
  };
  const clickButtons = button => {
        
    if(button == "C"){
      setData("");
      
    }
    else if(button == "x"){
      setData(data + "*");
      
    }
    else if(button == "÷"){
      setData(data + "/");
      
    }
    else if(button == "+/-"){
      setData((parseFloat(data) * -1).toString());
      
    }
    else if(button == "="){
   
        calculate();
        console.log(data);
    }
    else{
      setData(data + button);
    }
  }

  return (
    <div className={s.calculator}>
      <Screen text={data} />
      <Keypad handleClick={clickButtons} />
    </div>
  );
}
