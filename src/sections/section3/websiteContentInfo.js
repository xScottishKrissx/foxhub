import './websiteContentInfo.css';

export const WebsiteContentInfo = (props) =>{
    
    return(
        
        <>
            <div className="section3" id="section3">

                {/* <div className="curved upper">
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 1440 320"><path fill="#EBEBEB" fill-opacity="1" d="M0,128L80,117.3C160,107,320,85,480,106.7C640,128,800,192,960,208C1120,224,1280,192,1360,176L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg> 
                </div> */}
                <div className="imageAndTextRowWrapper">

                    <div className="imageAndTextRow upper">
                        <div className="imageAndTextRowText">
                            <h2>HOW FOXES COMMUNICATE</h2>
                            <p>We go in depth with the different range of noises that foxes use to communicate with each other and anything  in their environment.</p>
                            <button>READ MORE</button>
                        </div>
                        <div className="imageAndTextRowImage">
                            <span id="upperImage" className="imageContainer">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319"><path fill="#EBEBEB" fill-opacity="1" d="M0,1200L1440,111L1440,320L0,320Z"></path></svg>
                            </span>
                            
                        </div>
                    </div>

                    <div className="imageAndTextRow lower">
                        
                        <div className="imageAndTextRowText">
                            <h2>MISCONCEPTIONS ABOUT FOXES</h2>
                            <p>Less attacks than vending machines falling on people, let's talk about the "danger" of foxes</p>
                            <button>READ MORE</button>
                        </div>

                        <div className="imageAndTextRowImage ">
                            <span id="lowerImage" className="imageContainer">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319"><path fill="#EBEBEB" fill-opacity="1" d="M0,1200L1440,111L1440,320L0,320Z"></path></svg>
                            </span>
                        
                        </div>
                    </div>

                </div>



                {/* <div className="curved lower">


                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,32L80,32C160,32,320,32,480,58.7C640,85,800,139,960,133.3C1120,128,1280,64,1360,32L1440,0L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>

                </div> */}

            </div>
        </>
        
    )
}

export default WebsiteContentInfo;