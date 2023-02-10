import Facebook from '../asset/bootstrap-icons-1.10.3/facebook.svg'
import Instagram from '../asset/bootstrap-icons-1.10.3/instagram.svg'
import Whatapps from '../asset/bootstrap-icons-1.10.3/whatsapp.svg'

const Footer =()=>{
    return(
        <>
        <footer>
        <div className="footer-content">
            <div className="sosmed">
            <a href="#"><img src={Facebook} alt="" /></a>    
            </div>
            <div className="sosmed">
            <a href="#"><img src={Instagram} alt="" /></a>    
            </div>
            <div className="sosmed">
            <a href="#"><img src={Whatapps} alt="" /></a>    
            </div>
        </div>
        </footer>
        </>
    )
}


export default Footer