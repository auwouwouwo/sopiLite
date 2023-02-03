const Login = ()=>{
    return(
        <>
            <div className="container-login-form">
                <form className="login-form">
                   <input type="text" className="username" placeholder="username"/>
                   <span/>
                   <input type="password" className="password" name="" placeholder="password" />
                   <input type="submit" className="input-button-login" value="Login"/>
                </form>
            </div>
        </>
    )};

export default Login;
