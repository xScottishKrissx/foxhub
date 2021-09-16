import './review.css';
import stars from '../../images/stars_1.png'
import sspcaLogo from '../../images/sspca_logo.png'
import foxProjectLogo from '../../images/thefoxproject_colour.jpg'
import wildlifeAidLogo from '../../images/wildlifeaidlogo_colour.jpg'
export const Review = (props) =>{
    
    return(
        
        <>
            <div className="section4">
                <h5>FRIENDS OF FOXES</h5>
                {/* <img src={stars} /> */}
                <div>
                    <img src={sspcaLogo}/>
                    <img src={foxProjectLogo}/>
                    <img src={wildlifeAidLogo}/>
                </div>

                <p>If you want more information or want to get involved in conservation and aid efforts.</p>
                
            </div>
        </>

    )
}

export default Review;