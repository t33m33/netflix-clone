import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from "@material-ui/icons"
import { useState } from "react"
import "./listitems.scss"

export default function Listitems({index}) {
    const [isHovered, setIsHovered] = useState(false);
    const trailer = 
    "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
    return (
        <div className =" listItem" 
            style={{left: isHovered && index *225 -50 + index *2.5 }}
            onMouseEnter={()=>setIsHovered(true)} 
            onMouseLeave={()=>setIsHovered(false)}>
            <img 
            src="https://occ-0-92-1722.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABS_KfndYsc2G1_1e7FBqxQv4SabLmIbEaFDRik3QGWHRVO1Cr6ajHRVwbAQ3qZ8tw7QkVEtPPEAK6I798EcIbFhy4JiS.jpg?r=70a" 
            alt="" />

            {isHovered && (
        <>
            <video src ={trailer} autoPlay={true} loop/>
             <div className="itemInfo">
                 <div className="icons">
                     <PlayArrow className="icon"/>
                     <Add className="icon"/>
                     <ThumbUpAltOutlined className="icon"/>
                     <ThumbDownAltOutlined className="icon"/>
                 </div>
                 <div className="itemInfoTop">
                     <span>1 hour 14 mins</span>
                     <span className= "limit">+16</span>
                     <span>2020</span>
                 </div>
                 <div className="desc">
                     Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptatibus inventore,
                 </div>
                 <div className="genre">Action</div>
             </div>
             </>
             )};
        </div>
    )
}

