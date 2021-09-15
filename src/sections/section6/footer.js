import './footer.css'

import coleTypeReverse from '../../images/cole_type_reverse.png'
import foxHubIcon from '../../images/fox-hub-2.png'
export const Footer = (props) =>{
    
return(
    
    <>
        <div className="section6">
            <div className="footerWrapper">

                <div className="footerBottomSectionLeft">
                    <span>DELIVERY</span>
                    <span>TERMS</span>
                    <span>CONTACT US</span>
                </div>

                <div className="footerBottomSectionMiddle">
                    <img src={foxHubIcon} alt=""/>
                </div>

                <div className="footerBottomSectionRight">
                    <span>0141 369 5433</span>
                    <span>EMAIL</span>
                    <span>INSTAGRAM</span>
                </div>
            </div>
        </div>
    </>

)
}

export default Footer;