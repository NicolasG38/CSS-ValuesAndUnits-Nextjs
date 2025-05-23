import '@/app/globals.css'
import '@/app/Header.css'
import '@/app/Main.css'
import '@/app/Footer.css'
import Header from "@/app/Header";
import Footer from "@/app/Footer";


export default function Structure(){
    return(
            <>
                <header>
                    <Header/>
                </header>
                <main>

                </main>
                <footer>
                    <Footer />
                </footer>
            </>
    )
}