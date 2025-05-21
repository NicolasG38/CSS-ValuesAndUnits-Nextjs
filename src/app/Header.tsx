import Image from 'next/image';
import Link from "next/link";


export default function Header(){
  return(
      <>
        <section className={"sectionLogo"}>
          <Image className={"logo"} src={"/logo.png"} alt={"logo"} width={100} height={100} />
        </section>
    <nav className={"styles-nav"}>

        <section className={"styles-nav-section"}>
            <ul className={"styles-navList"}>
                <Link href="/"><li className={"style-navList-li"}>Home</li></Link>
                <Link href="/frontend"><li className={"style-navList-li"}>Frontend</li></Link>
                <Link href="/backend"><li className={"style-navList-li"}>Backend</li></Link>
                <Link href="/about"><li className={"style-navList-li"}>About</li></Link>
            </ul>
        </section>

        <section className={"styles-nav-others"}>
            <Link href="/tools"><li className={"style-navList-li"}>Outils</li></Link>
            <Link href={"/contact"}><li className={"style-navList-li"}>Contact</li></Link>
            <Image className={"github-logo"} src={"./ui-ux/arrowCircleUp.svg"} alt={"logo github"} width={40} height={40} />
        </section>
    </nav>
      </>
  )
}