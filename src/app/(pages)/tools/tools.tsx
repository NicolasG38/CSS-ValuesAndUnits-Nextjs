import Image from 'next/image';
import Link from "next/link";

import './tools.css'

const info=[
    {
        design:[
            {
                id: "1",
                title: "Excalidraw",
                img: "/tools/excalidraw.svg",
                link: "https://excalidraw.com/",
            },
            {
                id: "2",
                title: "Figma",
                img: "/tools/figma.svg",
                link: "https://www.figma.com/",
            }
        ],
        docs: [
            {
                id: "3",
                title: "MDN",
                img: "/tools/mdn.svg",
                link: "https://developer.mozilla.org/fr/",
            },
            {
                id: "4",
                title: "MySQL",
                img: "/tools/mysql.svg",
                link: "https://www.mysql.com/"
            },
            {
                id: "5",
                title: "PHP",
                img: "/tools/php.svg",
                link: "https://www.php.net/"
            },
            {
                id: "6",
                title: "Python",
                img: "/tools/python.svg",
                link: "https://www.python.org/"
            },
            {
                id: "7",
                title: "React",
                img: "/tools/react.svg",
                link: "https://react.dev/"
            },
            {
                id: "8",
                title: "Next.js",
                img: "/tools/nextjs.svg",
                link: "https://nextjs.org/"
            },
        ],
        ide:[
            {
                id: "9",
                title: "Visual Studio Code",
                img: "/tools/vsc.svg",
                link: "https://code.visualstudio.com/"
            },
            {
                id: "10",
                title: "Jet Brains Webstorm",
                img: "/tools/webstorm.svg",
                link: "https://www.jetbrains.com/webstorm/?var=new"
            },
        ],
        images:[
            {
                id: "11",
                title: "Unsplash",
                img: "/tools/unsplash.svg",
                link: "https://unsplash.com/fr"
            }
        ],
        deploys:[
            {
                id: "12",
                title: "Versel",
                img: "/tools/vercel.svg",
                link: "https://vercel.app/"
            },
            {
                id: "13",
                title: "Netlify",
                img: "/tools/netlify.svg",
                link: "https://www.netlify.com/"
            },
        ]
    }
];


export default function Toolsmain(){

    return (
        <>
            <section className={"toolsMainSection"}>
                <section className={"toolsDesign toolsItemsSection"}>
                    <h2 className={"toolsTitleSection"}>Wireframe/Maquette</h2>
                {info[0].design.map((design) =>
                    <article key={design.id} className={"toolsItem"}>
                <p className={"toolsTitle"}>{design.title}</p>
                    <Image className={"toolsImg"} src={design.img} alt={""} width={100} height={100}/>
                        <Link className={"toolsLink"} href={design.link} target={"_blank"}>Visiter le site</Link>
                    </article>
                )}
            </section>
                <section className={"toolsDocs toolsItemsSection"}>
                    <h2 className={"toolsTitleSection"}>Documentations</h2>
                    {info[0].docs.map((docs) =>
                        <article key={docs.id} className={"toolsItem"}>
                            <p className={"toolsTitle"}>{docs.title}</p>
                            <Image className={"toolsImg"} src={docs.img} alt={""} width={100} height={100}/>
                            <Link className={"toolsLink"} href={docs.link} target={"_blank"}>Visiter le site</Link>
                        </article>
                    )}
                </section>
                <section className={"toolsIde toolsItemsSection"}>
                    <h2 className={"toolsTitleSection"}>IDE</h2>
                    {info[0].ide.map((ide) =>
                        <article key={ide.id} className={"toolsItem"}>
                            <p className={"toolsTitle"}>{ide.title}</p>
                            <Image className={"toolsImg"} src={ide.img} alt={""} width={100} height={100}/>
                            <Link className={"toolsLink"} href={ide.link} target={"_blank"}>Visiter le site</Link>
                        </article>
                    )}
                </section>
                <section className={"toolsImages toolsItemsSection"}>
                    <h2 className={"toolsTitleSection"}>Images libre de droit</h2>
                    {info[0].images.map((images) =>
                        < article key={images.id} className={"toolsItem"}>
                            <p className={"toolsTitle"}>{images.title}</p>
                            <Image className={"toolsImg"} src={images.img} alt={""} width={100} height={100}/>
                            <Link className={"toolsLink"} href={images.link} target={"_blank"}>Visiter le site</Link>
                        </article>
                    )}
                </section>
                <section className={"toolsDeploys toolsItemsSection"}>
                    <h2 className={"toolsTitleSection"}>Déployer son site</h2>
                    {info[0].deploys.map((deploys) =>
                        <article key={deploys.id} className={"toolsItem"}>
                            <p className={"toolsTitle"}>{deploys.title}</p>
                            <Image className={"toolsImg"} src={deploys.img} alt={""} width={100} height={100}/>
                            <Link className={"toolsLink"} href={deploys.link} target={"_blank"}>Visiter le site</Link>
                        </article>
                    )}
                </section>
            </section>
        </>
    )
}