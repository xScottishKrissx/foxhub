import './review.css';
import stars from '../../images/stars_1.png'
export const Review = (props) =>{
    
    return(
        
        <>
            <div className="section4">
                <h6>FIVE STAR REVIEWS</h6>
                <img src={stars} />
                <p>Platinum Trusted Service - Feefo 2021</p>
            </div>
        </>

    )
}

export default Review;