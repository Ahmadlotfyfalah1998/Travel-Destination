import { render } from "@testing-library/react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Tours from "../tours/Tours";
import './Home.css'

function Home (props){
    
    const tour = props.tour

    
return(
<>
   




<Header/>






{
tour.map(element => {

return (

<Tours name={element.name}  image={element.image}  id={element.id}/>

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
