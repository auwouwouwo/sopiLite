
const Register = ()=>{
    return (
    <>
    <div className="text-form">
    <h1 className="text-primary ">Register</h1>
    <form action="">
        <div className="form-group">
            <label htmlFor="username" >Username</label>
            <br/>
            <input type="text" /**onClick={(e)=>setUsername(e.target.value)} **/placeholder='Masukan Username' />
        </div>
        <div className="form-group">
            <label htmlFor="gmail" >Gmail</label>
            <br/>
            <input type="text"  /**onClick={(e)=>setGmail(e.target.value)}**/ placeholder='Masukan Gmail' />  
        </div>
        <div className="form-group">
            <label htmlFor="password">Password</label>
            <br/>
            <input type="text" /**onClick={(e)=>setPassword(e.target.value)}**/ placeholder='Masukan Password' /> 
        </div>
        <div className="form-group">
            <label htmlFor="konfirmasi" >Konfirmasi</label>
            <br/>
            <input type="text" placeholder='Masukan Password' />
            <br/>
           
        </div>
        <div className="form-group checkbox">
        <input type="checkbox" name="checkbox" id="checkbox" />      
        <label htmlFor="checkbox">I Agree</label>
        </div>
        <div className="form-group">
        <button style={{color:'white'}} className="btn btn-primary btn-daftar">DAFTAR</button>
        </div>
        
    </form> 
    </div>
    </>
    )
    
}

export default Register 