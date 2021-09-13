import './header.css';
import React from 'react'

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

  export class Header extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            menuOpen:false
        }
    }

    toggleMenu(){
        
        if(this.state.menuOpen === true){
            this.setState({menuOpen: false})
            console.log("Open Menu")
            
            document.body.classList.remove('stop-scrolling')
            
            document.getElementById("menu").classList.remove("openMenu")
            document.getElementById("menu").classList.add("closeMenu")
            
        }else{
            this.setState({menuOpen:true})
            console.log("Close Menu")
            
            document.body.classList.add('stop-scrolling')
            
            document.getElementById("menu").classList.remove("closeMenu")
            document.getElementById("menu").classList.add("openMenu")
        }
    }

    render(){
        return(
            <>
            <div  className="section1" style={style}>
                
                <nav>
                    <div>Logo</div>
                    <div onClick={()=>this.toggleMenu()}>Menu Activate</div>

                    <div class="menu" id="menu">

                        <div id="menuHeader">
                            <span>Logo</span>
                            <span>Close Menu Button</span>
                        </div>

                        <div id="menuItems">
                            <ul>
                                <li>Home</li>
                                <li>Clothing</li>
                                <li>Skateboards</li>
                                <li>Footwear</li>
                                <li>Accessories</li>
                                <li>Blog</li>
                            </ul>
                        </div>

                        <div id="menuFooter">
                            <span>0141 370 321</span>
                            <span>Email</span>
                            <span>INSTA</span>
                        </div>


                    </div>
                </nav>

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
}

export default Header;

// export const  = () =>{

//     function openMenu(){
//         console.log("Open Menu!!")
//     }

//     return(
//         <>
//             <div  className="section1" style={style}>
                
//                 <nav>
//                     <div>Logo</div>
//                     <div onClick={()=>openMenu()}>Menu Activate</div>

//                     <div class="menu">

//                         <div id="menuHeader">
//                             <span>Logo</span>
//                             <span>Close Menu Button</span>
//                         </div>

//                         <div id="menuItems">
//                             <ul>
//                                 <li>Home</li>
//                                 <li>Clothing</li>
//                                 <li>Skateboards</li>
//                                 <li>Footwear</li>
//                                 <li>Accessories</li>
//                                 <li>Blog</li>
//                             </ul>
//                         </div>

//                         <div id="menuFooter">
//                             <span>0141 370 321</span>
//                             <span>Email</span>
//                             <span>INSTA</span>
//                         </div>


//                     </div>
//                 </nav>

//                 <header className="headerWrapper">
//                 <span id="section1ImageWrapper">
//                     <img id="coleSkateboard" src={coleSkateboard} alt="text" />
//                     <img id="skateType" alt="text" src={skateType} />
//                 </span>

//                 <h1>THE HOME OF SKATEBOARDING</h1>
//                 <p>Things change, Boards change, shoes changes, tricks change, skaters change</p>
                
//                 <button>LEARN MORE</button>
//                 </header>


//                 {/* <svg height="100%" width="100%" id="svg" viewBox="0 0 1440 400" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><path d="M 0,400 C 0,400 0,200 0,200 C 160.8,176 321.6,152 490,167 C 658.4,182 834.4000000000001,236 994,248 C 1153.6,260 1296.8,230 1440,200 C 1440,200 1440,400 1440,400 Z" stroke="none" stroke-width="0" fill="#fff" ></path></svg> */}
//                 {/* M78,200 c175,-72 166,76 348,2 */}
//                 {/* <svg height="100%" width="100%" id="svg" viewBox="0 0 1440 400" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><path d="M 0,400 C 0,400 0,200 0,200 C 160.8,176 321.6,152 490,167 C 658.4,182 834.4000000000001,236 994,248 C 1153.6,260 1296.8,230 1440,200 C 1440,200 1440,400 1440,400 Z" stroke="none" stroke-width="0" fill="white" ></path></svg> */}
//                 <span className="gradientSection"></span>


//             </div>
//         </>
//     )
// }

// export default ;