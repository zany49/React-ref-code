import React, { useEffect, useState } from 'react';
import './style.css' 
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Button = () =>{
    const [count, setCount] = useState(0)
    const [dupcount, setDupCount] = useState(0)
    const[itemList,setItemList] = useState([])
    const[name,setName] = useState("")
    const[modelName,setModelName] = useState("")
    const[imgLink,setImgLink] = useState("")

    const navigate = useNavigate()

    useEffect(()=>{
        getProducts()
    },[])

    const getProducts = async ()=>{
        try{

            let res = await axios.get("http://localhost:5000/products")
            console.log("res--->",res)
            setItemList(res.data)

        }catch(e){
            console.log("e--->",e)
        }

    }
    const updateArr = async (namemmm)=>{
        try{
            console.log("print--->",namemmm)
            // let arr = [...itemList,{
            //     name:name,
            //     mobileModel:modelName,
            //     img:imgLink,
            //     id:itemList.length + 1
            // }]
            // setItemList(arr)
            let res = await axios.post("http://localhost:5000/products",{
                    name:name,
                    mobileModel:modelName,
                    img:imgLink,
                    id:itemList.length + 1
            })
            console.log("res--->",res)
            getProducts()
            setName('')
            setModelName('')
            setImgLink('')
        }catch(e){
            console.log("e--->",e)
        }

    }

    const navigateMe = (data)=>{
        console.log("data---->",data)
        navigate(`${data?.id}`,{
            state: data
        })
        // navigate(`/login`)

    }

    console.log(itemList)

    return(
        <>
        {/* <button className='btn' onClick={dupaddNum}>Submit</button>
        <p>cout - {count}</p>
        <p>dupcout - {dupcount}</p> */}

        <input 
        type='text' 
        placeholder='Enter Mobile Name' 
        value={name}
         onChange={(e)=>{
            setName(e.target.value)
        }} 
        />
        <br />
        <input 
        type='text' 
        placeholder='Enter model Name' 
        value={modelName}
         onChange={(e)=>{
            setModelName(e.target.value)
        }} 
        />
        <br />

        <input 
        type='text' 
        placeholder='Enter Image url' 
        value={imgLink}
         onChange={(e)=>{
            setImgLink(e.target.value)
        }} 
        />
        <br />

                <button className='btn' onClick={()=>{
                    updateArr('name')
                }}>update data</button>
                <div>
                    {
                       itemList?.length > 0 ? itemList?.map((d,i)=>{
                            return(
                                <>
                                <div key={i} onClick={()=>navigateMe(d)}>
                                <h1>{d?.name}</h1>
                                <p>{d?.mobileModel}</p>
                                <img src={d?.img}  height={300} width={300}/>
                                </div>

                                </>
                            )
                        })
                        :(
                            <>
                            no data available
                            </>
                        )
                    }
                </div>
        </>
    )
}

export default Button