import React from 'react'
import {BrowserRouter,Link, withRouter} from 'react-router-dom'
import '../../App.css'
import './navbar.css';
 import icon from '../../assets/icon.svg'
 import Home from '../home'

class NavBar extends React.Component{
  state={
  SearchText:"mobile"
  }
 
    render(){
        return(
          <BrowserRouter>
          <form onSubmit={this.onSubmit}>
            <div className="navigation">


<nav className="navbar navbar1 navbar-expand-sm  ">
  <div className="container-fluid">
  
  <a className="navbar-brand " href="#">    <img className="navbar-brand-img " src={icon}/>
</a>
    <button className="navbar-toggler navbar-dark " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon  menutoggler" >    
     
      </span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav ">
       <li className="row1"><div class="search"> <button className="navbar-btn" id="searchButton"><i class="fa fa-search"></i></button> <input type="text" pd="SearchBox" className="form-control" placeholder={this.state.SearchText}/> </div>
</li>

      
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <svg className="flag" xmlns="http://www.w3.org/2000/svg" width="32" height="18" viewBox="0 0 12 6"  >
<rect width="12" height="6" fill="#00732f" id="green"/>
<rect width="12" height="6" y="2" fill="#fff"/>
<rect width="12" height="6" y="4"/>
<rect width="3" height="6" fill="#f00" id="red"/></svg>
   <span> UAE</span>
         
          </a>
        
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Login</a>
        </li>
               
        <li className="nav-item">



       
          <a className="nav-link active" aria-current="page" href="#">
            
<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="82" height="42" viewBox="0 0 82 42">
  <defs>
    <filter id="Ellipse_1" x="0" y="0" width="42" height="42" filterUnits="userSpaceOnUse">
      <feOffset dy="4" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="4" result="blur"/>
      <feFlood flood-opacity="0.251"/>
      <feComposite operator="in" in2="blur"/>
      <feComposite in="SourceGraphic"/>
    </filter>
  </defs>
  <g id="shopping-cart_1" data-name="shopping-cart 1" transform="translate(2 3.468)">
    <g id="Group">
      <g id="Group-2" data-name="Group">
        <path id="Vector" d="M1.711,0A1.711,1.711,0,1,0,3.422,1.711,1.731,1.731,0,0,0,1.711,0Z" transform="translate(14.118 16.471)" fill="#fff"/>
      </g>
    </g>
    <g id="Group-3" data-name="Group">
      <g id="Group-4" data-name="Group">
        <path id="Vector-2" data-name="Vector" d="M19.266,3.256c-.045,0-.112-.022-.18-.022H4.94l-.225-1.5A2.011,2.011,0,0,0,2.717,0H.9a.9.9,0,1,0,0,1.8H2.717a.239.239,0,0,1,.225.2l1.392,9.476a2.462,2.462,0,0,0,2.425,2.088H16.1a2.5,2.5,0,0,0,2.425-1.976l1.46-7.3A.888.888,0,0,0,19.266,3.256Z" transform="translate(0 0.468)" fill="#fff"/>
      </g>
    </g>
    <g id="Group-5" data-name="Group">
      <g id="Group-6" data-name="Group">
        <path id="Vector-3" data-name="Vector" d="M3.341,1.629A1.7,1.7,0,0,0,1.646,0,1.721,1.721,0,0,0,0,1.777,1.686,1.686,0,0,0,1.679,3.405h.033A1.707,1.707,0,0,0,3.341,1.629Z" transform="translate(5.882 16.471)" fill="#fff"/>
      
        
      </g>
    </g>

  </g>
  <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#Ellipse_1)">
    <g id="Ellipse_1-2" data-name="Ellipse 1" transform="translate(12 8)" fill="#fff" stroke="#c00" stroke-width="1">
      <circle cx="9" cy="0" r="9" stroke="#CC0000"/>
      <circle cx="9" cy="0" r="8.5" fill="none"/>
      <text x="12%" y="12%" className="cartNum"  textAnchor="middle" fill="#fff" >1</text>

    </g>

  </g>
{/* </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="32.424" viewBox="0 0 30 32.424"> */}
       {/* <text x="100%" y="50%"  className="cartNum" textAnchor="middle" fill="white">Cart</text> */}
  
       <svg xmlns="http://www.w3.org/2000/svg" width="103" height="21" viewBox="0 0 33 21">
  <text id="Cart" fill="#fff" font-size="16" font-family="Roboto" font-weight="400"><tspan x="0" y="18">Cart</tspan></text>
</svg>

</svg> 
{/* </a></li>
<li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
        */}




</a>
       
       </li>
            
 

        
      </ul>
    </div>
  </div>
</nav>

  <div className="navbar-second">



<nav class="navbar navbar-expand-sm  ">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    Products</button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
      <a className="nav-link active" aria-current="page" href="/search" ><h6>Mac </h6></a>

      <a className="nav-link active" aria-current="page" href="#"><h6>iphone</h6></a>
        <a className="nav-link active" aria-current="page" href="/search?category=mobile"><h6>Mobile Phones</h6></a>
        <a className="nav-link active" aria-current="page" href="#"><h6>ipad</h6></a>
        <a className="nav-link active" aria-current="page" href="#"><h6>Camera</h6></a>
        <a className="nav-link active" aria-current="page" href="#"><h6>Laptops</h6></a>
        <a className="nav-link active" aria-current="page" href="#"><h6>Smartwatches</h6></a>
      </div>
    </div>
  </div>
</nav>
          
        
        </div> </div>

        </form>
        </BrowserRouter>
        );
    }
}
export default NavBar;