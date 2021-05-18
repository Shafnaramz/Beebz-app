import React from "react";
import './review.css'
import BeebizzlData from "../dataconnection";
class Review extends React.Component{
   
    render(){
        var data=BeebizzlData.getReview()
        return(
         <div className="review card-group">

    <div className="card card-1 ">
      <div className="card-body">
      <img src={data[1].img} className="card-img-top" alt="..."></img>

    
 
  </div>
  </div>

    <div className="card card-2 ">
      <div className="card-body ">
     
      <div className="quotes-left">"</div>
        <div className="card-text p">{data[1].coment}</div>
        <div className="quotes-right">"</div>


        <h5 className="card-title">{data[1].name}</h5>
<h6>{data[1].identity}</h6>

     
</div>
  </div>
 
    <div className="card card-3">
      <div className="card-body">
      <img src={data[1].img2} className="card-img-top" alt="..."></img>

      </div>
    </div>
  </div>

       )
    }
}
export default Review;