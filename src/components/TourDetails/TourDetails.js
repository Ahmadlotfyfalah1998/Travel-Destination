import Header from "../header/Header";
import Footer from "../footer/Footer";
import { useParams } from "react-router-dom";
import { useState } from "react";
function TourDetails(props){
const {id} =useParams()


let a =props.tour.filter(index => index.id==id)
   // console.log(props.tour.filter(index => index.id==id))
    console.log(a)
    
    
let [ReadMore,setReadMore]=useState(false)
return (
<>
<Header/>


<div className="parent">
<h1 className="info">{a[0].name}</h1>
<h2 className="info">{a[0].price}</h2>
<img  id="imgDetails"  src={a[0].image}/>
<div>
{
ReadMore? <>
<p>{a[0].info}</p>
<button  onClick={()=>setReadMore(false)}>show less</button>



</>
:
<>
<p>{(a[0].info).substring(0,150)}</p>
<button  onClick={()=>setReadMore(true)}>show more</button>


</>
}
</div>




</div>



<Footer/>
</>







)





}

export default TourDetails;