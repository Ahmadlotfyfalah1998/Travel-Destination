import { Link } from "react-router-dom"
import TourDetails from "../../TourDetails/TourDetails"



function Tour(props){
    
    function clickHandeler(){




    }



const name=props.name
const image=props.image
const id =props.id


return (

  <>
  
<Link className="link2"    to={`city/${id}`}  >
  <section  className="secc" >
   
<h1>{name}</h1>
<img  src={image}  className="img"/>

</section>

</Link>
</>


)




}



export default Tour;