import react from "react";
import styled from "styled-components";
import {HashRouter as Router, Link} from "react-router-dom";

const Wrapper = styled.div`
    display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
    flex-direction: column;
  
`
const IMG = styled.img` 
    width: 200px;
    height: 100%; 
    margin-top: -350px;
`
const UL = styled.ul`
  display: flex;
  > li {
    margin: 0 10px;
  }
`

export function Home() {
    return (
        <Wrapper>
            <IMG src="https://s2.loli.net/2022/05/27/FntYI9VW15vEwR8.png" alt=""/>
                <div>
                    <UL>
                        <li>
                            <Link to="/get-start">GetStart</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                    </UL>
                </div>
        </Wrapper>
    )
}