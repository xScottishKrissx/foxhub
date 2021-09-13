import './header.css';

import backgroundImage from '../../images/background_image.jpeg'
import coleSkateboard from '../../images/cole_skateboard.png'
import skateType  from '../../images/skate_type.png'

const style = {
    backgroundImage: 'url(' + backgroundImage + ')',
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "auto",
    // maxWidth:"1200px",
    width:"100%",
  }

export const Header = (props) =>{
    return(
        <>
            <div  className="section1" style={style}>
                
                <header className="headerWrapper">
                <span id="section1ImageWrapper">
                    <img id="coleSkateboard" src={coleSkateboard} alt="text" />
                    <img id="skateType" alt="text" src={skateType} />
                </span>

                <h1>THE HOME OF SKATEBOARDING</h1>
                <p>Things change, Boards change, shoes changes, tricks change, skaters change</p>
                
                <button>LEARN MORE</button>
                </header>


                {/* <svg height="100%" width="100%" id="svg" viewBox="0 0 1440 400" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><path d="M 0,400 C 0,400 0,200 0,200 C 160.8,176 321.6,152 490,167 C 658.4,182 834.4000000000001,236 994,248 C 1153.6,260 1296.8,230 1440,200 C 1440,200 1440,400 1440,400 Z" stroke="none" stroke-width="0" fill="#fff" ></path></svg> */}
                {/* M78,200 c175,-72 166,76 348,2 */}
                {/* <svg height="100%" width="100%" id="svg" viewBox="0 0 1440 400" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><path d="M 0,400 C 0,400 0,200 0,200 C 160.8,176 321.6,152 490,167 C 658.4,182 834.4000000000001,236 994,248 C 1153.6,260 1296.8,230 1440,200 C 1440,200 1440,400 1440,400 Z" stroke="none" stroke-width="0" fill="white" ></path></svg> */}
                <span className="gradientSection"></span>


            </div>
        </>
    )
}

export default Header;