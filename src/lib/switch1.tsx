import { useState } from "react";
import styled from "styled-components";
const h:number = 22

const Button = styled.button`

  height: ${h}px; 
  width: ${ h * 2}px ; 
  border: none; 
  background: #bfbfbf; 
  border-radius: 11px; 
  position: relative;
  > span {
    position: absolute; top: 2px; left: 2px; height: ${h-4}px; width: ${h-4}px; background: white; border-radius:20px; transition: all 250ms;
        &.selected{
          background-color: blue;
        }
      }
    &.gulu-checked { background: #1890ff;
          > span { left: calc(100% - ${h}px + 2px); }
      }
    &:focus { outline: none; }
    &:active {
         > span { width: 26px; }
      }
    &.gulu-checked:active {
        > span { width: 26px; margin-left: -2px; }
    }
    
  `
const Switch1 =()=>{
    const [toggle,setToggle]=useState(false)
    const onClick=()=>{
        setToggle(!toggle)
        console.log(toggle)
    }
    const show = ()=>{
        return toggle ? 'gulu-checked' : ""
    }
    return (
        <div>
            <Button onClick={onClick} className={show()}><span></span></Button>
        </div>
    );
}
export {Switch1};