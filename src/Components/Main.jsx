import bg1 from '../images/bg1.png'
function Main(){
    return(
        <>
        <div className="main-container">
        <div className='flex'>
        <div className="details">
            <h1>Hy Iam</h1>
            <p>Aditiya Singh</p>
            <div  className="detail mt-3 text-gray-600 w-96 max-md:w-72 ">
                <div> Fullstack Web devloper with high skills and project delevier experience in many project of company</div>
                <button>More</button>
            </div>
        </div>
        <div className="image rounded-circle">
            <img src = {bg1} className=" rounded-circle"/>
        </div>
            

        </div>
        <div className='icon flex'>
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
       
        </div>
     
       </>
    )

}
export default Main;