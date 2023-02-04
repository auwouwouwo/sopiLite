import gambar1 from '../asset/gambar1.png'
import Register from '../component/register'



const registerPage =()=>{
    return(
    <>
       <div className='register-content'>
        <div className='linier-image'>
            <img className="image-register" src={gambar1} alt="" />
        </div> 
        <div className="form-content" >
            <Register />
        </div> 
       </div>
            
    </>

    )}


export default registerPage