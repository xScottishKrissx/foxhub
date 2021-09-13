import './newsletterSignUp.css';

import coleSkateboard from '../../images/cole_skateboard.png'

export const NewsletterSignUp = (props) =>{
    
    return(
        
        <>
            <div className="section5">
                <div className="blockWrapper">
                {/* <div className="singleBlock"></div> */}
                    <div className="block">
                        Block 1
                        <img src={coleSkateboard} />
                    </div>

                    <div className="block">
                        <div className="blockContent">
                            <h6>NEWSLETTER</h6>
                            <h2>STAY IN TOUCH !</h2>
                            <p>Get the latest deals, news and gear from Cole Skate Co!</p>
                            <button>Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default NewsletterSignUp;