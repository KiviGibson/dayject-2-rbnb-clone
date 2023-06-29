import "../style/content.css"
import Offer from "./offer"
import img1 from "../test/d.png"
import img2 from "../test/o.png"
import img3 from "../test/zo.png"
import {useEffect, useState} from "react"
export default function Content(){
    const [amount,setAmount] = useState(6)
    const [items,setItems] = useState([]);
    useEffect(()=>{
        let url = `http://localhost:5000/offers/0/${amount}`;
        let options = {method: 'GET'};
        fetch(url, options)
            .then(res => res.json())
            .then(json => setItems(json))
            .catch(err => console.error('error:' + err));
    },[amount])
    let jsx = items.map(e=><Offer src={e.src} place={e.place} desc={e.desc} price={e.price}/>)
    return(
        <div className="content">
            <h1>Top-rated places to stay</h1>
            <h4>Explore some of the best-reviewed stays in the word</h4>
            <div className="offers">
                {jsx}
            </div>
            <div className="footer">{(amount==items.length)?<button className="button-1" onClick={()=>setAmount(e=>e+6)}>Load more</button>:<></>}</div>
        </div>
    )
}