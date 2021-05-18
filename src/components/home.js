import React from 'react'
import '../App.css'
// import NavBar from './navbar/navbar.js'
import ItemDetails from "./itemdetails";
import Review from './review/review'
// import Category from "./category";
import BeebizzlData from "./dataconnection";
 import icon from '../assets/icon.svg'
 import ProductList from './product-list/product-list'
 import ProductDetails from './productdetails/productdetails'
//  import NavBar from "./navbar/navbar";

class Home extends React.Component{
   state={
    category:"mobile"

    }
 
    render(){
        
        var data=BeebizzlData.getData();
        return(

            <div>
            
{/* <NavBar/> */}

<div>
<ProductDetails/>
</div>

<div>
   <Review/>

    {/* <ProductList category={this.state.category}/> */}


</div>
            </div>
        ) ;
    }
}
export default Home;
