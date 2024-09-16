import { Outlet } from "react-router-dom"
import Button from "../../components/Button"
import FooterComp from "../../components/Footer"
import HeaderComp from "../../components/Header"

const UserPageIndex =({})=>{



    return(
        <>
            {/* <Button /> */}
            <HeaderComp />
            <Outlet/>
            <FooterComp />

        </>
    )
}


export default UserPageIndex