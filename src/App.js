import { useState } from "react";

const App = () => {
// useState 변수를 만들어주는 방법
const [on, setOn] = useState('');
    return (
        // 'App ' + on한칸 띄어줘야함, `App ${on}`아님 이렇게
        <div className={`App ${on}`}>
            {console.log(on)}
            <strong>토마토</strong>
            <button onClick={()=> setOn('on')}>짜잔~~~</button>
        </div>
    )
}

export default App;