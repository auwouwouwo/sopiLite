import Navbar from '../component/navbar'
import Footer from '../component/footer'
import Card from '../component/card'
import Diskon from '../component/diskon'
import Display from '../component/display'


const homePage =()=>{
    return(
        <>
        <nav className="navbar bg-primary">
        <section className="container  " style={{color:'#ffffff'}}>
            <Navbar />
        </section>
        </nav>
        <div className="container">
            <div className="diskon-content">
                <h3>Diskon</h3>
            <Diskon Diskon='card-discount'/>
            </div>
        
        </div>
        <div className="container wrap-card">
            <div className="row  p-2">
                <Card props='col-3 m-4' />
                <Card props='col-3 m-4' />
                <Card props='col-3 m-4' />
            </div>
        </div> 
        <div className="container">
        <h3>Product</h3>   
        <div className="row">
        <Card props='col m-4' /> 
        <Card props='col m-4' /> 
        <Card props='col m-4' /> 
        <Card props='col m-4' /> 
        </div> 
        </div>     
        <div>
            <Footer />
        </div>  
        </>
    )
}

export default homePage
