import logo from '../images/logo.png';
function Navbar(){
    
    return(
        <>
        <div className='navbar flex items-center'>
            <a className='text-xl text-blue-500 font-bold ml-24 logo border w-fit max-md:ml-9 max-sm:ml-6 max-sm:text-sm' href = "#">Portfolio</a>
            <div class="form-check form-switch border max-md:block max-md:absolute">
  <input className="form-check-input taxt-2xl" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
             </div>
            <div className='navbar-item'>
                <ul type = "none">
                    <li>
                        Home
                    </li>
                    <li>
                        About
                    </li>
                    <li>
                        Project
                    </li>
                    <li>
                       Skills
                    </li>
                    <li>
                        
                    </li>
                </ul>
            </div>
            <button className='btn  border '>Contact 
            Us
            </button>
        </div>
      
        </>
    )
}
export default Navbar;