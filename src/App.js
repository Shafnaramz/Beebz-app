import logo from './logo.svg';
import './App.css';
import NavBar from "./components/navbar/navbar";
import Footer from './components/footer/footer'
import HomeComponent from './components/home/home'
import Home from './components/home'
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom'
import DeleteItems from './components/CountryList'
import icon from './assets/icon.svg'
import Category from './components/CATEGORIES/category'
function App() {
  
  return (
    <BrowserRouter>
    <div className="App">
     <NavBar/>
  
{/* <DeleteItems/> */}
     
      <HomeComponent/>
      {/* <Link to="/productdetails">Footer</Link> */}
      <Switch>
        <Route path="/search" exact={true}><Category/></Route>
      </Switch>
      <Footer/>
    </div>
     </BrowserRouter>
  );
}

export default App;
