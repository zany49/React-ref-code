import { useEffect } from "react"
import Button from "../../components/Button"

const AddList = ({ }) => {

    // useEffect(() => {
    //     async function getApi(){
    //         try{
    //         let res =await fetch("http://localhost:5000/products/1")
    //         let data =await res.json()
    //         console.log("d--->",data)
    //     }
    //     catch(er){
    //         console.log("err--->",er)
    //     }
    //     }
    //     getApi()
    // }, [])

    async function postApi(){
        try{
        const jsonData = { key1: 'value1', key2: 'value2' };
        let res =await fetch("https://jsonplaceholder.typicode.com/todos/1",{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json' 
            },
            body: JSON.stringify(jsonData) 
          })
        let data =await res.json()
        console.log("d--->",data)
    }
    catch(er){
        console.log("err--->",er)
    }
    }

    return (
        <>
            <Button />
        </>
    )
}


export default AddList