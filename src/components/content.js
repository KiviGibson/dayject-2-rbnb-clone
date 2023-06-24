import "../style/content.css"
import Offer from "./offer"
import img1 from "../test/d.png"
import img2 from "../test/o.png"
import img3 from "../test/zo.png"

export default function Content(){
    let items = [{src:img1,place:"Osaka",desc:"Osaka 2 bed flat",price:"250USD"},{src:img3,place:"Osaka",desc:"Osaka 2 bed flat",price:"250USD"},{src:img1,place:"Osaka",desc:"Osaka 2 bed flat",price:"250USD"},{src:img2,place:"Osaka",desc:"Osaka 2 bed flat",price:"250USD"}]
    let jsx = items.map(e=><Offer src={e.src} place={e.place} desc={e.desc} price={e.price}/>)
    return(
        <div className="content">
            <h1>Top-rated places to stay</h1>
            <h4>Explore some of the best-reviewed stays in the word</h4>
            <div className="offers">
                {jsx}
            </div>
            <div className="footer"><button className="button-1">Load more</button></div>
        </div>
    )
}