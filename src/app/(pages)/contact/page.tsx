import '../../globals.css'
import '../../Header.css'
import '../../Main.css'
import '../../Footer.css'
import Header from "@/app/Header";
import Footer from "@/app/Footer";
import Form from "@/app/(pages)/contact/Form";

export default function Contact(){
 return(
     <>
      <>
       <header>
        <Header/>
       </header>
       <main>
        <Form />
       </main>
       <Footer />
      </>
     </>
 )
}