// import logo from './logo.svg';
import React from 'react';
import './App.css';




import backgroundImage from './images/background_image.jpeg'
import coleSkateboard from './images/cole_skateboard.png'
import skateType from './images/skate_type.png'
import deck from './images/deck_1.jpg';
import hoodie from './images/hoodie_1.jpg';
import wheels from './images/wheels_1.jpg';
import shoes from './images/shoes_1.jpg';
import interviewImage from './images/interview_image.jpg'
import socialImage  from './images/social_image.jpeg'
import stars from './images/stars_1.png'
import coleTypeReverse from './images/cole_type_reverse.png'

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
        
        <header className="headerWrapper">
          <span id="section1ImageWrapper">
            <img id="coleSkateboard" src={coleSkateboard} alt="text" />
            <img id="skateType" alt="text" src={skateType} />
          </span>

          <h1>THE HOME OF SKATEBOARDING</h1>
          <p>Things change, Boards change, shoes changes, tricks change, skaters change</p>
          
          <button>LEARN MORE</button>
        </header>


         {/* <svg height="100%" width="100%" id="svg" viewBox="0 0 1440 400" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><path d="M 0,400 C 0,400 0,200 0,200 C 160.8,176 321.6,152 490,167 C 658.4,182 834.4000000000001,236 994,248 C 1153.6,260 1296.8,230 1440,200 C 1440,200 1440,400 1440,400 Z" stroke="none" stroke-width="0" fill="#fff" ></path></svg> */}
         {/* M78,200 c175,-72 166,76 348,2 */}
         {/* <svg height="100%" width="100%" id="svg" viewBox="0 0 1440 400" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><path d="M 0,400 C 0,400 0,200 0,200 C 160.8,176 321.6,152 490,167 C 658.4,182 834.4000000000001,236 994,248 C 1153.6,260 1296.8,230 1440,200 C 1440,200 1440,400 1440,400 Z" stroke="none" stroke-width="0" fill="white" ></path></svg> */}
         <span className="gradientSection"></span>


       </div>
{/* <svg height="100%" width="100%" id="svg" viewBox="0 0 1440 400" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><path d="M 0,400 C 0,400 0,200 0,200 C 160.8,176 321.6,152 490,167 C 658.4,182 834.4000000000001,236 994,248 C 1153.6,260 1296.8,230 1440,200 C 1440,200 1440,400 1440,400 Z" stroke="none" stroke-width="0" fill="#fff" ></path></svg> */}
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






       <div className="section3">

         {/* <div className="curved upper">
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 1440 320"><path fill="#EBEBEB" fill-opacity="1" d="M0,128L80,117.3C160,107,320,85,480,106.7C640,128,800,192,960,208C1120,224,1280,192,1360,176L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg> 
         </div> */}
        <div className="imageAndTextRowWrapper">
          <div className="imageAndTextRow upper">
            <div className="imageAndTextRowText">
              <h2>INTERVIEW WITH DAEWON SONG</h2>
              <p> We got to sit down with Daewon at the London premiere for a chat on “what else is out there”</p>
              <button>READ MORE</button>
            </div>
            <div className="imageAndTextRowImage">
              <span id="interviewImage" className="imageContainer">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319"><path fill="#EBEBEB" fill-opacity="1" d="M0,1200L1440,111L1440,320L0,320Z"></path></svg>
              </span>
              {/* <img src={interviewImage} alt="text" /> */}
              </div>
          </div>

          <div className="imageAndTextRow lower">
            <div className="imageAndTextRowText">
              <h2>KEEP IT SOCIAL </h2>
              <p>Follow us on Instagram for the latest tricks from the best skaters around the globe!</p>
              <button>FOLLOW US</button>
            </div>
              <div className="imageAndTextRowImage ">
                <span id="socialImage" className="imageContainer">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319"><path fill="#EBEBEB" fill-opacity="1" d="M0,1200L1440,111L1440,320L0,320Z"></path></svg>
                </span>
                
              {/* <img src={socialImage} alt="text" /> */}
              </div>
          </div>
        </div>
        

      
         {/* <div className="curved lower">


          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,32L80,32C160,32,320,32,480,58.7C640,85,800,139,960,133.3C1120,128,1280,64,1360,32L1440,0L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>

         </div> */}

       </div>




       <div className="section4">
          <h6>FIVE STAR REVIEWS</h6>
          {/* imagg */}
          <img src={stars} />
          <p>Platinum Trusted Service - Feefo 2021</p>
       </div>

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


     </div>
    
  );
}

export default App;
