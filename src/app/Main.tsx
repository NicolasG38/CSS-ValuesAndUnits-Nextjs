import Link from "next/link";


interface boxProps{
 number:string;
 category:string;
 content: {
     lesson1:string;
     lesson2:string;
     lesson3:string;
     lesson4:string;
     lesson5:string;
 } [];
 key:number;
}
export default function Main() {

    const boxFrontend=[
        {
            number: ".001",
            categorie:"Html",
            class:"box imgHTML",
            content:{
                lesson1:"La structure",
                lesson2:"Les balises",
                lesson3:"Html3",
                lesson4:"Html4",
                lesson5:"Html5",
            },
            key:10
        },
        {
            number: ".002",
            categorie:"CSS",
            class:"box imgCSS",
            content:{
                lesson1:"Clé/Valeur",
                lesson2:"CSS2",
                lesson3:"CSS3",
                lesson4:"CSS4",
                lesson5:"CSS5",
            },
            key:11
        },
        {
            number: ".003",
            categorie:"Javascript",
            class:"box imgJS",
            content:{
                lesson1:"Javascript1",
                lesson2:"Javascript2",
                lesson3:"Javascript3",
                lesson4:"Javascript4",
                lesson5:"Javascript5",
            },
            key:12
        }
    ]

    const boxBackend=[
        {
            number: ".001",
            categorie:"Mysql",
            class:"box imgMySQL",
            content:{
                lesson1:"MySQL1",
                lesson2:"MySQL2",
                lesson3:"MySQL3",
                lesson4:"MySQL4",
                lesson5:"MySQL5",
            },
            key:20
        },
        {
            number: ".002",
            categorie:"php",
            class:"box imgPHP",
            content:{
                lesson1:"PHP1",
                lesson2:"PHP2",
                lesson3:"PHP3",
                lesson4:"PHP4",
                lesson5:"PHP5",
            },
            key:21
        },
        {
            number: ".003",
            categorie:"Python",
            class:"box imgPYTHON",
            content:{
                lesson1:"Python1",
                lesson2:"Python2",
                lesson3:"Python3",
                lesson4:"Python4",
                lesson5:"Python5",
            },
            key:22
        }
    ]

    const frontendBox=boxFrontend.map((boxProps) =>(
        <section key={boxProps.key} className={"sectionHTML"}>
            <article className={boxProps.class}>
                <h5 className={"number"}>{boxProps.number}</h5>
                <h3 className={"categories"}>{boxProps.categorie}</h3>
                <section className={"divider"}>
                    <ul>
                        <li><Link href={""}>{boxProps.content.lesson1}</Link></li>
                        <li>{boxProps.content.lesson2}</li>
                        <li>{boxProps.content.lesson3}</li>
                        <li>{boxProps.content.lesson4}</li>
                        <li>{boxProps.content.lesson5}</li>
                    </ul>
                </section>
            </article>
        </section>
    ))

    const backendBox=boxBackend.map((boxProps)=>(
        <section key={boxProps.key} className={"sectionHTML"}>
            <article className={boxProps.class}>
                <h5 className={"number"}></h5>
                <h3 className={"categories"}>{boxProps.categorie}</h3>
                <section className={"divider"}>
                    <ul>
                        <li>{boxProps.content.lesson1}</li>
                        <li>{boxProps.content.lesson2}</li>
                        <li>{boxProps.content.lesson3}</li>
                        <li>{boxProps.content.lesson4}</li>
                        <li>{boxProps.content.lesson5}</li>
                    </ul>
                </section>
            </article>
        </section>
    ))

        return(
            <>
                <h1 className={"websiteTitle"}>Values & Units</h1>
                <section className={"presentation"}>
                    <p className={"presentationText"}>Et quia Montius inter dilancinantium manus spiritum efflaturus Epigonum et Eusebium nec professionem nec dignitatem ostendens aliquotiens increpabat, qui sint hi magna quaerebatur industria, et nequid intepesceret, Epigonus e Lycia philosophus ducitur et Eusebius ab Emissa Pittacas cognomento, concitatus orator, cum quaestor non hos sed tribunos fabricarum insimulasset promittentes armorum si novas res agitari conperissent.</p>
                </section>
                <section className={"sectionTitleFrontend"}>
                    <h2 className={"titleFrontend"}> Les bases du Frontend</h2>
                </section>
                <section className={"sectionFrontend"}>
                    {frontendBox}
                </section>
                <section className={"sectionTitleFrontend"}>
                    <h2 className={"titleFrontend"}> Les bases du Backend</h2>
                </section>
                <section className={"sectionFrontend"}>
                    {backendBox}
                </section>
                <section className={"sectionFrameworkJS"}>
                    <section className={"sectionREACT"}>
                        <h3>REACT</h3>
                        <ul>
                            <li>text</li>
                            <li>text</li>
                            <li>text</li>
                            <li>text</li>
                            <li>text</li>
                        </ul>
                    </section>
                    <section className={"sectionNEXTJS"}>
                        <h3>NEXTJS</h3>
                        <ul>
                            <li>text</li>
                            <li>text</li>
                            <li>text</li>
                            <li>text</li>
                            <li>text</li>
                        </ul>
                    </section>
                </section>
            </>
        )
}