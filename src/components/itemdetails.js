import React from "react";
import '../App.css'
import BeebizzlData from "./dataconnection";
class ItemDetails extends React.Component{
  
    render(){
        
       var count=Math.floor(Math.random()*10)% BeebizzlData.getItemCount();
       var data=BeebizzlData.getDataByProdId(count);
        return(
        <div className="ItemDetails">
             {/*  */}
<div className="row" >
            <div className="col-sm-5" >
           


    <div className="card" >
      <div className="card-body"  >


           

<div id="carousel-thumb" className="carousel slide carousel-fade carousel-thumbnails" data-ride="carousel" >
{/* <!--Slides--> */}
<div className="carousel-inner" role="listbox" >

<div className="carousel-item active" >
<button type="button" class="btn btn-danger">{data.discount+"% off"}</button>

<img className="d-block w-100" src={data.img} ></img>
</div>
<div className="carousel-item">
<button type="button" class="btn btn-danger">{data.discount+"% off"}</button>

<img className="d-block w-100" src={data.img2} alt="Second slide"></img>
</div>
<div className="carousel-item">
<button type="button" class="btn btn-danger">{data.discount+"% off"}</button>

<img className="d-block w-100" src={data.img3} alt="Third slide"></img>
</div>
</div>
{/* <!--/.Slides-->
<!--Controls--> */}
<a className="carousel-control-prev" href="#carousel-thumb" role="button" data-slide="prev" >
<span className="carousel-control-prev-icon" aria-hidden="true"></span>
<span className="sr-only">Previous</span>
</a>
<a className="carousel-control-next" href="#carousel-thumb" role="button" data-slide="next">
<span className="carousel-control-next-icon" aria-hidden="true"></span>
<span className="sr-only">Next</span>
</a>
{/* <!--/.Controls--> */}
<ol className="carousel-indicators">
<li data-target="#carousel-thumb" data-slide-to="0" className="active"> <img className="d-block w-100" src={data.img} className="img-fluid"></img></li>
<li data-target="#carousel-thumb" data-slide-to="1"><img className="d-block w-100" src={data.img2} className="img-fluid"/></li>
<li data-target="#carousel-thumb" data-slide-to="2"><img className="d-block w-100" src={data.img3} className="img-fluid"/></li>
</ol>
</div>
{/* <!--/.Carousel Wrapper--> */}
            
            
           
        
         
        
        {/* </div>
        </div> */}
        </div>
</div>
                </div>
                <div className="col-sm-7 item-details-right" >
<div>
<button type="button" class="btn btn-success btn-assured"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
</svg> Assured and Certified</button>
<img src="images/pw.JPG"/>
<button type="button" class="btn btn-warning">Shop with an expert</button>

</div>
<div className="details">
    <h6><strong>{data.brand +" "+data.model+" "+data.version+" "+data.description}</strong></h6>
    <br/>
    <h4><strong>AED {data.price-data.price*data.discount/100}</strong></h4><h5><span className="price">AED {data.price}</span></h5>
</div>
<div >
<button type="button" class="btn btn-secondary buttons"><h5>BUY NOW</h5></button> 
<button type="button" class="btn btn-danger buttons"><h5>ADD TO CART</h5></button>
</div>
<div>
   
    <div class="row" >
            <div class="col-sm-4 " >
    <div class="card advntgs" >
 
  
  <div class="card-body advntgs">
  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="red" class="bi bi-check-square" viewBox="0 0 16 16">
  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
  <path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.235.235 0 0 1 .02-.022z"/>
</svg><br/>
    <h5 class="card-title">Guaranteed Quality</h5>
    100% Orginal and functional
Products
  </div>
  </div>
</div >
<div class="col-sm-4 " >
    <div class="card advntgs" >
 
  
  <div class="card-body advntgs">
  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="red" class="bi bi-minecart" viewBox="0 0 16 16">
  <path d="M4 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0 1a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm8-1a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0 1a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM.115 3.18A.5.5 0 0 1 .5 3h15a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 14 12H2a.5.5 0 0 1-.491-.408l-1.5-8a.5.5 0 0 1 .106-.411zm.987.82l1.313 7h11.17l1.313-7H1.102z"/>
</svg>
    <h5 class="card-title">Replace easily </h5>
    Get hassle-free 10 days
replacement.
  </div>
  </div>
</div >
<div class="col-sm-4 " >
    <div class="card advntgs" >
 
  
  <div class="card-body advntgs">
  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="red" class="bi bi-person-badge" viewBox="0 0 16 16">
  <path d="M6.5 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
  <path d="M4.5 0A2.5 2.5 0 0 0 2 2.5V14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2.5A2.5 2.5 0 0 0 11.5 0h-7zM3 2.5A1.5 1.5 0 0 1 4.5 1h7A1.5 1.5 0 0 1 13 2.5v10.795a4.2 4.2 0 0 0-.776-.492C11.392 12.387 10.063 12 8 12s-3.392.387-4.224.803a4.2 4.2 0 0 0-.776.492V2.5z"/>
</svg><br/>
    <h5 class="card-title">Excellent Support</h5>
    Get support from our
agents
  </div>
  </div>
</div >
</div>
</div>

<div>
    <h4><strong>In the box</strong></h4>
    <div class="row" >
            <div class="col-sm-4 " >
    <div class="card " >
 
  
  <div class="card-body">
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#f0eae6" class="bi bi-earbuds" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M6.825 4.138c.596 2.141-.36 3.593-2.389 4.117a4.432 4.432 0 0 1-2.018.054c-.048-.01.9 2.778 1.522 4.61l.41 1.205a.52.52 0 0 1-.346.659l-.593.19a.548.548 0 0 1-.69-.34L.184 6.99c-.696-2.137.662-4.309 2.564-4.8 2.029-.523 3.402 0 4.076 1.948zm-.868 2.221c.43-.112.561-.993.292-1.969-.269-.975-.836-1.675-1.266-1.563-.43.112-.561.994-.292 1.969.269.975.836 1.675 1.266 1.563zm3.218-2.221c-.596 2.141.36 3.593 2.389 4.117a4.434 4.434 0 0 0 2.018.054c.048-.01-.9 2.778-1.522 4.61l-.41 1.205a.52.52 0 0 0 .346.659l.593.19c.289.092.6-.06.69-.34l2.536-7.643c.696-2.137-.662-4.309-2.564-4.8-2.029-.523-3.402 0-4.076 1.948zm.868 2.221c-.43-.112-.561-.993-.292-1.969.269-.975.836-1.675 1.266-1.563.43.112.561.994.292 1.969-.269.975-.836 1.675-1.266 1.563z"/>
</svg><br/>
    <h5 class="card-title">Ear phones</h5>
  
  </div>
  </div>
</div >
<div class="col-sm-4" >
<div class="card" >
 

 <div class="card-body" >
 <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#f0eae6" class="bi bi-plug" viewBox="0 0 16 16">
  <path d="M6 0a.5.5 0 0 1 .5.5V3h3V.5a.5.5 0 0 1 1 0V3h1a.5.5 0 0 1 .5.5v3A3.5 3.5 0 0 1 8.5 10c-.002.434-.01.845-.04 1.22-.041.514-.126 1.003-.317 1.424a2.083 2.083 0 0 1-.97 1.028C6.725 13.9 6.169 14 5.5 14c-.998 0-1.61.33-1.974.718A1.922 1.922 0 0 0 3 16H2c0-.616.232-1.367.797-1.968C3.374 13.42 4.261 13 5.5 13c.581 0 .962-.088 1.218-.219.241-.123.4-.3.514-.55.121-.266.193-.621.23-1.09.027-.34.035-.718.037-1.141A3.5 3.5 0 0 1 4 6.5v-3a.5.5 0 0 1 .5-.5h1V.5A.5.5 0 0 1 6 0zM5 4v2.5A2.5 2.5 0 0 0 7.5 9h1A2.5 2.5 0 0 0 11 6.5V4H5z"/>
</svg><br/>
   <h5 class="card-title">Power Plug</h5>
 
 </div>
 </div>
</div>
<div class="col-sm-4" >
<div class="card" >
 
 
 <div class="card-body">
 <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#f0eae6" class="bi bi-earbuds" viewBox="0 0 16 16">
 <path fill-rule="evenodd" d="M6.825 4.138c.596 2.141-.36 3.593-2.389 4.117a4.432 4.432 0 0 1-2.018.054c-.048-.01.9 2.778 1.522 4.61l.41 1.205a.52.52 0 0 1-.346.659l-.593.19a.548.548 0 0 1-.69-.34L.184 6.99c-.696-2.137.662-4.309 2.564-4.8 2.029-.523 3.402 0 4.076 1.948zm-.868 2.221c.43-.112.561-.993.292-1.969-.269-.975-.836-1.675-1.266-1.563-.43.112-.561.994-.292 1.969.269.975.836 1.675 1.266 1.563zm3.218-2.221c-.596 2.141.36 3.593 2.389 4.117a4.434 4.434 0 0 0 2.018.054c.048-.01-.9 2.778-1.522 4.61l-.41 1.205a.52.52 0 0 0 .346.659l.593.19c.289.092.6-.06.69-.34l2.536-7.643c.696-2.137-.662-4.309-2.564-4.8-2.029-.523-3.402 0-4.076 1.948zm.868 2.221c-.43-.112-.561-.993-.292-1.969.269-.975.836-1.675 1.266-1.563.43.112.561.994.292 1.969-.269.975-.836 1.675-1.266 1.563z"/>
</svg><br/>
   <h5 class="card-title">Ear phones</h5>
 
 </div>
 </div>
 </div>
</div>
</div>
<div>
  <h4><strong>Specifications</strong></h4>
    <table>
<tr >
            <td>
                In the box
                <br/>
               
                </td>
                <td >
                Handset, EarPods with Lightning Connector, Lightning to USB Cable,
                <br/>
                
                </td>
                </tr>
                <tr>
                <td>
               
                Model
                </td>
                <td >
               
                {data.model}
                </td>
                </tr>
                <tr>
                <td>
               
             Colour
                </td>
                <td >
               
                {data.color}
                </td>
                </tr>
                <tr>
                <td>
               
             Category
                </td>
                <td >
               
                {data.category}
                </td>
                </tr>
                </table>

</div>
                </div>
                </div>
        </div>)
    }
}
export default ItemDetails;