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
                id: "1",
                title: "MDN",
                img: "/tools/mdn.svg",
                link: "https://developer.mozilla.org/fr/",
            },
            {
                id: "2",
                title: "MySQL",
                img: "/tools/mysql.svg",
                link: "https://www.mysql.com/"
            },
            {
                id: "3",
                title: "PHP",
                img: "/tools/php.svg",
                link: "https://www.php.net/"
            },
            {
                id: "4",
                title: "Python",
                img: "/tools/python.svg",
                link: "https://www.python.org/"
            },
            {
                id: "5",
                title: "React",
                img: "/tools/react.svg",
                link: "https://react.dev/"
            },
            {
                id: "4",
                title: "Next.js",
                img: "/tools/nextjs.svg",
                link: "https://nextjs.org/"
            },
        ],
        ide:[
            {
                id: "1",
                title: "Visual Studio Code",
                img: "/tools/vsc.svg",
                link: "https://code.visualstudio.com/"
            },
            {
                id: "2",
                title: "Jet Brains Webstorm",
                img: "/tools/webstorm.svg",
                link: "https://www.jetbrains.com/webstorm/?var=new"
            },
        ],
        images:[
            {
                id: "1",
                title: "Unsplash",
                img: "/tools/unsplash.svg",
                link: "https://unsplash.com/fr"
            }
        ],
        deploys:[
            {
                id: "1",
                title: "Versel",
                img: "/tools/vercel.svg",
                link: "https://vercel.app/"
            },
            {
                id: "2",
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
                <section className={"toolsDesign"}>
                {info[0].design.map((design) =>
                    <>
                <p key={design.id}>{design.title}</p>
                    <Image src={design.img} alt={""} width={100} height={100}/>
                        <Link href={design.link}>Visiter le site</Link>
                    </>
                )}
            </section>
                <section className={"toolsDocs"}>
                    {info[0].docs.map((docs) =>
                        <>
                            <p key={docs.id}>{docs.title}</p>
                            <Image src={docs.img} alt={""} width={100} height={100}/>
                            <Link href={docs.link}>Visiter le site</Link>
                        </>
                    )}
                </section>
                <section className={"toolsIde"}>
                    {info[0].ide.map((ide) =>
                        <>
                            <p key={ide.id}>{ide.title}</p>
                            <Image src={ide.img} alt={""} width={100} height={100}/>
                            <Link href={ide.link}>Visiter le site</Link>
                        </>
                    )}
                </section>
                <section className={"toolsImages"}>
                    {info[0].images.map((images) =>
                        <>
                            <p key={images.id}>{images.title}</p>
                            <Image src={images.img} alt={""} width={100} height={100}/>
                            <Link href={images.link}>Visiter le site</Link>
                        </>
                    )}
                </section>
                <section className={"toolsDeploys"}>
                    {info[0].deploys.map((deploys) =>
                        <>
                            <p key={deploys.id}>{deploys.title}</p>
                            <Image src={deploys.img} alt={""} width={100} height={100}/>
                            <Link href={deploys.link}>Visiter le site</Link>
                        </>
                    )}
                </section>
            </section>
        </>
    )
}