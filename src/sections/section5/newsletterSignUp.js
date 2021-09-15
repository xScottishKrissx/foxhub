import './newsletterSignUp.css';

import coleSkateboard from '../../images/cole_skateboard.png'
import foxHubLogo from '../../images/fox-hub.png'

export const NewsletterSignUp = (props) =>{
    
    return(
        
        <>
            <div className="section5">
                <div className="blockWrapper">
                {/* <div className="singleBlock"></div> */}
                    <div className="block">
                        Block 1
                        <img src={foxHubLogo} />
                    </div>

                    <div className="block">
                        <div className="blockContent">
                            <h6>NEWSLETTER</h6>
                            <h2>STAY IN TOUCH !</h2>
                            <p>Get the latest fox updates, merchandise and aid efforts from Fox Hub</p>
                            <button>Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default NewsletterSignUp;