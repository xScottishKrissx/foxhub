// import logo from './logo.svg';
import React from 'react';
import './App.css';




import backgroundImage from './images/background_image.jpeg'
import coleSkateboard from './images/cole_skateboard.png'
import skateType from './images/skate_type.png'

function App() {


console.log("Render")

  const style = {
    backgroundImage: 'url(' + backgroundImage + ')',
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "auto",
    // maxWidth:"1200px",
    width:"100%",
  }

  return (
    <div className="App" >

      <div  className="section1" style={style}>
        
        <span id="section1ImageWrapper">
          <img id="coleSkateboard" src={coleSkateboard} alt="text" />
          <img id="skateType" alt="text" src={skateType} />
        </span>


         <h1>THE HOME OF SKATEBOARDING</h1>
         <p>Things change, boards change, shoes changes, tricks change, skaters change</p>
         
         
         <button>LEARN MORE</button>

         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,96L60,80C120,64,240,32,360,42.7C480,53,600,107,720,160C840,213,960,267,1080,272C1200,277,1320,235,1380,213.3L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>


         {/* M78,200 c175,-72 166,76 348,2 */}



         <span className="gradientSection"></span>
       </div>

        <div>
            <p>Keep it fresh</p>
           <h2>BRAND NEW PRODUCTS</h2>
           <div className="imageRow">

             <div className="imageRowItem">
               <span>RIPNDIP BUTTERFLY DECK LAVENDER - 8.25"</span>
             </div>

             <div className="imageRowItem">
               <span>THRASHER MAG PULLOVER HOOD - BLACK</span>
             </div>

             <div className="imageRowItem">
               <span>SPITFIRE WHEELS NATURAL/YELLOW - 55MM</span>
             </div>

             <div className="imageRowItem">
               <span>DC SWITCH SKATE SHOE -WHITE/GUM</span>
             </div>

           </div>
           <button>SEE MORE</button>
           
        </div>






       <div>

         <div className="imageAndTextRow">
           <div className="imageAndTextRowText">
             <h2>INTERVIEW WITH DAEWON SONG</h2>
             <p> We got to sit down with Daewon at the London premiere for a chat on “what else is out there”</p>
             <button>READ MORE</button>
           </div>
           <div className="imageAndTextRowImage"></div>
         </div>

         <div className="imageAndTextRow">
           <div className="imageAndTextRowText">
             <h2>KEEP IT SOCIAL </h2>
             <p>Follow us on Instagram for the latest tricks from the best skaters around the globe!</p>
             <button>FOLLOW US</button>
           </div>
           <div className="imageAndTextRowImage"></div>
         </div>

       </div>




       <div>
          <h6>FIVE STAR REVIEWS</h6>
          {/* imagg */}
          <p>Platinum Trusted Service - Feefo 2021</p>
       </div>

       <div>

         <div className="footerTopSection">
           <div className="footerTopSectionContent">
             <div className="footerTopSectionContentImage">image</div>
             <div className="footerTopSectionContentText">
                <h5>Newsletter</h5>
                <h2>STAY IN TOUCH</h2>
                <p>Get the latest deals, news and gear from Cole Skate Co!</p>
                <button>SUBSCRIBE</button>
             </div>
           </div>
         </div>

         <div className="footerBottomSection">
           <div className="footerBottomSectionLeft"></div>
           <div className="footerBottomSectionMiddle"></div>
           <div className="footerBottomSectionRight"></div>
         </div>

       </div>



     </div>
    
  );
}

export default App;
