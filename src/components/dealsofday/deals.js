import React from "react";
 import './deals.css'
import BeebizzlData from "../dataconnection";
import { Line } from 'rc-progress';
class Deals extends React.Component{
   
    render(){
        var data=BeebizzlData.getDataByCategory( this.props.category);
        var prodId=Math.floor(Math.random()*10)% BeebizzlData.getItemCount()-4;
        const progressStyle={
            width:"45%",
            backgroundColor:"#4AC526"
        }
        if(prodId<0)
        prodId=0
        return(

            <div className="ItemList">
               
               {/* <div className="title"><h5>{this.props.title}<span className="view"><a href="#">View All</a></span></h5></div> */}
 
 <div className="card">
               <div className="row  titlegroup" >
            
            <div className="col-sm-8 title" >
            <p> <svg xmlns="http://www.w3.org/2000/svg" width="31" height="26.804" viewBox="0 0 31 26.804">
  <g id="time-left_1" data-name="time-left 1" transform="translate(0 -0.098)">
    <g id="Group">
      <g id="Layer_2_16" data-name="Layer 2 16">
        <g id="Group-2" data-name="Group">
          <path id="Vector" d="M1.794.032c-.256.055-.516.1-.775.146a1.106,1.106,0,0,0-1,1.266,1.081,1.081,0,0,0,.508.689,1.39,1.39,0,0,0,.945.18c.308-.05.619-.108.923-.175A1.084,1.084,0,0,0,3.3.823,1.268,1.268,0,0,0,1.794.032Z" transform="translate(16.837 24.56)"/>
          <path id="Vector-2" data-name="Vector" d="M.362,2.138a1.109,1.109,0,0,0,.464.545,1.4,1.4,0,0,0,1.11.144,1.062,1.062,0,0,0,.791-1.372C2.629,1.2,2.52.936,2.4.683a1.314,1.314,0,0,0-1.62-.6A1.044,1.044,0,0,0,.09,1.489C.187,1.7.279,1.92.362,2.138Z" transform="translate(27.486 7.906)"/>
          <path id="Vector-3" data-name="Vector" d="M1.3.18C1.079.306.852.429.624.543A1.013,1.013,0,0,0,.167,2.026a1.155,1.155,0,0,0,.361.345,1.4,1.4,0,0,0,1.341.053c.272-.137.542-.282.8-.433a1,1,0,0,0,.353-1.5A1.362,1.362,0,0,0,1.3.18Z" transform="translate(21.382 22.862)"/>
          <path id="Vector-4" data-name="Vector" d="M2.491,1.043A1.19,1.19,0,0,0,1.2,0,1.159,1.159,0,0,0,0,1.128c.01.229.013.461.007.69a1.047,1.047,0,0,0,.529.912,1.37,1.37,0,0,0,.689.2A1.183,1.183,0,0,0,2.5,1.866C2.506,1.593,2.5,1.316,2.491,1.043Z" transform="translate(28.497 12.032)"/>
          <path id="Vector-5" data-name="Vector" d="M2.538.218A1.371,1.371,0,0,0,.793.434C.634.618.468.8.3.974A.992.992,0,0,0,.438,2.5c.03.022.06.042.091.061a1.379,1.379,0,0,0,1.665-.184c.2-.208.4-.425.591-.644A1,1,0,0,0,2.538.218Z" transform="translate(25.106 19.97)"/>
          <path id="Vector-6" data-name="Vector" d="M1.9.05A1.289,1.289,0,0,0,.342.761C.263.98.176,1.2.082,1.414A1.01,1.01,0,0,0,.528,2.687,1.313,1.313,0,0,0,.8,2.815a1.308,1.308,0,0,0,1.608-.628c.112-.256.216-.517.31-.777A1.066,1.066,0,0,0,1.9.05Z" transform="translate(27.572 16.213)"/>
          <path id="Vector-7" data-name="Vector" d="M13.194,24.65a14.273,14.273,0,0,1-3.2-.885l-.035-.017c-.239-.1-.477-.2-.708-.312l0,0a13.736,13.736,0,0,1-1.24-.675C2.148,19.163.739,12.083,4.869,6.977a12.273,12.273,0,0,1,3.2-2.77L8.11,4.18a14.646,14.646,0,0,1,14.6-.1L21.736,5.3c-.271.341-.1.59.37.552l4.229-.33a.621.621,0,0,0,.631-.794L25.83,1.169c-.127-.4-.453-.447-.724-.106L24.13,2.29A17.25,17.25,0,0,0,12.852.2q-.6.09-1.18.219h-.008L11.62.433A15.644,15.644,0,0,0,3.1,5.407c-.018.019-.036.037-.053.057-.071.083-.141.168-.21.253-.112.139-.223.282-.329.424-.013.017-.023.035-.035.052A12.111,12.111,0,0,0,.016,14.086c0,.009,0,.018,0,.028.014.272.039.548.073.82,0,.018.006.034.01.052.035.273.078.547.133.821a12.918,12.918,0,0,0,4.337,7.264l.016.014.006,0a15.409,15.409,0,0,0,1.985,1.445,16.661,16.661,0,0,0,6.179,2.252A1.243,1.243,0,0,0,14.2,25.91,1.107,1.107,0,0,0,13.194,24.65Z" transform="translate(0 0.098)"/>
          <path id="Vector-8" data-name="Vector" d="M1.009,0A.95.95,0,0,0,0,.878V9.627l9.187,4.137a1.124,1.124,0,0,0,.462.1,1.036,1.036,0,0,0,.9-.475.826.826,0,0,0-.433-1.183l-8.1-3.646V.878A.95.95,0,0,0,1.009,0Z" transform="translate(13.727 4.829)"/>
        </g>
      </g>
    </g>
  </g>
</svg>
 {"\t\t"+this.props.title}</p>

              </div>
              <div className="col-sm-4 view" >
              <a href="#">View All</a>
              </div>

</div></div>

               <div className="card-group  blogcard" >
            
            <div className="card " >
                
            <button type="button" class="btn btn-danger">{data[prodId].discount+"% OFF"} </button>
              <img src={data[prodId].img} class="card-img-top" alt="..."></img>
              <div class="card-body">
                <h6 class="card-title">
                {/* {this.props.category} */}
                 {data[prodId].brand} {data[prodId].model} {data[prodId].version}
                </h6>
                <p class="card-text">{data[prodId].status}</p>
             
               <strong><div className='discount-price'>AED {data[prodId].price-data[prodId].price*data[prodId].discount/100 + "  "}<span className="price">AED {data[prodId].price}</span></div> </strong> 
             
               <div class="progress">
  <div class="progress-bar " style={progressStyle} role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<p className="progresstitle">7 Hours left</p>

              </div>

            </div>
            <div className="card" >
            <button type="button" class="btn btn-danger">{data[prodId+1].discount+"% OFF"}</button>
              <img src={data[prodId+1].img} class="card-img-top" alt="..."></img>
              <div class="card-body">
                <h6 class="card-title">

                {data[prodId+1].brand} {data[prodId+1].model} {data[prodId+1].version}
                </h6>
                <p class="card-text">Certified Good condition</p>
               
               <strong><div className='discount-price'>AED {data[prodId+1].price-data[prodId+1].price*data[prodId+1].discount/100 + "  "}<span className="price">AED {data[prodId+1].price}</span></div> </strong> 
               <div class="progress">
  <div class="progress-bar " style={progressStyle} role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<p className="progresstitle">7 Hours left</p>

              </div>

            </div>
            <div className="card" >
            <button type="button" class="btn btn-danger">{data[prodId+2].discount+"% OFF"}</button>
              <img src={data[prodId+2].img} class="card-img-top" alt="..."></img>
              <div class="card-body">
                <h6 class="card-title">

              
                {data[prodId+2].brand}  {data[prodId+2].model}  {data[prodId+2].version}
                </h6>
                <p class="card-text">Certified Good condition</p>
             
               <strong><div  className='discount-price'>AED {data[prodId+2].price-data[prodId+2].price*data[prodId+2].discount/100 + "  "}<span className="price">AED {data[prodId+2].price}</span></div> </strong> 
               <div class="progress">
  <div class="progress-bar " style={progressStyle} role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<p className="progresstitle">7 Hours left</p>


              </div>

            </div>
            <div className="card" >
            <button type="button" class="btn btn-danger">{data[prodId+3].discount+"% OFF"}</button>
              <img src={data[prodId+3].img} class="card-img-top" alt="..."></img>
              <div class="card-body">
                <h6 class="card-title">

                {data[prodId+3].brand}  {data[prodId+3].model}  {data[prodId+3].version}
                </h6>
                <p class="card-text">Certified Good condition</p>
              
               <strong><div  className='discount-price'>AED {data[prodId+3].price-data[prodId+3].price*data[prodId+3].discount/100 + "  "}<span className="price">AED {data[prodId+3].price}</span></div> </strong> 
               <div class="progress">
  <div class="progress-bar " style={progressStyle} role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
          
</div>
<p className="progresstitle">7 Hours left</p>
              </div>
            </div>
            <div className="card" >
            <button type="button" class="btn btn-danger">{data[prodId+4].discount+"% OFF"}</button>
              <img src={data[prodId+4].img} class="card-img-top" alt="..."></img>
              <div class="card-body">
                <h6 class="card-title">

                {data[prodId+4].brand}  {data[prodId+4].model}  {data[prodId+4].version}
                </h6>
                <p class="card-text">Certified Good condition</p>
      
               <strong><div  className='discount-price'>AED {data[prodId+4].price-data[prodId+4].price*data[prodId+4].discount/100 + "  "}<span className="price">AED {data[prodId+4].price}</span></div> </strong> 
               <div class="progress">
  <div class="progress-bar " style={progressStyle} role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<p className="progresstitle">7 Hours left</p>


              </div>
            </div>
            </div>
            </div>
        );
    }
}
export default Deals;