import Header from '@/app/Header'
import Footer from '@/app/Footer';
import React from "react";
import '../../Header.css'
import '../../Footer.css'
import './about.css'

const videos =[
    {
        title:"Miss Monique - MiMo Weekly Podcast 035 4K [Melodic Techno/ Progressive House DJ Mix]",
        link :"https://www.youtube.com/embed/ZOicqeejDwU?si=L1mWyIpm8PpsgBZB",
        id:1,
    }
]

export default function Page(){
        return (
            <>
                <header>
                    <Header/>
                </header>
                <main>
                    <p className={"secretSentence"}>Bienvenu sur ma page secréte... ou je regarde des videos Youtube
                        sans pub. Étant fan de progessive House/Melodic Techno, vous ne trouverez que ça ici ! </p>
                    <iframe className={"video"} width="1120" height="630" src={videos[0].link}
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen>
                    </iframe>


                    <iframe height="600" width="40%"
                            src="https://codepen.io/NicolasG38/embed/preview/jEPNzQo?default-tab=html" frameBorder="no"
                            loading="lazy"  >
                        See the Pen <a href="https://codepen.io/NicolasG38/pen/jEPNzQo">
                        Structure HTML</a> by GIRARD (<a href="https://codepen.io/NicolasG38">@NicolasG38</a>)
                        on <a href="https://codepen.io">CodePen</a>.
                    </iframe>

                </main>
                <Footer/>
            </>
        )
}