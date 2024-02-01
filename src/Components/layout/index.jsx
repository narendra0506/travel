import Footer from "../footer"
import Header from "../header"

const Layout=(props)=>{
    return(
        <>
        <Header/>
        <main style={{minHeight:"80vh"}}>{props.children}</main>
        <Footer/>
        </>
    )
}
export default Layout