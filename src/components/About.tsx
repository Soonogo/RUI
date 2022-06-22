import styled from "styled-components"

const A = styled.a`
  color: white;
  background: cadetblue;
`
const About=()=>{
    return (
        <div>
            <h1>About</h1>
            <p>Vue版点击<A href="http://songen.buzz/V3UI-website/#/">V3UI</A></p>
        </div>
    )
}
export {About}