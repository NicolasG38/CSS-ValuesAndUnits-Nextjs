import Header from '../../Header'
import Footer from "@/app/Footer";
import '../../Header.css'
import '../../Footer.css'
import Toolsmain from "@/app/(pages)/tools/tools";

export default function Tools(){
    return (
        <>
            <header>
                <Header/>
            </header>
            <main>
            <Toolsmain/>
            </main>
            <Footer />
        </>
    )
}