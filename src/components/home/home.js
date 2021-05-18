import React from 'react'
import './home.css'
import BeebizzlData from "../dataconnection";
import ProductList from "../product-list/product-list"
import Deals from '../dealsofday/deals'
class HomeComponent extends React.Component{
   state={
    category:"mobile"

    }

    render(){
        
        var data=BeebizzlData.getData();
        const addgridstyle={
          backgroundColor:"rgba(198, 209, 91,.8)",
          padding:"90px",
          margin:"50px"
        };
        return(

            <div  className="HomeComponent">
<div  className="row1">
<div  className="card img-fluid" >
  <img  className="card-img-top" src="images/bghome.jpg" alt="Card image" />
  <div  className="card-img-overlay">
    <div  className="card-body">
    {/* <div  className="card-group"> */}
  <div  className="card">
  <div  className="card-body">
<div className="row">
  <div className="col-sm-6 leftone">
    <img  className=" imgleft" src="images/samsung.jpg" alt="Card image cap"/>
    </div>
  {/* </div>
  <div  className="card"> */}
    <div className="col-sm-6 right">

      <p  className="card-title">iPhone 11</p>
      <p className="subtitle">The right amount of everything
</p>
<svg xmlns="http://www.w3.org/2000/svg"  width="174" height="36" viewBox="0 0 174 36">
  <defs>
    <linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
      <stop offset="0" stop-color="#4ac426"/>
      <stop offset="1" stop-color="#388e3c"/>
    </linearGradient>
    <linearGradient id="linear-gradient-2" x1="0.5" y1="1" x2="0.5" gradientUnits="objectBoundingBox">
      <stop offset="0" stop-color="#fff"/>
      <stop offset="0.997" stop-color="#f0fff4"/>
    </linearGradient>
    <linearGradient id="linear-gradient-3" x1="0.5" y1="1" x2="0.5" gradientUnits="objectBoundingBox">
      <stop offset="0" stop-color="#388e3c"/>
      <stop offset="1" stop-color="#4ac426"/>
    </linearGradient>
  </defs>
  <g id="Group_46" data-name="Group 46" transform="translate(-695 -325)">
    <g id="Group_39" data-name="Group 39">
      <rect id="Rectangle_36" data-name="Rectangle 36" width="161" height="27" rx="12.467" transform="translate(708 329)" fill="url(#linear-gradient)"/>
      <text id="Assured_Certified" data-name="Assured &amp; Certified" transform="translate(734.397 333.357)" fill="#fff" font-size="13" font-family="Roboto-Bold, Roboto" font-weight="700"><tspan x="0" y="12">Assured &amp; Certified</tspan></text>
      <g id="Group">
        <path id="Vector" d="M12.659,29.429a2.1,2.1,0,0,1-.763-.143A24.037,24.037,0,0,1,4.876,25.1,13.29,13.29,0,0,1,0,14.906V5.2A2.116,2.116,0,0,1,1.051,3.372,6.4,6.4,0,0,0,3.372,1.051,2.116,2.116,0,0,1,5.2,0h14.92a2.116,2.116,0,0,1,1.825,1.051,6.4,6.4,0,0,0,2.321,2.321A2.116,2.116,0,0,1,25.313,5.2v9.71a13.292,13.292,0,0,1-4.861,10.2,23.882,23.882,0,0,1-7.034,4.179A2.1,2.1,0,0,1,12.659,29.429Z" transform="translate(698.164 328.164)" fill="url(#linear-gradient-2)"/>
        <g id="Group-2" data-name="Group">
          <g id="Group-3" data-name="Group">
            <path id="Vector-2" data-name="Vector" d="M30.586,4.219a3.168,3.168,0,0,1-3.164-3.164A1.055,1.055,0,0,0,26.367,0H5.273A1.055,1.055,0,0,0,4.219,1.055,3.168,3.168,0,0,1,1.055,4.219,1.055,1.055,0,0,0,0,5.273v12.8a15.663,15.663,0,0,0,2.472,8.542,20.1,20.1,0,0,0,5.352,5.5,25.449,25.449,0,0,0,8,3.888,25.408,25.408,0,0,0,8-3.888,20.1,20.1,0,0,0,5.352-5.5,15.664,15.664,0,0,0,2.472-8.542V5.273A1.055,1.055,0,0,0,30.586,4.219ZM27.422,18.07a12.279,12.279,0,0,1-4.507,9.414A22.8,22.8,0,0,1,16.2,31.468a1.055,1.055,0,0,1-.761,0,22.957,22.957,0,0,1-6.7-3.987A12.277,12.277,0,0,1,4.219,18.07V8.36a1.055,1.055,0,0,1,.525-.912,7.458,7.458,0,0,0,2.7-2.7,1.055,1.055,0,0,1,.912-.525H23.28a1.055,1.055,0,0,1,.912.525,7.457,7.457,0,0,0,2.7,2.7,1.055,1.055,0,0,1,.525.912Z" transform="translate(695 325)" fill="url(#linear-gradient-3)"/>
          </g>
        </g>
      </g>
    </g>
    <circle id="Ellipse_14" data-name="Ellipse 14" cx="10" cy="10" r="10" transform="translate(701 332)" fill="#47b92b"/>
    <path id="Vector_4" data-name="Vector 4" d="M0,5.3,2.7,8.5,11.5,0" transform="translate(705 338.5)" fill="none" stroke="#fff" stroke-width="3"/>
  </g>
</svg>
<br/>
<svg xmlns="http://www.w3.org/2000/svg" width="88" height="25" viewBox="0 0 88 25">
  <text id="pricesvg" data-name="AED 507"  fill="#fff"  font-family="Roboto-Bold, Roboto" font-weight="700"><tspan x="0" y="20">AED 507</tspan></text>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="88" height="20" viewBox="0 0 88 20">
  <text id="AED_599" data-name="discountsvg" fill="#fff"  font-family="Roboto-Bold, Roboto" font-weight="700" text-decoration="line-through"><tspan x="0" y="14">AED 599</tspan></text>
</svg>


      {/* <p  className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <p  className="card-text"><small  className="text-muted">Last updated 3 mins ago</small></p> */}
    </div>
  </div>
  </div>
    </div>
  </div>
  </div>
</div>
</div>
<div  className="card-group adv1">
  <div  className="card">
    <div  className="card-body">
 
<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 250 80">
  <ellipse id="Ellipse_3" data-name="Ellipse 3" cx="35" cy="34.5" rx="35" ry="34.5" fill="#eaeaea"/>
  <g id="delivery_1" data-name="delivery 1" transform="translate(15.5 17.7)">
    <g id="Group">
      <g id="Group-2" data-name="Group">
        <path id="Vector" d="M5.042,0A4.869,4.869,0,0,0,0,4.664,4.869,4.869,0,0,0,5.042,9.328a4.869,4.869,0,0,0,5.042-4.664A4.869,4.869,0,0,0,5.042,0Zm0,7A2.434,2.434,0,0,1,2.521,4.664,2.435,2.435,0,0,1,5.042,2.332,2.435,2.435,0,0,1,7.563,4.664,2.434,2.434,0,0,1,5.042,7Z" transform="translate(25.168 21.998)"/>
      </g>
    </g>
    <g id="Group-3" data-name="Group">
      <g id="Group-4" data-name="Group">
        <path id="Vector-2" data-name="Vector" d="M5.042,0A4.869,4.869,0,0,0,0,4.664,4.869,4.869,0,0,0,5.042,9.328a4.869,4.869,0,0,0,5.042-4.664A4.869,4.869,0,0,0,5.042,0Zm0,7A2.435,2.435,0,0,1,2.521,4.664,2.435,2.435,0,0,1,5.042,2.332,2.435,2.435,0,0,1,7.563,4.664,2.434,2.434,0,0,1,5.042,7Z" transform="translate(7.941 21.998)"/>
      </g>
    </g>
    <g id="Group-5" data-name="Group">
      <g id="Group-6" data-name="Group">
        <path id="Vector-3" data-name="Vector" d="M7.765.642A1.276,1.276,0,0,0,6.639,0H0V2.332H5.861L9.294,8.647,11.547,7.6Z" transform="translate(25.84 8.006)"/>
      </g>
    </g>
    <g id="Group-7" data-name="Group">
      <g id="Group-8" data-name="Group">
        <path id="Vector-4" data-name="Vector" d="M0,0H9.538V2.332H0Z" transform="translate(16.891 25.535)"/>
      </g>
    </g>
    <g id="Group-9" data-name="Group">
      <g id="Group-10" data-name="Group">
        <path id="Vector-5" data-name="Vector" d="M5.63,0H1.26A1.216,1.216,0,0,0,0,1.166,1.216,1.216,0,0,0,1.26,2.332H5.63a1.216,1.216,0,0,0,1.26-1.166A1.216,1.216,0,0,0,5.63,0Z" transform="translate(3.572 25.535)"/>
      </g>
    </g>
    <g id="Group-11" data-name="Group">
      <g id="Group-12" data-name="Group">
        <path id="Vector-6" data-name="Vector" d="M36.164,12.732,33.684,9.779a1.3,1.3,0,0,0-1-.451h-9.16V1.166A1.216,1.216,0,0,0,22.269,0H1.26A1.216,1.216,0,0,0,0,1.166,1.216,1.216,0,0,0,1.26,2.332H21.008v8.162a1.216,1.216,0,0,0,1.26,1.166h9.8l1.836,2.187V19.86H30.42a1.169,1.169,0,1,0,0,2.332h4.748a1.216,1.216,0,0,0,1.261-1.166V13.447A1.113,1.113,0,0,0,36.164,12.732Z" transform="translate(3.572 5.674)"/>
      </g>
    </g>
    <g id="Group-13" data-name="Group">
      <g id="Group-14" data-name="Group">
        <path id="Vector-7" data-name="Vector" d="M7.059,0H1.26A1.216,1.216,0,0,0,0,1.166,1.216,1.216,0,0,0,1.26,2.332h5.8a1.216,1.216,0,0,0,1.26-1.166A1.216,1.216,0,0,0,7.059,0Z" transform="translate(2.059 19.627)"/>
      </g>
    </g>
    <g id="Group-15" data-name="Group">
      <g id="Group-16" data-name="Group">
        <path id="Vector-8" data-name="Vector" d="M12.017,0H1.26A1.216,1.216,0,0,0,0,1.166,1.216,1.216,0,0,0,1.26,2.332H12.017a1.216,1.216,0,0,0,1.26-1.166A1.216,1.216,0,0,0,12.017,0Z" transform="translate(0 15.041)"/>
      </g>
    </g>
    <g id="Group-17" data-name="Group">
      <g id="Group-18" data-name="Group">
        <path id="Vector-9" data-name="Vector" d="M12.017,0H1.26A1.216,1.216,0,0,0,0,1.166,1.216,1.216,0,0,0,1.26,2.332H12.017a1.216,1.216,0,0,0,1.26-1.166A1.216,1.216,0,0,0,12.017,0Z" transform="translate(2.059 10.455)"/>
      </g>
    </g>
  </g>
  <text id="Free_Delivery_in_UAE" data-name="Free Delivery in UAE" fill="#212121" font-size="16" font-family="Roboto-Bold, Roboto" font-weight="700"><tspan x="75" y="25">Free Delivery in UAE</tspan></text>
  <text id="Deleverd_to_your_doorstep" data-name="Deleverd to your doorstep" fill="#7a7a7a" font-size="12" font-family="Roboto-Bold, Roboto" font-weight="700"><tspan x="75" y="45">Deleverd to your doorstep</tspan></text>

</svg>
{/* <svg xmlns="http://www.w3.org/2000/svg" width="167" height="20" viewBox="0 0 167 20">
  <text id="Deleverd_to_your_doorstep" data-name="Deleverd to your doorstep" fill="#7a7a7a" font-size="12" font-family="Roboto-Bold, Roboto" font-weight="700"><tspan x="0" y="11">Deleverd to your doorstep</tspan></text>
</svg> */}


    </div>
  </div>
  <div  className="card">
    <div  className="card-body">
    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 230 80">
    <ellipse id="Ellipse_3" data-name="Ellipse 3" cx="35" cy="34.5" rx="35" ry="34.5" fill="#eaeaea"/>

  <g id="Group" transform="translate(-464.603 -532)">
    <g id="Group-2" data-name="Group">
      <path id="Vector" d="M31.9,18.318a2.963,2.963,0,0,0-.865-2.1,3.313,3.313,0,0,0,.851-2.543,3.438,3.438,0,0,0-3.466-3.02h-8.21a19.194,19.194,0,0,0,1.058-5.329C21.265,2.439,18.816,0,17.278,0A4.168,4.168,0,0,0,14.87.811a.667.667,0,0,0-.25.521V5.85l-3.829,8.312-.158.081v-.254a.666.666,0,0,0-.665-.666H3.323A3.33,3.33,0,0,0,0,16.653V27.311a3.33,3.33,0,0,0,3.323,3.331H7.31a3.331,3.331,0,0,0,3.127-2.2,8.647,8.647,0,0,0,3.518.87h12.2a3.059,3.059,0,0,0,3.012-2.326,3.014,3.014,0,0,0-.239-2,2.99,2.99,0,0,0,1.33-4A2.986,2.986,0,0,0,31.9,18.318Zm-2.8,1.644a.666.666,0,0,0-.38,1.147,1.652,1.652,0,0,1-.948,2.85.666.666,0,0,0-.38,1.147,1.65,1.65,0,0,1,.481,1.589,1.72,1.72,0,0,1-1.713,1.282h-12.2a6.29,6.29,0,0,1-3.517-1.138.665.665,0,0,0-1.135.472,2,2,0,0,1-1.994,2H3.323a2,2,0,0,1-1.994-2V16.653a2,2,0,0,1,1.994-2H9.3v.666a.669.669,0,0,0,.316.568.678.678,0,0,0,.646.028l1.329-.666a.664.664,0,0,0,.306-.316l3.987-8.659a.68.68,0,0,0,.061-.28v-4.3a2.8,2.8,0,0,1,1.329-.361c.728,0,2.658,1.814,2.658,4a20.785,20.785,0,0,1-1.285,5.758.665.665,0,0,0,.621.9h9.145a2.1,2.1,0,0,1,2.142,1.81,1.992,1.992,0,0,1-.946,1.885.668.668,0,0,0,.045,1.16,1.65,1.65,0,0,1-.564,3.116Z" transform="translate(484.953 552.645)" stroke="#000" stroke-width="0.7"/>
    </g>
  </g>
  <text id="Satisfied_or_Refunded" data-name="Satisfied or Refunded" fill="#212121" font-size="16" font-family="Roboto-Bold, Roboto" font-weight="700"><tspan x="75" y="25">Satisfied or Refunded</tspan></text>

  <text id="_7_Days_free_returns" data-name="7 Days free returns" fill="#7a7a7a" font-size="12" font-family="Roboto-Bold, Roboto" font-weight="700"><tspan x="75" y="45">7 Days free returns</tspan></text>

</svg>

    </div>
  </div>
 
  <div  className="card">
    <div  className="card-body">
    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 230 80">
    <ellipse id="Ellipse_3" data-name="Ellipse 3" cx="35" cy="34.5" rx="35" ry="35" fill="#eaeaea"/>
  
  <g id="headphone_1" data-name="headphone 1" transform="translate(50 18) rotate(180)">
    <g id="Group">
      <path id="Vector" d="M32.033-12.775h-2.9v.908C29.133-5.324,23.466,0,16.5,0S3.868-5.323,3.867-11.866v-.91H.967A.939.939,0,0,1,0-13.684v-8.174a.939.939,0,0,1,.967-.908h2.9v-.908a.939.939,0,0,1,.967-.908H9.668a.939.939,0,0,1,.967.908v11.807a.939.939,0,0,1-.967.908H5.845A10.477,10.477,0,0,0,16.5-1.816a10.477,10.477,0,0,0,10.655-9.143H23.332a.939.939,0,0,1-.967-.908V-23.674a.939.939,0,0,1,.967-.908h1.45v-2.785H20.367v.908a.939.939,0,0,1-.967.908H13.6a.939.939,0,0,1-.967-.908v-3.633A.939.939,0,0,1,13.6-31h5.8a.939.939,0,0,1,.967.908v.908h5.382a.939.939,0,0,1,.967.908v3.693h1.45a.939.939,0,0,1,.967.908v.908h2.9a.939.939,0,0,1,.967.908v8.174a.939.939,0,0,1-.967.908Zm-30.1-8.174v6.358H3.867v-6.358ZM8.7-22.766H5.8v9.991H8.7Zm9.732-6.417H14.566v1.816h3.867ZM27.2-22.766H24.3v9.991h2.9Zm3.867,1.817H29.133v6.358h1.934Z" transform="translate(0 -0.001)"/>
    </g>
  </g>
  <text id="Excellent_Support" data-name="Excellent Support" fill="#212121" font-size="16" font-family="Roboto-Bold, Roboto" font-weight="700"><tspan x="75" y="25">Excellent Support</tspan></text>
  <text id="_24_7_Customer_Support" data-name="24/7 Customer Support" fill="#7a7a7a" font-size="12" font-family="Roboto-Bold, Roboto" font-weight="700"><tspan x="75" y="45">24/7 Customer Support</tspan></text>

  
</svg>

    </div>
  </div>
  <div  className="card">
    <div  className="card-body">
    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 230 80">
    <ellipse id="Ellipse_3" data-name="Ellipse 3" cx="35" cy="34.5" rx="35" ry="34.5" fill="#eaeaea"/>
    <g id="credit-card_1" data-name="credit-card 1" transform="translate(53 16) rotate(180)">
    <g id="Group">
      <path id="Vector" d="M31.172,0H3.828A3.728,3.728,0,0,1,0-3.609V-19.078a3.728,3.728,0,0,1,3.828-3.609H31.172A3.728,3.728,0,0,1,35-19.078V-3.609A3.728,3.728,0,0,1,31.172,0ZM3.828-2.062H31.172a1.6,1.6,0,0,0,1.641-1.547V-5.672H2.188v2.063A1.6,1.6,0,0,0,3.828-2.062ZM31.172-20.625H3.828a1.6,1.6,0,0,0-1.641,1.547V-7.734H32.813V-19.078A1.6,1.6,0,0,0,31.172-20.625Z" transform="translate(0 -5.156)"/>
      <path id="Vector-2" data-name="Vector" d="M2.188-3.094H1.094A1.064,1.064,0,0,0,0-2.062v1.031A1.064,1.064,0,0,0,1.094,0H2.188A1.064,1.064,0,0,0,3.281-1.031V-2.062A1.064,1.064,0,0,0,2.188-3.094Z" transform="translate(5.469 -19.594)"/>
    </g>
  </g>
  <text id="Secure_Payment" data-name="Secure Payment" fill="#212121" font-size="16" font-family="Roboto-Bold, Roboto" font-weight="700"><tspan x="73" y="25">Secure Payment</tspan></text>
  <text id="Several_payment_options" data-name="Several payment options" fill="#7a7a7a" font-size="12" font-family="Roboto-Bold, Roboto" font-weight="700"><tspan x="73" y="45">Several payment options</tspan></text>

</svg>

      </div>
    </div>
</div>
<div  className="card-group itemrounds">
  <div  className="card card-img-center">
  
  <div  className="roundimg">
  <img  className="" src="images/11.jpg" alt="Card image cap"/>
  </div>
  <div  className="card-body">
   i phone
 </div>
 </div>
 <div  className="card ">
 <div  className="roundimg">
  <img  className="" src="images/11.jpg" alt="Card image cap"/>
  </div>
  <div  className="card-body">
   i phone
 </div>
 </div>
 
 <div  className="card ">
 <div  className="roundimg">
  <img  className="" src="images/11.jpg" alt="Card image cap"/>
  </div>
  <div  className="card-body">
   i phone
 </div>
 </div>
 <div  className="card ">
 <div  className="roundimg">
  <img  className="" src="images/11.jpg" alt="Card image cap"/>
  </div>
  <div  className="card-body">
   i phone
 </div>
 </div>
 <div  className="card ">
 <div  className="roundimg">
  <img  className="" src="images/11.jpg" alt="Card image cap"/>
  </div>
  <div  className="card-body">
   i phone
 </div>
 </div>
 <div  className="card ">
 <div  className="roundimg">
  <img  className="" src="images/11.jpg" alt="Card image cap"/>
  </div>
  <div  className="card-body">
   i phone
 </div>
 </div>

 </div>

<Deals title="Deals of the day"></Deals>

<div  className="card-group  usertypes">

<div  className="card">
  <img  className="" src="images/student.svg" alt="Card image cap"/>
     <div  className="card-img-overlay">

    <div  className="card-body">
      <h5  className="card-title">For Students</h5>
      <p  className="card-text">1400+ products</p>
      <button type="button" className="btn  button-shop">SHOP NOW</button> 

    </div>
    </div>
  </div>




  <div  className="card">
    <img src="images/student.svg"  className="card-img-top" alt="..."/>
    <div  className="card-img-overlay">

    <div  className="card-body">
    <h5  className="card-title">For Students</h5>
      <p  className="card-text">1400+ products</p>
      <button type="button" className="btn  button-shop">SHOP NOW</button> 

    </div>
    </div>
  </div><div  className="card">
    <img src="images/student.svg"  className="card-img-top" alt="..."/>
    <div  className="card-img-overlay">

    <div  className="card-body">
    <h5  className="card-title">For Students</h5>
      <p  className="card-text">1400+ products</p>
      <button type="button" className="btn  button-shop">SHOP NOW</button> 

    </div>
  </div>
  </div>
</div>

<ProductList title="For iphone lovers"></ProductList>
{/* <div> */}
{/* 
<div  className="card-group addblend">
  <div  className="card">
    
  <img  className="card-img-top" src="images/bghome.jpg" alt="Card image" />
<div  className="card-img-overlay">
  <div  className="card-body">
  <div  className="row">
  <div  className="col-sm-4 leftside">
    hhhhh
    </div>
    <div  className="col-sm-8">
    ccccc
    </div>
    </div>
    </div>

  </div>

  </div>
</div>

</div> */}
{/* <div className="row row-cols-1 row-cols-md-2 g-4 addgrid">
  <div className="col">
    <div className="card ">
      <img src="..." className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="..." className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="..." className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div>
  <div className="col">
  <div  className="card img-fluid" >
  <img  className="card-img-top" src="images/grid.jpg" alt="Card image" />
  <div  className="card-img-overlay" style={addgridstyle}>
      <div  className="card-body">

      </div>
    </div>
  </div>
</div>
</div> */}
<ProductList title="Newly Added Products"></ProductList>

<div  className="card addAbvtopPicks">
    <div  className="card-body">
      {/* <h5  className="card-title">Card title</h5>
      <p  className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <p  className="card-text"><small  className="text-muted">Last updated 3 mins ago</small></p> */}

<div  className="card-group">
  <div  className="card prdctimg">
    <img  className="card-img-top imgleft" src="images/honor.jpg" alt="Card image cap"/>
  
  </div>
  <div  className="card">
    <div  className="card-body" >
      <p  className="card-title"><h3>Phone everyone wants</h3></p>
      <p  className="card-text">Apple samsung oneplus</p>
      <img src="images/assuredlogo.svg"/>
    </div>
  </div>
  <div  className="card bigsale">
    <img  className="imgleft" src="images/bigsalelogo.jpg" alt="Card image cap"/>
  
  </div>
  </div>

    </div>
  </div>
<ProductList title="Top Picks"></ProductList>

<ProductList title="Most Brought Products"></ProductList>
<div  className="card-group lastaddsrow">
  <div  className="card">
    <img  className="card-img-top" src="images/galaxywatch.png" alt="Card image cap"/>
  
  </div>
  <div  className="card">
    <img  className="card-img-top" src="images/galaxywatch.png" alt="Card image cap"/>
    
  </div>
  <div  className="card">
    <img  className="card-img-top" src="images/galaxywatch.png" alt="Card image cap"/>
 
</div>
</div>

<div  className="card-group logosrow">
  <div  className="card">
    <img  className="card-img-top" src="images/applelogo.png" alt="Card image cap"/>
  
  </div>
  <div  className="card">
    <img  className="card-img-top" src="images/huawei.png" alt="Card image cap"/>
    
  </div>
  <div  className="card">
    <img  className="card-img-top" src="images/samsung1.png" alt="Card image cap"/>
 
</div>
  <div  className="card">
    <img  className="card-img-top" src="images/xiaomi.svg" alt="Card image cap"/>
  
  </div>
  <div  className="card">
    <img  className="card-img-top" src="images/sony-logo.svg" alt="Card image cap"/>
 
</div>
<div  className="card">
    <img  className="card-img-top" src="images/lg.svg" alt="Card image cap"/>
 
</div>
</div>

</div>
        )        
        }
    }
    export default HomeComponent