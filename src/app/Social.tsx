import './Footer.css'
import Image from "next/image";

export default function Social (){
    return(
        <section className={"style-nav-social-group"}>
            <Image className={"linkedIn-logo"} src={"./social/linkedIn.svg"} alt={"logo linkedIn"} width={30} height={30} />
            <Image className={"intagram-logo"} src={"./social/instagram.svg"} alt={"logo instagram"} width={30} height={30} />
            <Image className={"threads-logo"} src={"./social/threads.svg"} alt={"logo threads"} width={30} height={30} />
            <Image className={"github-logo"} src={"./social/github.svg"} alt={"logo github"} width={30} height={30} />
        </section>
    )
}