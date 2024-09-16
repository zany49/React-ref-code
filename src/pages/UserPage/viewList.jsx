import { useLocation, useParams } from "react-router-dom";
import Button from "../../components/Button"

const ViewList =({})=>{

   let params =  useParams();
   let {id} =  useParams();
   let location = useLocation()


   console.log("params value---->",params.id,id,location?.state)

    return(
        <>
         <p>product Id: {location?.state.id}</p>
         <p>Mobile Name: {location?.state.name}</p>
         <p>Model name: {location?.state.mobileModel}</p>
         <img src={location?.state.img} />

        </>
    )
}


export default ViewList