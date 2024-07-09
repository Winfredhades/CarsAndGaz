import Footer from "../components/footer/footer";
import Headermain from "../components/header/header";
import {Outlet} from "react-router-dom";

const PageLayout = () => {
    return(
        <>
            <Headermain/>
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </>
    )
}

export default PageLayout;