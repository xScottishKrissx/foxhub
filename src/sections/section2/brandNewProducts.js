import './brandNewProducts.css'

import deck from '../../images/deck_1.jpg';
import hoodie from '../../images/hoodie_1.jpg';
import wheels from '../../images/wheels_1.jpg';
import shoes from '../../images/shoes_1.jpg';

export const BrandNewProducts = (props) =>{
    
return(
    <>
        <div className="section2">

            <p>Keep it fresh</p>
            <h2>BRAND NEW PRODUCTS</h2>
            <div className="imageRow">

                <div className="imageRowItem">
                <img src={deck} alt="text" />
                <span>RIPNDIP BUTTERFLY DECK LAVENDER - 8.25"</span>
                </div>

                <div className="imageRowItem">
                <img src={hoodie} alt="text" />
                <span>THRASHER MAG PULLOVER HOOD - BLACK</span>
                </div>

                <div className="imageRowItem">
                <img src={wheels} alt="text" />
                <span>SPITFIRE WHEELS NATURAL/YELLOW - 55MM</span>
                </div>

                <div className="imageRowItem">
                <img src={shoes} alt="text" />
                <span>DC SWITCH SKATE SHOE -WHITE/GUM</span>
                </div>

            </div>

            <button>SEE MORE</button>

        </div>
    </>
)

}

export default BrandNewProducts;