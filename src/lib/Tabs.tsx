import styled from "styled-components";
import {Tab} from './Tab'
import {useState,useContext,useEffect} from 'react'
import {C} from '../components/Context';
import react from 'react'

// type Props ={
//     tag:string
// } & HTMLDivElement&HTMLCollection
const Nav = styled.span`
  display: inline-flex;
  cursor: pointer;
  transition: all 500ms ;
  &.selected{
    color:blue;
    border-bottom: 1px solid black;
    
  }
`
type Props={
    title?:string,
    tag?:string,
    selected:string
    // @ts-ignore
    children:React.CElement[]
}
const Tabs=(props:Props)=>{
    const c = props.children
    console.log(c);
    let count = 0
    useEffect(()=>{
        count+=1
    },[])
    if (count>1){
        c.map((tag)=>{if(tag.type.name !== 'Tab'){throw new Error('子组件必须为Tab')}})

    }
    const titles = c.map((tag)=>tag.props.title)
    const contents = c.map((tag)=>tag.props.children.props.children)
    const current = titles.find((tag)=>{return tag===props.selected})
    const {selected,setSelected} = useContext(C)
    return (
       <>
           <div>
               <div >
                   {titles.map((tag)=>{
                      return  <Nav className={props.selected===tag?'selected':''}  key={tag} onClick={()=>setSelected(tag)}>{tag}</Nav>
                   })}
               </div>
               <div>
                   {c.map(tag=>tag.props.title===current?tag.props.children.props.children:"")}
               </div>
           </div>

       </>

    )
}

export {Tabs}