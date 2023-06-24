import "../style/offer.css"
export default function Offer({src,place="",desc,price}){
    return(
        <div className="item">
            <img src={src} alt={place}/>
            <h6 className="place">{place.toUpperCase()}</h6>
            <h5 className="desc">{desc}</h5>
            <h6 className="price">${price}/night</h6>
        </div>
    )
}