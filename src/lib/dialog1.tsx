import styled from "styled-components";

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
    min-height: 100vh;
  `;
const Wrapper = styled.div`
    display: flex;
    background: rgba(0,0,0,0.2);
    width: 200px;
    height: 200px;
    flex-direction: column;
    font-size: 14px;
  left : 50%;
  transform: translateX(-50%);
    position: relative;

  > main{
    flex: 1;
  }
    > footer{
      position: absolute;
      right: 0 ;
      bottom: 0 ;
      button{
        font-size: 14px ;

      }
    }
`
const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 100%;
  position: absolute;
`

const Dialog1:React.FC<Props>=(props)=>{
    const {title,content,cancel}=props;
    return(
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
        </View>

    )
}

export {Dialog1}