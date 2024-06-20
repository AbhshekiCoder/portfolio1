import bg1 from '../images/bg1.png';
import {Swiper, SwiperSlide} from  'swiper/react';
import 'swiper/css';
import 'swiper/swiper-bundle.css';
import 'swiper/css/pagination';
import {Navigation, Pagination, Scrollbar} from 'swiper/modules';
function Main({profile1}){
    console.log(profile1);
    
    return(
      
        <>
       
        <div className="main-container " style={{backgroundColor: profile1 == 'white'?'white':'black', color: profile1 == 'white'?'black':'white'}}>
        <div className='flex'>
        <div className="details">
            <h1>Hy Iam</h1>
            
            <p>Aditiya Singh</p>
           
          
            
            <div  className="detail mt-3 text-gray-600 w-96 max-md:w-72 ">
                <div style ={{color: profile1 == 'white'?'grey':'white'}} > Fullstack Web devloper with high skills and project delevier experience in many project of company</div>
                <button>More</button>
            </div>
        </div>
        <div className="image rounded-circle border max-md:absolute ">
            <img src = {bg1} className=" rounded-circle"/>
             </div>
        
            

        </div>
        <div className='icon flex' >
        <div data-aos = "fade-down" className='rounded-circle' >
        <i className="fa-brands fa-github text-4xl text-orange-400 rounded-circle "></i>
        </div>
        <div data-aos = "fade-down" className='rounded-circle'>
        <i class="fa-brands fa-linkedin text-4xl text-orange-400 rounded-circle "></i>
        </div>
        <div data-aos = "fade-down" className='rounded-circle'>
        <i class="fa-brands fa-facebook text-4xl text-orange-400 rounded-circle"></i>
        </div>
        <div data-aos = "fade-down" className='rounded-circle'>
        <i class="fa-brands fa-instagram text-4xl text-orange-400 rounded-circle "></i>
        </div>
        <div data-aos = "fade-down" className='rounded-circle'>
        <i class="fa-brands fa-whatsapp text-4xl text-orange-400 rounded-circle"></i>
        </div>






        </div>
        <div className='row skills'  id = "skills">
        <div className = "col-md skill">
        <h1>Technicals Skills</h1>
        <p>I Have Web development technologies with HTML, Javascript, CSS, PHP, Node.js, React, Mongo, Java, C/C++,DSA
        </p>

        </div>
        <div className='col-md skill1'>
        <div className='rounded-circle bg3 '>
        <div className='rounded-circle skill1'>
        <i class="fa-brands fa-html5"></i>

        </div>
        <div className='rounded-circle skill2'>
        <i class="fa-brands fa-php"></i>

         </div>
         <div className='rounded-circle skill3'>
         <i class="fa-brands fa-react"></i>

        </div>
         <div className='rounded-circle skill4'>
         <i class="fa-brands fa-node"></i>

         </div>
         <div className='rounded-circle skill5'>
         <i class="fa-brands fa-js"></i>

         </div>


    

        </div>
        <div className='skill-role w-fit h-fit'>
       
        <div className='rounded-circle bg1'>
        
         </div>
        <div className='rounded-circle bg2'>

        </div> 
        
        </div>
       

      </div>
        </div>
        <div className = "bg">

</div>

        <div className='services z-10 row' style={{backgroundColor: profile1 == 'white'?'white':'black', color: profile1 == 'white'?'black':'white'}}>
        <div className = "col-md z-10">
        <h1>My Awesome </h1>
        <p>Services</p>
        <p1 >we provided related to web development, Backend, Fullstack, UI/UX design, editing,
        seo</p1>
        <div>
        <button className='rounded-sm bg-orange-400 text-white w-40'>Download CV</button>

        </div>
       

        </div>
        <div className = "col-md card" style={{backgroundColor: profile1 == 'white'?'white':'black', color: profile1 == 'white'?'black':'white'}}>
        <div className='card3 absolute' >
        <div className=' flex justify-center'>
        <i class="fa-solid fa-face-laugh-wink text-yellow-400"></i>
        </div>
        <div className='flex justify-center mt-3 '>Content Creator</div>
        <div className='flex justify-center mt-3  text-gray-400 w-full  pl-5'>Web Design, Web devlopment, Seo </div>
       <a href = "#" className=' flex justify-center text-blue-300'>Learn More</a>



        </div>

        <div className='card1 ' >
        <div className=' flex justify-center'>
        <i class="fa-solid fa-face-grin-wink text-yellow-400"></i>
        </div>
        <div className='flex justify-center mt-3 '>UI UX Design</div>
        <div className='flex justify-center mt-3  text-gray-400 w-full  pl-5 max-md:text-sm max-md:mt-2'>figma, photoshope Adobe, Adobe xd </div>
       <a href = "#" className=' flex justify-center text-blue-300  max-md:text-sm max-md:mt-'>Learn More</a>


        </div>
        <div className='card2' >
        <div className=' flex justify-center'>
        <i class="fa-solid fa-face-laugh-wink text-yellow-400"></i>
        </div>
        <div className='flex justify-center mt-3 '>Web Developer</div>
        <div className='flex justify-center mt-3  text-gray-400 w-full  pl-5   max-md:mt-2'>Web Design, Web devlopment, Seo </div>
       <a href = "#" className=' flex justify-center text-blue-300  max-md:text-sm max-md:mt-'>Learn More</a>



        </div>

        </div>
       
            
        </div>

        <div className='projects' id = "projects">
        <h1>My Projects</h1>
        <div className=' max-md:hidden slide1'>
        <Swiper className='swiper max-md:hidden' pagination = {{clickable: true}} modules={[Pagination,Navigation]} slidesPerView={3} spaceBetween={30} >
            <SwiperSlide className='swiper-slide'><img src = {bg1} className=''/></SwiperSlide>
            <SwiperSlide className='swiper-slide '><img src = {bg1} className=''/></SwiperSlide>
            <SwiperSlide className='swiper-slide'><img src = {bg1} className=''/></SwiperSlide>
            <SwiperSlide className='swiper-slide '><img src = {bg1} className=''/></SwiperSlide>
            <SwiperSlide className='swiper-slide'><img src = {bg1} className=''/></SwiperSlide>
            <SwiperSlide className='swiper-slide '><img src = {bg1} className=''/></SwiperSlide>
            <SwiperSlide className='swiper-slide'><img src = {bg1} className=''/></SwiperSlide>
            <SwiperSlide className='swiper-slide '><img src = {bg1} className=''/></SwiperSlide>
            
        </Swiper>

        </div>
      

       
       
        <div className='hidden swiper1'>
        <Swiper className='swiper2 hidden max-md:block ' pagination = {{clickable: true}} modules={[Pagination,Navigation]} slidesPerView={1} spaceBetween={30} >
            <SwiperSlide className='swiper-slide'><img src = {bg1} className=''/></SwiperSlide>
            <SwiperSlide className='swiper-slide '><img src = {bg1} className=''/></SwiperSlide>
            <SwiperSlide className='swiper-slide'><img src = {bg1} className=''/></SwiperSlide>
            <SwiperSlide className='swiper-slide '><img src = {bg1} className=''/></SwiperSlide>
            <SwiperSlide className='swiper-slide'><img src = {bg1} className=''/></SwiperSlide>
            <SwiperSlide className='swiper-slide '><img src = {bg1} className=''/></SwiperSlide>
            <SwiperSlide className='swiper-slide'><img src = {bg1} className=''/></SwiperSlide>
            <SwiperSlide className='swiper-slide '><img src = {bg1} className=''/></SwiperSlide>
            
        </Swiper>

        </div>
      
        <div>
        <button className='border'>More </button>

        </div>
      

        </div>
      
      
        <div className='mt-5'>
            jkjk
        </div>
        </div>


       
       

    
     

      
        
       </>
    )

}
export default Main;