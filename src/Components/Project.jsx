import {Swiper, SwiperSlide} from  'swiper/react';
import 'swiper/css';
import 'swiper/swiper-bundle.css';
import 'swiper/css/pagination';
import {Navigation, Pagination, Scrollbar} from 'swiper/modules';
import bg1 from '../images/bg1.png';

import p1 from '../images/p1 (1).png';
import p2 from '../images/p1 (2).png';
import p3 from '../images/p1 (3).png';
import p4 from '../images/p1 (4).png';
import p5 from '../images/p1 (5).png';
import p6 from '../images/p1 (6).png';
import p7 from '../images/p1 (7).png';
import p9 from '../images/p2 (13).png';
import p10 from '../images/p2 (12).png';
import p11 from '../images/p2 (11).png';
import p12 from '../images/p2 (14).png';
import p13 from '../images/p2 (10).png';
import p14 from '../images/p2 (9).png';
import p15 from '../images/p2 (8).png';
import p16 from '../images/p2 (7).png';
import p17 from '../images/p2 (6).png';
import p18 from '../images/p2 (5).png';
import p19 from '../images/p2 (4).png';
import p20 from '../images/p2 (3).png';
import p21 from '../images/p2 (2).png';
import p22 from '../images/p2 (1).png';
import p23 from '../images/p3 (1).png';
import p24 from '../images/p3 (2).png';
import p25 from '../images/p3 (3).png';
import p26 from '../images/p3 (4).png';
import p27 from '../images/p3 (5).png';
import p28 from '../images/p3 (6).png';
import p29 from '../images/p3 (7).png';
import p30 from '../images/p3 (8).png';
import p31 from '../images/p3 (9).png';
import p32 from '../images/p3 (10).png';
import p33 from '../images/p3 (11).png';










function Project({profile1}){
    let data = (e)=>{
        const file = e.target.files[0];
        const url = URL.createObjectURL(file);
        localStorage.setItem("foody", url);

    }
   
    return(
        <>
        
        <div className="project border" style={{backgroundColor: profile1 == 'white'?'white':'black', color: profile1 == 'white'?'black':'white'}}>
       
        <div className="">
        <h1>
            My Projects
        </h1>
        <div className="project1 mt-3" data-aos = "fade-right">
        <h1>Foody</h1>
        <Swiper className='slide' pagination = {{clickable: true}} modules={[Pagination,Navigation]} slidesPerView={1} spaceBetween={30} >
            <SwiperSlide className='swiper-slide1'><video src = 'blob:http://localhost:5173/6f8d317a-cf04-4e3f-8275-9c8fc660a1bf' controls autoPlay></video></SwiperSlide>
            <SwiperSlide className='swiper-slide1 '><img src = {p1} className=''/></SwiperSlide>
            <SwiperSlide className='swiper-slide1'><img src = {p2} className=''/></SwiperSlide>
            <SwiperSlide className='swiper-slide1 '><img src = {p3} className=''/></SwiperSlide>
            <SwiperSlide className='swiper-slide1'><img src = {p4} className=''/></SwiperSlide>
            <SwiperSlide className='swiper-slide1 '><img src = {p5} className=''/></SwiperSlide>
            <SwiperSlide className='swiper-slide1'><img src = {p6} className=''/></SwiperSlide>
            <SwiperSlide className='swiper-slide1'><img src = {p7} className=''/></SwiperSlide>
            
            
            
            
            
        </Swiper>
        <div className='description'  >
        <div className='description3 absolute' data-aos= "fade-down" style={{color:profile1=='white'?'grey':'white'}}>
        Features:

User Registration and Login: Users can create accounts, log in securely, and manage their profiles.
Restaurant Listings: Displays a list of available restaurants with details such as cuisine type, location, and ratings.
Menu Browsing: Users can browse through the menu items of selected restaurants, complete with images and descriptions.
Order Placement: Enables users to add items to their cart, review their selections, and place orders with ease.
Real-Time Order Tracking: Allows users to track the status of their orders in real time.
Admin Panel: Admins can manage restaurants, menus, and orders through a dedicated admin interface.

        </div>
        <div className='description1' data-aos = "flip-right" style={{color:profile1=='white'?'grey':'white'}}>
        This Food Ordering Website is a comprehensive online platform designed to streamline the process of ordering meals from various restaurants. The project is built with a combination of HTML, CSS, Bootstrap, PHP, MySQL, and JavaScript, providing a seamless user experience from browsing the menu to placing an order.
        </div>
        <div className='description2' data-aos = "fade-down"  style={{color:profile1=='white'?'grey':'white'}}>
        Technologies Used:

HTML & CSS: Structured and styled the website to create a user-friendly interface.
Bootstrap: Ensured
PHP: Backend
MYSQL: Database 
Javascript: Backend and database connectvity with ajax
        </div>
       

        </div>
      


        </div>

        <div className="project1 mt-3" data-aos = "fade-right">
        <h1>Cocoons</h1>
        <Swiper className='slide' pagination = {{clickable: true}} modules={[Pagination,Navigation]} slidesPerView={1} spaceBetween={30} >
            <SwiperSlide className='swiper-slide1'><video src = 'blob:http://localhost:5173/45fc75ec-2eb3-4d3a-ba26-289278da305e' controls autoPlay></video></SwiperSlide>
            <SwiperSlide className='swiper-slide1 '><img src = {p9} className=''/></SwiperSlide>
            <SwiperSlide className='swiper-slide1'><img src = {p10} className=''/></SwiperSlide>
            <SwiperSlide className='swiper-slide1 '><img src = {p11} className=''/></SwiperSlide>
            <SwiperSlide className='swiper-slide1'><img src = {p12} className=''/></SwiperSlide>
            <SwiperSlide className='swiper-slide1 '><img src = {p13} className=''/></SwiperSlide>
            <SwiperSlide className='swiper-slide1'><img src = {p14} className=''/></SwiperSlide>
            <SwiperSlide className='swiper-slide1'><img src = {p15} className=''/></SwiperSlide>
            <SwiperSlide className='swiper-slide1'><img src = {p16} className=''/></SwiperSlide>
            <SwiperSlide className='swiper-slide1'><img src = {p17} className=''/></SwiperSlide>
            <SwiperSlide className='swiper-slide1'><img src = {p18} className=''/></SwiperSlide>
            <SwiperSlide className='swiper-slide1'><img src = {p19} className=''/></SwiperSlide>
            <SwiperSlide className='swiper-slide1'><img src = {p20} className=''/></SwiperSlide>
            <SwiperSlide className='swiper-slide1'><img src = {p21} className=''/></SwiperSlide>
            
            
            
            
            
        </Swiper>
        <div className='description'  >
        <div className='description3 absolute ' data-aos= "fade-down" style={{color:profile1=='white'?'grey':'white'}}>
        Unleash your learning potential on our multilingual online platform! Explore a diverse range of courses available in both Hindi and English. Test your knowledge with various quiz formats and track your progress through a user-friendly dashboard. Each course page provides detailed information, and a comprehensive review system lets you share your experience with text, images, videos, and even documents. Plus, our digital assistant is always there to answer your questions. This platform offers everything you need for a successful and engaging learning journey.

        </div>
        <div className='description1' data-aos = "flip-right" style={{color:profile1=='white'?'grey':'white'}}>
        Features
Affordable Courses
Wide Range of Topics: Explore a diverse array of courses covering the latest in technology, business, arts, and more.
Budget-Friendly: Gain access to high-quality educational content at unbeatable prices, making learning accessible to everyone.
Expert Instructors: Learn from industry professionals and subject matter experts who bring real-world experience to their teaching.
Interactive Quizzes
Challenge Yourself: Test your knowledge and track your progress with interactive quizzes.
Immediate Feedback: Receive instant results and detailed explanations to help you understand your mistakes and improve.
Engaging Formats: Enjoy various quiz formats including multiple-choice, true/false, and short answer questions.
Resume Generator
Professional Templates: Create a polished, professional resume with our easy-to-use templates.
Customizable: Tailor your resume to fit your personal style and career goals.
Downloadable: Export your resume in multiple formats for easy sharing with potential employers.
Digital Assistant
24/7 Support: Get help anytime with our AI-powered digital assistant.
Personalized Assistance: Receive tailored guidance and solutions for your specific queries and learning needs.
Enhanced Learning: Improve your understanding with additional resources and recommendations from the digital assistant.
Review Page
Post Reviews: Share your experiences with courses and other platform features through detailed reviews.
Multime
        

        </div>
        <div className='description2' data-aos = "fade-down"  style={{color:profile1=='white'?'grey':'white'}}>
        Technologies Used:

HTML & CSS: Structured and styled the website to create a user-friendly interface.
Bootstrap: Ensured
PHP: Backend
MYSQL: Database 
Javascript: Backend and database connectvity with ajax
        </div>
       
      


        </div>

        </div>
        <div className="project1 mt-3" data-aos = "fade-right">
        <h1>PG Life</h1>
        <Swiper className='slide' pagination = {{clickable: true}} modules={[Pagination,Navigation]} slidesPerView={1} spaceBetween={30} >
            <SwiperSlide className='swiper-slide1'><video src = 'blob:http://localhost:5173/5d22f114-f803-4a91-9893-2c48622f0113' controls autoPlay></video></SwiperSlide>
            <SwiperSlide className='swiper-slide1 '><img src = {p23} className=''/></SwiperSlide>
            <SwiperSlide className='swiper-slide1'><img src = {p24} className=''/></SwiperSlide>
            <SwiperSlide className='swiper-slide1 '><img src = {p25} className=''/></SwiperSlide>
            <SwiperSlide className='swiper-slide1'><img src = {p26} className=''/></SwiperSlide>
            <SwiperSlide className='swiper-slide1 '><img src = {p27} className=''/></SwiperSlide>
            <SwiperSlide className='swiper-slide1'><img src = {p28} className=''/></SwiperSlide>
            <SwiperSlide className='swiper-slide1'><img src = {p29} className=''/></SwiperSlide>
            <SwiperSlide className='swiper-slide1'><img src = {p30} className=''/></SwiperSlide>
            <SwiperSlide className='swiper-slide1'><img src = {p31} className=''/></SwiperSlide>
            <SwiperSlide className='swiper-slide1'><img src = {p32} className=''/></SwiperSlide>
            <SwiperSlide className='swiper-slide1'><img src = {p33} className=''/></SwiperSlide>
            
            
            
            
            
        </Swiper>
        <div className='description'  >
        <div className='description3 absolute ' data-aos= "fade-down" style={{color:profile1=='white'?'grey':'white'}}>
        Find your perfect home away from home with our comprehensive PG accommodation portal! We offer a user-friendly platform to explore a wide range of PG options across various cities. Search for rooms with ease using our intuitive search bar, filtering by your desired city and preferences. Each property page showcases enticing images, detailed room descriptions, a breakdown of amenities offered, and transparent pricing information. Read genuine reviews from past residents to get a feel for the living experience.

        </div>
        <div className='description1' data-aos = "flip-right" style={{color:profile1=='white'?'grey':'white'}}>
        Intuitive Search Bar:

Allows users to search for PG accommodations by city.
Advanced filtering options to narrow down search results based on budget, amenities, and other preferences.
Extensive Property Listings:

A wide range of PG options in multiple cities.
Each property listing includes high-quality images, detailed room descriptions, a list of amenities, and transparent pricing information.
Genuine Reviews:

Users can read reviews from past residents to get insights into the living experience at each property.
Reviews help build trust and assist in making informed decisions.
Detailed Property Pages:

Each property page provides an in-depth look at the accommodation, including enticing images, detailed descriptions, and a breakdown of amenities offered.
User-Friendly Interface:

Designed to be easy to navigate, ensuring a seamless user experience.
Responsive design for accessibility on various devices, including smartphones and tablets.
Direct Contact Options:

Users can contact property managers directly through the platform to ask questions or arrange visits.
Streamlined communication to facilitate quick and easy bookings.
Technologies Used:

Frontend: HTML, CSS, JavaScript, React.js
Backend: Node.js, Express.js
Database: MongoDB
Hosting: AWS
User Authentication: JWT (JSON Web Tokens)
Reviews and Ratings: Integrated system for collecting and displaying user reviews and ratings.
Challenges and Solutions:

Data Management: Ensured efficient handling of large datasets by optimizing database queries and using pagination.
User Trust: Incorporated genuine reviews and transparent pricing to build user trust and reliability.
Scalability: Designed the platform to be scalable to accommodate an increasing number of users and property listings.
        
       

        </div>
        <div className='description2' data-aos = "fade-down"  style={{color:profile1=='white'?'grey':'white'}}>
        Technologies Used:

HTML & CSS: Structured and styled the website to create a user-friendly interface.
Bootstrap: Ensured
PHP: Backend
MYSQL: Database 
Javascript: Backend and database connectvity with ajax
        </div>
      


        </div>

        </div>
      

        </div>
        <input type = "file" onChange={data}/>
        
        </div>
       
        </>
    )
}
export default Project;
