import logo from './logo.svg';
import './App.css';
import HomePage from './screen/HomePage';
import ProductPage from './screen/ProductPage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlogPage from './screen/BlogPage';
import SingleBlogPage from './screen/SingleBlogPage';
import ContactUsPage from './screen/ContactUsPage';
import AboutUsPage from './screen/AboutUsPage';
import SingleProductPage from './screen/SingleProductPage';
import EventPage from './screen/EventPage';
import LoginPage from './screen/LoginPage';
import RegisterPage from './screen/RegisterPage';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/product' element={<ProductPage/>}/>
            <Route path='/blog' element={<BlogPage/>}/>
            <Route path='/singleBlog/:id' element={<SingleBlogPage/>}/>
            <Route path='/event' element={<EventPage/>}/>
            <Route path='/contactUs' element={<ContactUsPage/>}/>
            <Route path='/aboutUs' element={<AboutUsPage/>}/>
            <Route path='/singleProduct/:id' element={<SingleProductPage/>}/>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/register' element={<RegisterPage/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
