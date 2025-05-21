import './globals.css'
import './Header.css'
import './Main.css'
import './Footer.css'
import Header from "@//app/Header";
import Footer from "@/app/Footer";
import Main from "@/app/Main";

export default function Home() {
  return (
   <>

       <header>
           <Header/>
       </header>
       <main>
           <Main />
       </main>
       <footer>
           <Footer />
       </footer>
   </>
  );
}
