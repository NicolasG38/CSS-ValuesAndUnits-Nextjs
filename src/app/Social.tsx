import './Footer.css'
import Image from "next/image";
import Link from "next/link";

export default function Social (){
    return(
        <section className={"style-nav-social-group"}>

            <section className={"logosSocial"}>
                <Link href={"https://www.linkedin.com/in/nicolasgirard38/"}><Image className={"linkedIn-logo"} src={"/social/linkedIn.svg"} alt={"logo linkedIn"} width={25} height={25} /></Link>
                <Link href={"https://www.instagram.com/thelazyagency/"}><Image className={"intagram-logo"} src={"/social/instagram.svg"} alt={"logo instagram"} width={25} height={25} /></Link>
                <Link href={"https://www.threads.com/thelazyagency/"}><Image className={"threads-logo"} src={"/social/threads.svg"} alt={"logo threads"} width={25} height={25} /></Link>
                <Link href={"https://github.com/NicolasG38"}><Image className={"github-logo"} src={"/social/github.svg"} alt={"logo github"} width={25} height={25} /></Link>
            </section>
        </section>
    )
}