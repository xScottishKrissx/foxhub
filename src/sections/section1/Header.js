import './header.css';
import React from 'react'

import backgroundImage from '../../images/fox1.jpg'
import foxIcon from '../../images/fox-hub.png'
import foxLogo from '../../images/fox-hub-2-mixed-text.png'

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
        window.addEventListener('scroll', this.scroll);   
    }


    toggleMenu(){
        
        if(this.state.menuOpen === true){
            this.setState({menuOpen: false})
            console.log("Open Menu")
            
            document.body.classList.remove('stop-scrolling')
            
            document.getElementById("menu").classList.remove("openMenu")
            document.getElementById("menu").classList.add("closeMenu")
            document.getElementById("menuBackground").classList.remove("menuBackground")
            
        }else{
            this.setState({menuOpen:true})
            console.log("Close Menu")
            
            document.body.classList.add('stop-scrolling')
            
            document.getElementById("menu").classList.remove("closeMenu")
            document.getElementById("menu").classList.add("openMenu")
            document.getElementById("menuBackground").classList.add("menuBackground")
        }
    }

    render(){
        return(
            <>
            <div  className="section1" style={style}>
                
                <nav>
                    <div className="navbar" ><img className="logo" src={foxIcon} /></div>
                    
                    <div className="navbar" onClick={()=>this.toggleMenu()}>
                        <span class="material-icons">menu</span>
                    </div>


                    <div class="menu" id="menu">
                        
                        <div id="menuHeader">
                            <span className="websiteLogo" onClick={()=>this.toggleMenu()}>
                                <img class="logo" src={foxIcon} />
                            </span>

                            <span className="toggleMenuButton" onClick={()=>this.toggleMenu()}>
                                <span class="material-icons">close</span>
                            </span>
                        </div>

                        <div id="menuItems">
                            <ul>
                                <li>Home</li>
                                <li>Fox Database</li>
                                <li>Fox Shop</li>
                                <li>Adopt a Fox</li>
                                <li>Fox Taming Progress</li>
                                <li>Fight Against Fox Hunting</li>
                            </ul>
                        </div>

                        <div id="menuFooter">
                            <span>0141 369 5433</span>
                            <span>Email</span>
                            <span>INSTAGRAM</span>
                        </div>


                    </div>
                </nav>

                <header className="headerWrapper">
                <span id="section1ImageWrapper">
                    <img id="foxLogo" src={foxLogo} alt="text" />
                    {/* <img id="skateType" alt="text" src={foxIcon} /> */}
                </span>

                <h1>THE FOX WIKI</h1>
                <p>Everything Fox.</p>
                
                <button>LEARN MORE</button>
                </header>

                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 300"><path fill="white" fill-opacity="1" d="M0,128L80,154.7C160,181,320,235,480,240C640,245,800,203,960,181.3C1120,160,1280,160,1360,160L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg> */}

                <span className="gradientSection"></span>
                <span onClick={()=>this.toggleMenu()} id="menuBackground"></span>


            </div>
        </>
        )
    }
}

export default Header;