import img from "../asset/gambar1.png"
const Card = ()=>{
    return(
            <div className="card" style={{width: "393.86px"}}>
              <img className="card-img-top" src={img} alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">JUDUL CARD</h5>
                <p className="card-text">Some text content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
           </div>
    )};

export default Card;
