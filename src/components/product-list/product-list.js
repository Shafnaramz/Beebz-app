import React from "react";
 import './product-list.css'
import BeebizzlData from "../dataconnection";
class ProductList extends React.Component{
   
    render(){
        var data=BeebizzlData.getDataByCategory( this.props.category);
        var prodId=Math.floor(Math.random()*10)% BeebizzlData.getItemCount()-4;
        
        if(prodId<0)
        prodId=0
        return(

            <div className="ItemList">
               
               {/* <div className="title"><h5>{this.props.title}<span className="view"><a href="#">View All</a></span></h5></div> */}
 
               <div className="card " >
               <div className="row  titlegroup" >
            
            <div className="col-sm-8 title" >
           <p> {this.props.title}</p>

              </div>
              <div className="col-sm-4 view" >
              <a href="#">View All</a>
              </div>
</div>
</div>
{/* 
               <div className="card-group  blogcard" >
            
            <div className="card " >
                
            <button type="button"  className="btn btn-danger">{data[prodId].discount+"% OFF"} </button>
              <img src={data[prodId].img}  className="card-img-top" alt="..."></img>
              <div  className="card-body">
                <h6  className="card-title">
                 {data[prodId].brand} {data[prodId].model} {data[prodId].version}
                </h6>
                <p  className="card-text">{data[prodId].status}</p>
             
               <strong><div className='discount-price'>AED {data[prodId].price-data[prodId].price*data[prodId].discount/100 + "  "}<span className="price">AED {data[prodId].price}</span></div> </strong> 
             

              </div>
            </div>
            <div className="card" >
            <button type="button"  className="btn btn-danger">{data[prodId+1].discount+"% OFF"}</button>
              <img src={data[prodId+1].img}  className="card-img-top" alt="..."></img>
              <div  className="card-body">
                <h6  className="card-title">

                {data[prodId+1].brand} {data[prodId+1].model} {data[prodId+1].version}
                </h6>
                <p  className="card-text">Certified Good condition</p>
               
               <strong><div className='discount-price'>AED {data[prodId+1].price-data[prodId+1].price*data[prodId+1].discount/100 + "  "}<span className="price">AED {data[prodId+1].price}</span></div> </strong> 
        

              </div>
            </div>
            <div className="card card3" >
            <button type="button"  className="btn btn-danger">{data[prodId+2].discount+"% OFF"}</button>
              <img src={data[prodId+2].img}  className="card-img-top" alt="..."></img>
              <div  className="card-body">
                <p  className="card-title">

              
                {data[prodId+2].brand}  {data[prodId+2].model}  {data[prodId+2].version}
                </p>
                <p  className="card-text">Certified Good condition</p>
             
               <strong><div  className='discount-price'>AED {data[prodId+2].price-data[prodId+2].price*data[prodId+2].discount/100 + "  "}<span className="price">AED {data[prodId+2].price}</span></div> </strong> 
      

              </div>
            </div>
            <div className="card card4" >
            <button type="button"  className="btn btn-danger">{data[prodId+3].discount+"% OFF"}</button>
              <img src={data[prodId+3].img}  className="card-img-top" alt="..."></img>
              <div  className="card-body">
                <h6  className="card-title">

                {data[prodId+3].brand}  {data[prodId+3].model}  {data[prodId+3].version}
                </h6>
                <p  className="card-text">Certified Good condition</p>
              
               <strong><div  className='discount-price'>AED {data[prodId+3].price-data[prodId+3].price*data[prodId+3].discount/100 + "  "}<span className="price">AED {data[prodId+3].price}</span></div> </strong> 
     

              </div>
            </div>
            <div className="card card5" >
            <button type="button"  className="btn btn-danger">{data[prodId+4].discount+"% OFF"}</button>
              <img src={data[prodId+4].img}  className="card-img-top" alt="..."></img>
              <div  className="card-body">
                <h6  className="card-title">

                {data[prodId+4].brand}  {data[prodId+4].model}  {data[prodId+4].version}
                </h6>
                <p  className="card-text">Certified Good condition</p>
      
               <strong><div  className='discount-price'>AED {data[prodId+4].price-data[prodId+4].price*data[prodId+4].discount/100 + "  "}<span className="price">AED {data[prodId+4].price}</span></div> </strong> 
       

              </div>
            </div>
            </div> */}


            <div  className="container-fluid  flexgrid">
    <div  className="row flex-nowrap">
        <div  className="col">
            <div  className="card card-block">
            <button type="button"  className="btn btn-danger">{data[prodId].discount+"% OFF"} </button>
              <img src={data[prodId].img}  className="card-img-top" alt="..."></img>
              <div  className="card-body">
                <h6  className="card-title">
                 {data[prodId].brand} {data[prodId].model} {data[prodId].version}
                </h6>
                <p  className="card-text">{data[prodId].status}</p>
             
               <strong><div className='discount-price'>AED {data[prodId].price-data[prodId].price*data[prodId].discount/100 + "  "}<span className="price">AED {data[prodId].price}</span></div> </strong> 
             

              </div>
              </div>
        </div>
        <div  className="col">
            <div  className="card card-block">

            <button type="button"  className="btn btn-danger">{data[prodId+1].discount+"% OFF"}</button>
              <img src={data[prodId+1].img}  className="card-img-top" alt="..."></img>
              <div  className="card-body">
                <h6  className="card-title">

                {data[prodId+1].brand} {data[prodId+1].model} {data[prodId+1].version}
                </h6>
                <p  className="card-text">Certified Good condition</p>
               
               <strong><div className='discount-price'>AED {data[prodId+1].price-data[prodId+1].price*data[prodId+1].discount/100 + "  "}<span className="price">AED {data[prodId+1].price}</span></div> </strong> 
        
               </div>
              </div>
        </div>
        <div  className="col">
            <div  className="card card-block">
            <button type="button"  className="btn btn-danger">{data[prodId+2].discount+"% OFF"}</button>
              <img src={data[prodId+2].img}  className="card-img-top" alt="..."></img>
              <div  className="card-body">
                <p  className="card-title">

              
                {data[prodId+2].brand}  {data[prodId+2].model}  {data[prodId+2].version}
                </p>
                <p  className="card-text">Certified Good condition</p>
             
               <strong><div  className='discount-price'>AED {data[prodId+2].price-data[prodId+2].price*data[prodId+2].discount/100 + "  "}<span className="price">AED {data[prodId+2].price}</span></div> </strong> 
               </div>

              </div>
        </div>
        <div  className="col">
            <div  className="card card-block">
            <button type="button"  className="btn btn-danger">{data[prodId+3].discount+"% OFF"}</button>
              <img src={data[prodId+3].img}  className="card-img-top" alt="..."></img>
              <div  className="card-body">
                <h6  className="card-title">

                {data[prodId+3].brand}  {data[prodId+3].model}  {data[prodId+3].version}
                </h6>
                <p  className="card-text">Certified Good condition</p>
              
               <strong><div  className='discount-price'>AED {data[prodId+3].price-data[prodId+3].price*data[prodId+3].discount/100 + "  "}<span className="price">AED {data[prodId+3].price}</span></div> </strong> 
              </div>

              </div>
        </div>
        <div  className="col">
            <div  className="card card-block">
            <button type="button"  className="btn btn-danger">{data[prodId+4].discount+"% OFF"}</button>
              <img src={data[prodId+4].img}  className="card-img-top" alt="..."></img>
              <div  className="card-body">
                <h6  className="card-title">

                {data[prodId+4].brand}  {data[prodId+4].model}  {data[prodId+4].version}
                </h6>
                <p  className="card-text">Certified Good condition</p>
      
               <strong><div  className='discount-price'>AED {data[prodId+4].price-data[prodId+4].price*data[prodId+4].discount/100 + "  "}<span className="price">AED {data[prodId+4].price}</span></div> </strong> 
       

              </div> 
              
        </div>
      
        
        </div>
    </div>
</div>

            </div>
        );
    }
}
export default ProductList;