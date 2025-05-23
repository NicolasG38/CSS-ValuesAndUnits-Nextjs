import Header from "@/app/Header";
import BalisesMain from "@/app/(pages)/(frontend)/HTML/Balises/balises";
import Footer from "@/app/Footer";


export default function Balises(){
    return(
        <>
            <>
                <header>
                    <Header/>
                </header>
                <main>
                    <BalisesMain />
                </main>
                <footer>
                    <Footer />
                </footer>
            </>
        </>
    )
}