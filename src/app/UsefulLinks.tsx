import Link from "next/link";
export default function UsefulLinks() {
    return (
        <>
            <section className={"usefulllinksSection"}>
            <ul className="footerUsefulllinksLinksList">
                <Link href="/HTML"><li>HTML</li></Link>
                <Link href="/CSS"><li>CSS</li></Link>
                <Link href="/JS"><li>JAVASCRIPT</li></Link>
            </ul>
                <ul className="footerUsefulllinksLinksList">
                    <Link href="/MySQL"><li>MySQL</li></Link>
                    <Link href="/PHP"><li>PHP</li></Link>
                    <Link href="/Python"><li>PYTHON</li></Link>
                </ul>
                <ul className="footerUsefulllinksLinksList">
                    <Link href="/React"><li>REACT</li></Link>
                    <Link href="/NextJS"><li>NEXTJS</li></Link>
                    <Link href="/tools"><li>OUTILS</li></Link>
                </ul>
            </section>
        </>
    )
}