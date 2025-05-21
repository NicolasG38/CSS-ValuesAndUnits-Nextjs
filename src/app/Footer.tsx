import Social from "@/app/Social";
import UsefulLinks from "@/app/UsefulLinks";


export default function Footer(){
    return(
        <>
        <section className={"containerFooter"}>
        <Social />
            <UsefulLinks />
        </section>
        </>
    )
}

