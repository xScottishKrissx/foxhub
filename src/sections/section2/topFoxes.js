import './topFoxes.css'

import square1Img from '../../images/arcticFox_square.jpg';
import square2Img from '../../images/fennecFox_square.jpg';
import square3Img from '../../images/hoaryFox_square.jpeg';
import square4Img from '../../images/redFox_square.jpg';

export const TopFoxes = (props) =>{

    function showMessage(){
        
        if(document.getElementById("showMessage").classList.contains('showMessage')){
            document.getElementById("showMessage").classList.remove("showMessage")
        }else{
            document.getElementById("showMessage").classList.add("showMessage")
        }       
    }


return(
    <>
    
        <div className="section2">

            <div className="section2Content">
                {/* <p>Welcome to foxes</p> */}
                    <h2>THE TOP 4 FOXES</h2>


                    <div className="imageRow">

                        <div id="item1" className="imageRowItem">
                        <img src={square1Img} alt="text" />
                        <span>Arctic Fox <br/> ( Lycalopex vetulus )</span>
                        </div>

                        <div className="imageRowItem">
                        <img src={square2Img} alt="text" />
                        <span>Fennec Fox <br /> ( Vulpes zerda )</span>
                        </div>

                        <div className="imageRowItem">
                        <img src={square3Img} alt="text" />
                        <span>Hoary Fox <br /> ( Lycalopex vetulus )</span>
                        </div>

                        <div className="imageRowItem">
                        <img src={square4Img} alt="text" />
                        <span>Red Fox <br /> ( Vulpes vulpes )</span>
                        </div>

                    </div>

                    <button onClick={()=>showMessage()}>View 21 more...</button>
                    
                    <div id="showMessage">
                        <p>Nothing here right now but I am VERY tempted to add the other 21 types of foxes, a button activated row at a time, like above. Look at their wee faces, how does that not cheer you up?</p>
                    </div>
                   
  
            </div>

        </div>
    </>
)

}

export default TopFoxes;