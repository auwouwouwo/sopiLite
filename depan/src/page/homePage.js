import Navbar from '../component/navbar'
import Footer from '../component/footer'
import Card from '../component/card'


const homePage =()=>{
    return(
        <>
        <nav className="navbar bg-primary">
        <section className="container  " style={{color:'#ffffff'}}>
            <Navbar />
        </section>
        </nav>
        <div className="container">
            
        </div>
        <div className="container wrap-card">
            <div className="row  p-2">
                <Card props='col-3 m-4' />
                <Card props='col-3 m-4' />
                <Card props='col-3 m-4' />
                <Card props='col' />
            </div>
        </div>      
        <div>
            <Footer />
        </div>  
        </>
    )
}

export default homePage
