import icon from '../asset/bootstrap-icons-1.10.3/cart2.svg'
import searchicon from '../asset/bootstrap-icons-1.10.3/search.svg'

const Navbar =()=>{
    return(
        <>
        <div className="">
        <div className="navheader "style={{color:'#ffffff'}}>
            <ul>
                <li>
                    <a href="#">Home</a>
                </li>
                <span>|</span>
                <li>
                    <a href="#">Discount</a>
                </li>
                <span>|</span>
                <li>
                    <a href="#">Category</a>
                </li>
                <span>|</span>
            </ul>
        </div>
        <div className="navbar-content">
            <h2>Risa Baba</h2>
            <form className="search-content" role="search">
                <input placeholder="Search" aria-label="Search"/>
                <button className="Button-search" type="submit"><img src={searchicon} alt="" /></button>
            </form>
            <button className="cart-content">
                <img src={icon} alt=""/>
            </button>
            <button className='register-button'>
                Register
            </button>            
        </div>
        
        </div>
        
        </>
    )
}

export default Navbar