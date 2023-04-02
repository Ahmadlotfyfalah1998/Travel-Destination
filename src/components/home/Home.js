import { render } from "@testing-library/react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Tours from "../tours/Tours";
//import Tours from "./components/tours/Tours";
function Home (props){
return(
<>
  
    




<Header/>






{
props.tour.map(element => {

return (

<Tours name={element.name}  image={element.image} />

)



} )   

}


<Footer/>


    

</>



)

}




// function header(){
// return(


// )


// }



// function footer() {
// return(


// )

// }



export default Home;
