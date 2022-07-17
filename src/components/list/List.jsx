import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from "@material-ui/icons"
import "./list.scss"
import Listitems from './../listitems/Listitems';
import { useRef, useState } from "react";

export default function List() {
    const [isMoved, setIsMOved] = useState(false);
    const [slideNumber, setSlideNumber] = useState(0);

    const listRef = useRef();

    const handleClick = (direction) =>{
        setIsMOved(true)
                    // --important--
        let distance = listRef.current.getBoundingClientRect().x -50
        if(direction === "left" && slideNumber > 0){
            setSlideNumber(slideNumber -1);
            listRef.current.style.transform = `translateX(${230 + distance}px)`
        }
        if(direction === "right" && slideNumber < 5){
            setSlideNumber(slideNumber +1);
            listRef.current.style.transform = `translateX(${-230 + distance}px)`
        }
        // console.log(distance)
    }
    return (
            <div className="list">
                <span className="listTitle"> Continue to watch</span>
                <div className="wrapper">
                    <ArrowBackIosOutlined 
                    className="sliderArrow left" 
                    onClick={()=>handleClick("left")}
                    style={{display: !isMoved && "none"}}
                    />
                    <div className="container" ref ={listRef}>
                        <Listitems index={0}/>
                        <Listitems index={1}/>
                        <Listitems index={2}/>
                        <Listitems index={3}/>
                        <Listitems index={4}/>
                        <Listitems index={5}/>
                        <Listitems index={6}/>
                        <Listitems index={7}/>
                        <Listitems index={8}/>
                        <Listitems index={9}/>

                    </div>
                    <ArrowForwardIosOutlined className="sliderArrow right"onClick={()=>handleClick("right")}/>
                </div>
            </div>
        
    )
}
