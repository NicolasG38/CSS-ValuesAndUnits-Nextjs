import Image from 'next/image';

import Link from "next/link";


export default function Header(){
  return(
      <>
    <nav className={"styles-nav"}>
        <section className={"style-nav-social-group"}>
            <Image className={"bluesky-logo"} src={"./social/bluesky.svg"} alt={"logo bluesky"} width={30} height={30} />
            <Image className={"intagram-logo"} src={"./social/instagram.svg"} alt={"logo instagram"} width={30} height={30} />
            <Image className={"threads-logo"} src={"./social/threads.svg"} alt={"logo threads"} width={30} height={30} />
            <Image className={"linkedIn-logo"} src={"./social/linkedIn.svg"} alt={"logo linkedIn"} width={30} height={30} />
            <Image className={"github-logo"} src={"./social/github.svg"} alt={"logo github"} width={30} height={30} />
        </section>
        <ul className={"styles-navList"}>
            <Link href="/"><li className={"style-navList-li"}>Home</li></Link>
        <Link href="/about/"><li className={"style-navList-li"}>About</li></Link>
        </ul>
    </nav>
      </>
  )
}