import { useState } from 'react';
import styled from 'styled-components';
import {Dialog1} from '../lib/dialog1';

const Button = styled.button`
  position: relative;
`
const Dialog:React.FC = ()=>{
    const content = `事了拂衣去，深藏功与名`
    const [show,setShow] = useState(false);
    const onClick=()=>{
        setShow(!show)
    }
    const cancel = ()=>{
        setShow(false)
    }
    return (
        <div>
            {!show ? <Button onClick={onClick}>打开对话框</Button> : ''}
            {show ? <Dialog1 title="李白" content={content} cancel={cancel} /> : ''}
        </div>
    )
}

export {Dialog}