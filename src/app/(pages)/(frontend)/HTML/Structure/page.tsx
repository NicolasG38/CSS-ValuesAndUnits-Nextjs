import '@/app/globals.css'
import '@/app/Header.css'
import '@/app/Main.css'
import '@/app/Footer.css'
import Header from "@/app/Header";
import Footer from "@/app/Footer";
import StructureMain from "@/app/(pages)/(frontend)/HTML/Structure/structure";



export default function Structure(){
    return(
            <>
                <header>
                    <Header/>
                </header>
                <main>
                <StructureMain />
                </main>
                <footer>
                    <Footer />
                </footer>
            </>
    )
}