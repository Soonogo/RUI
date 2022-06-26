import {createContext, useState } from 'react';
import { Tab } from '../lib/Tab';
import {Tabs} from '../lib/Tabs'
import {C} from './Context';

const TabView =()=>{
    const [selected,setSelected] = useState('导航2')
    // @ts-ignore
    return (
        <C.Provider value={{selected, setSelected}}>
            <Tabs selected={selected} >
                <Tab title="导航1" >
                    <p>当你离开以后 <br/> 我没了牵挂 <br/>却留下孤独和忧伤</p>
                </Tab>
                <Tab title="导航2" >
                    <p>所有的昨日都遗失在眼前<br/>
                        念念不忘的岁月<br/>
                        开始沿着时间的长河<br/>
                        缓慢地流去远方<br/>
                        你在回忆的源头苏醒<br/>
                        轻轻蠕动的样子真的很美<br/>
                        我沉沦于昨夜的梦里<br/>
                        隐约可见幸福即将来临<br/>
                        那些过往曾经的笑容<br/>
                        反反复复出现在我脑海<br/>
                        就这样静静的等待<br/>
                        等待你的爱情向我跃来<br/>
                        如今，每个梦里<br/>
                        都会出现你的身影<br/>
                        每首诗中都会把你深情的呼喊<br/>
                        我们终究不能回归起点<br/>
                        也许相见不如怀念<br/>
                        我永远怀念你微笑的样子<br/>
                        心中的记忆填满心房</p>

                </Tab>
            </Tabs>
        </C.Provider>

    );
}

export {TabView};