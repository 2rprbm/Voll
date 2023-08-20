import Footer from "Components/Footer";
import { Outlet } from "react-router-dom";


function PaginaComum(){
    return(
        <>
            <Outlet/>
            <Footer />
        </>
    )
}

export default PaginaComum;