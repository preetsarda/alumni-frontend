import React from "react";
import ReactDOM from 'react-dom';
import Navbar from '../Components/Navbar';
import Carousel from '../Components/Home_Carousel';
import Testimonial from '../Components/alumni_testimonial';
import About from "../Components/About";
import { BrowserRouter} from 'react-router-dom';
function Home() {
    return (
        <div>
            
            <Carousel />
            <div className='row'>
                <Testimonial />
            </div>
        </div>
    )
}
export default Home;