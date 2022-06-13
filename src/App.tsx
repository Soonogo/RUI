import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {Route,Link, BrowserRouter,Routes,Router} from 'react-router-dom'
import styled from 'styled-components'
import {Home} from './components/Home'
import {GetStart} from "./views/GetStart";
import {Button} from "./components/Button";


function App() {
  const [count, setCount] = useState(0)
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route index element={<Home/>}/>
                <Route path="about" element={<About/>}/>
                <Route path="get-start" element={<GetStart/>}>
                    <Route path="button" element={<Button/>}/>
                    <Route path="dialog" element={<Button/>}/>
                    <Route path="tab" element={<Button/>}/>
                    <Route path="switch" element={<Button/>}/>
                </Route>
            </Routes>
        </BrowserRouter>

    );
}



function About() {
  return <h2>About</h2>;
}
export default App
