import React from "react";
import './category.css'
import ProductList from '../product-list/product-list'
import BeebizzlData from "../dataconnection";
class Category extends React.Component{
    state={
        category:"mobile"
    
        }
    render(){
        var data=BeebizzlData.getReview()
        return(
            <div>
 <ProductList category={this.state.category}/>
            </div>
        )
    }
}
export default Category;