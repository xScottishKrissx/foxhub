import './foxFriends.css';

import sspcaLogo from '../../images/sspca_logo.png'
import foxProjectLogo from '../../images/thefoxproject_colour.jpg'
import wildlifeAidLogo from '../../images/wildlifeaidlogo_colour.jpg'
export const FoxFriends = (props) =>{
    
    return(
        
        <>
            <div className="section4">
                <h5>FRIENDS OF FOXES</h5>
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

export default FoxFriends;