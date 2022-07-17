import { InfoOutlined, PlayArrow } from '@material-ui/icons'
import './featured.scss'

export default function Featured({type}) {
    return (
        <div className = "featured">
            {type &&(
                <div className="category">
                    <span>{type ==="movie" ? "Movies" : "Series"} </span>
                    <select name="genre" id="genre">
                        <option>Genre</option>
                        <option value="adventure">Adventure</option>
                        <option value="comedy">Comedy</option>
                        <option value="crime">Crime</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="historical">Historical</option>
                        <option value="horror">Horror</option>
                        <option value="romance">Romance</option>
                        <option value="sci-fi">Sci-fi</option>
                        <option value="thriller">Thriller</option>
                        <option value="animation">Animation</option>
                        <option value="drama">Drama</option>
                        <option value="documentary">Documentary</option>
                    </select>
                </div>
            )}
            <img
            src="https://www.incimages.com/uploaded_files/image/1920x1080/getty_474606212_2000133320009280160_240366.jpg"
            alt="" />
            <div className="info">
                <img src="https://occ-0-2433-444.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABRKrgH8goki6B50_fsipiwG8-efCu0w57iY4KsMiMOkV_xpwmCR1bwdO-qexN7jGsMEEVHu_udqNGVab2eGM-RxjYidvNBjuWkAE.png?r=df1"
                alt="" />

                <span className="desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Maxime doloribus dignissimos eaque alias hic saepe debitis ullam. 
                    Fuga corrupti tenetur recusandae, eveniet eius at assumenda, 
                    dicta autem ducimus amet voluptas.
                </span>
                <div className="buttons">
                <button className="play">
                    <PlayArrow/>
                    <span>Play</span>
                    </button>
                <button className="more">
                    <InfoOutlined/>
                    <span>info</span>
                </button>
                </div>
            </div>
        </div>
    )
}


