import styled from "styled-components";
import ReactDOM from 'react-dom'

type Props={
    title:string,
    content:string,
    cancel:()=>void
}
const View = styled.div`
    display: flex;
    justify-content: content;  
    align-items: center;
    min-width: 80vw;

`;
const Wrapper = styled.div`
    display: flex;
    background: white;
    width: 300px;
    height: 200px;
    flex-direction: column;
    font-size: 14px;
    left : 50%;
    position: relative;
    position: absolute;
    top: 50%;
    transform: translate(-50%,-50%);
    padding: 3px;
    border-radius: 4px;

  > main{
  }
    > footer{
      position: absolute;
      right: 2px ;
      bottom: 2px ;
      button{
        font-size: 14px ;

      }
    }
`
const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  top: 0;
  position: absolute;
`

const Dialog1:React.FC<Props>=(props)=>{
    const {title,content,cancel}=props;
    return ReactDOM.createPortal(
        <View>
            <Overlay onClick={()=>cancel()}></Overlay>
            <Wrapper>
                <header>
                    <h1>{title}</h1>
                </header>
                <main>
                    <p>{content}</p>
                </main>
                <footer>
                    <button onClick={()=>cancel()}>OK</button>
                    <button onClick={()=>cancel()}>Cancel</button>
                </footer>
            </Wrapper>
        </View>,
        document.body

    )
}

export {Dialog1}