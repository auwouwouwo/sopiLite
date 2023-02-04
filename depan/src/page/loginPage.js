const Login = ()=>{
    return(
        <>
            <div className="container">
                <form className="login-form">
                   <input type="text" className="username" placeholder="Username"/>
                   <span/>
                   <input type="password" className="password" name="" placeholder="Password" />
                   <input type="submit" className="input-button-login" value="Login"/>
                </form>
            </div>
        </>
    )};

export default Login;
