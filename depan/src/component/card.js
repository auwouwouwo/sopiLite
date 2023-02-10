import Diskon from '../component/diskon'
import gambar from '../asset/gambar1.png'
import star from '../asset/bootstrap-icons-1.10.3/star-fill.svg'
const Card = ({props})=>{
    return (
        <>
        
        <div className={`card ${props} card-gambar`} >
        <a href="" style={{textDecoration:'none'}}>
        <img src={gambar} className="mt-3  card-img" alt="..."  style={{width: "18rem"}}/>
        <Diskon Diskon='card-discount' />
        <div className="card-body">
            <h5 className="card-title text-center">Card title</h5>
            <div className="content-card-2">
            <p className="card-price">Harga</p>
            <p className="card-sell" >1000 Terjual</p>
            </div>
            <div className="content-card-2">
                <div className="star">
                <img src={star} alt="" id='star-view'/>
                <img src={star} alt="" id='star-view'/>
                <img src={star} alt="" id='star-view'/>
                <img src={star} alt="" id='star-view'/>
                <img src={star} alt="" id='star-view'/>
                </div>
                <a href="#" className="btn btn-primary" id="float">Beli</a>
            </div>
            
        </div>
        </a>
       
        </div>
        
        </>
    )
}

export default Card
