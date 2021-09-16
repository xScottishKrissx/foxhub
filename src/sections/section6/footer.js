import './footer.css'

import coleTypeReverse from '../../images/cole_type_reverse.png'
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
                    <img src={coleTypeReverse} alt=""/>
                </div>

                <div className="footerBottomSectionRight">
                    <span>0141 370 321</span>
                    <span>EMAIL</span>
                    <span>INSTA</span>
                </div>
            </div>
        </div>
    </>

)
}

export default Footer;