import Header from '../../Header'
import Footer from "@/app/Footer";
import '../../Header.css'
import '../../Footer.css'

export default function Page(){
    return (
        <>
            <header>
                <Header/>
            </header>
            <main>
                <iframe className={"video"} width="1120" height="630" src="https://www.youtube.com/embed/ZOicqeejDwU?si=LFrMczjH9ZBwmM5W"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen>
                </iframe>
            </main>
            <Footer/>
        </>
    )
}