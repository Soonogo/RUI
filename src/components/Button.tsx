import styled from "styled-components";

const Button1 = styled.button`
  background: lightblue;
  border-radius: 5px;
  border: none;
  padding: 2px;
  box-shadow: 0 0 5px #ccc;
  &:hover {
     cursor: pointer;
  }
`
const Button:React.FC=()=>{
    return(
        <div>
            <Button1>button</Button1>
        </div>
    )
}
export {Button};