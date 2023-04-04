import Header from "../header/Header";
import Footer from "../footer/Footer";
import { useParams } from "react-router-dom";
function TourDetails(props){
const {id} =useParams()


let a =props.tour.filter(index => index.id==id)
   // console.log(props.tour.filter(index => index.id==id))
    console.log(a)
    
    

return (
<>
<Header/>


<div className="parent">
<h1 className="info">{a[0].name}</h1>
<h2 className="info">{a[0].price}</h2>
<img  id="imgDetails"  src={a[0].image}/>
<h5>{a[0].info}</h5>

</div>



<Footer/>
</>







)





}

export default TourDetails;