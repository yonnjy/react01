import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import { useRef, useState } from "react";

const MainVisual = () => {
    const d = [
        {id:1, title: 'title01', desc: 'description01', img: '01.jpg'},
        {id:2, title: 'title02', desc: 'description02'},
        {id:3, title: 'title03', desc: 'description03'},
    ];
    const [num, setNum] = useState(1);
    const set = {
        arrows: false,
        afterChange: (idx) => setNum(idx + 1)
    }

    const ms = useRef(null);

    return (
        <div>
            
            <Slider {...set} ref={ms}>
                {
                    d.map((it, idx) => {
                        return (
                            <div className={`itm itm0${idx + 1}`} key={idx}>
                                <div className="inner">
                                    <h2>{d[num - 1].title}</h2>
                                    <p>{d[num - 1].desc}</p>
                                    {/* <img src={process.env.PUBLIC_URL + '/'} alt="" /> */}
                                    
                                </div>
                            </div>
                        )
                    })
                }
            </Slider>
            <strong>0{num}</strong> / <span>0{d.length}</span>
            <div className="tap">{d[num - 1].title}</div>
            <button onClick={() => ms.current.slickPrev()}>이전</button>
            <button onClick={() => ms.current.slickNext()}>다음</button>

            <ul>
                {d.map((it, idx) => {
                    return (
                        <li onClick={() => ms.current.slickGoTo(idx)}>0{idx + 1}</li>
                    )
                })}
            </ul>

            <div className="img">
                <img src="./images/main01.jpg" alt="" />
            </div>
        </div>
    )
}

export default MainVisual;