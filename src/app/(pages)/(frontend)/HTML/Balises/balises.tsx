import './balises.css'
import Image from "next/image";



export default function BalisesMain(){
    return(
        <>
        <section className="sectionMain">
            <Image className={"illustration"} src={"/images/HTML_structure.jpg"} alt={"HTML"} width={3533} height={4416} />
            <section className="BalisesStructure">
                <h2 className={"titleBalises"}>Les balises de structure en HTML</h2>
                <table className="table">
                    <thead className={"entete"}>
                        <tr className={"enteteTexte"}>
                            <th>Balise</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr key="1">
                            <th scope="row">&lt;!DOCTYPE&gt;</th>
                            <td>Détermine le type du document</td>
                        </tr>
                        <tr key="2">
                            <th>&lt;html&gt;</th>
                            <td>Permet de déterminer notre document HTML. <code>&lt;html&gt;</code> marque le début du document, elle sera fermer par une balise <code>&lt;/html&gt;</code></td>
                        </tr>
                        <tr key="3">
                            <th>&lt;head&gt;</th>
                            <td>C'est entre ces balises que tu déposes les métadonnées. Tu y trouveras des balises <code>&lt;title&gt;</code>, <code>&lt;meta&gt;</code>, <code>&lt;link&gt;</code>, ou encore <code>&lt;script&gt;</code>.  </td>
                        </tr>
                        <tr key="4">
                            <th>&lt;title&gt;</th>
                            <td>Cette balise donne un nom à ton site que tu retrouves dans l'onglet de ton navigateur. On y trouvera à proximité le favicon.  </td>
                        </tr>
                        <tr key="5">
                            <th>&lt;body&gt;</th>
                            <td>C'est le corps de la page HTML. Tous ce qui sera entre cette balise sera affiché sur la page. Cette balise est unique dans le document HTML</td>
                        </tr>
                        <tr key="6">
                            <th>&lt;header&gt;</th>
                            <td>Il s'agit du haut de la page. On n'y trouve en régle général, la nagivation, le logo de la marque, le bouton de connexion...</td>
                        </tr>
                        <tr key="7">
                            <th>&lt;nav&gt;</th>
                            <td>Entre ces balises tu placeras... la navigation de ton site.</td>
                        </tr>
                        <tr key="8">
                            <th>&lt;section&gt;</th>
                            <td>Permet de rassembler des balises ayant un sens sémantique.</td>
                        </tr>
                        <tr key="9">
                            <th>&lt;article&gt;</th>
                            <td>Représente un composition autonome dans une page. Il est destiné à être réutiliser de manière indépendente. exemple : un post de blog, un message de forum...  </td>
                        </tr>
                        <tr key="10">
                            <th>&lt;footer&gt;</th>
                            <td>Le footer se trouve en bas de page, il va rassembler tous les liens utiles pour l'utilisateur.</td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <section className={"section"}>
                <h2 className={"titleBalises"}>Les balises de structure de texte</h2>
                <table>
                    <thead className={"entete"}>
                        <tr className={"enteteTexte"}>
                            <th>Balise</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr key="11">
                            <th>&lt;h1&gt; à &lt;h6&gt; </th>
                            <td>Les balises h déterminent un titre. h1 étant le titre principal.</td>
                        </tr>
                        <tr key="12">
                            <th>&lt;p&gt;</th>
                            <td> Cet élément représente une paragraphe de texte. Ces paragraphes sont de tpye bloc</td>
                        </tr>
                        <tr key="13">
                            <th>&lt;br&gt;</th>
                            <td>Ce tag permet un saut de ligne</td>
                        </tr>
                        <tr key="14">
                            <th>&lt;hr&gt;</th>
                            <td>Élément de rupture thématique, il est utile pour séparer deux parapgraphe par une représentation visuelle. </td>
                        </tr>
                        <tr key="15">
                            <th>&lt;hr&gt;</th>
                            <td>Élément de rupture thématique, il est utile pour séparer deux parapgraphe par une représentation visuelle. </td>
                        </tr>
                    </tbody>
                    <thead className={"entete"}>
                        <tr>
                            <th className={"intersectionText"} scope={"row"} colSpan={2}>Styliser son texte avec des balises sémentiques</th>
                        </tr>
                    </thead>
                    <thead className={"entete"}>
                        <tr className={"enteteTexte"}>
                            <th>Balise</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr key="17">
                            <th>&lt;b&gt;</th>
                            <td>Cet élément permet d'attirer l'attention sur un mot en écrivant en <b>gras</b>, si vous souhaitez mettre du text en gras, préféré la balise <code>strong</code>.</td>
                        </tr>
                        <tr key="18">
                            <th>&lt;i&gt;</th>
                            <td>i comme... italique. Avec cette balise, votre texte sera écrit en <i>italique</i></td>
                        </tr>
                        <tr key="19">
                            <th>&lt;u&gt;</th>
                            <td>besoin de souligner du texte ? c'est <u>cette balise</u> qu'il faut utiliser !</td>
                        </tr>
                        <tr key="20">
                            <th>&lt;s&gt;</th>
                            <td>Vous avez écris quelques choses qui n'est plus d'actualité ? vous pourrez le barrer avec cette balise.
                                ex: <s>il fait chaud en été</s></td>
                        </tr>
                        <tr key="21">
                            <th>&lt;sup&gt;</th>
                            <td>Ce tag permet de mettre des exposants ex : 1 gogol : 10<sup>100</sup> </td>
                        </tr>
                        <tr key="22">
                            <th>&lt;sub&gt;</th>
                            <td>C'est l'inverse de sup ! sub mettera le texte comme indice. ex:H<sub>2</sub>O </td>
                        </tr>
                        <tr key="23">
                            <th>&lt;strong&gt;</th>
                            <td>À la différence de la balise <code>b</code>, la balise <code>strong</code> vous permet de mettre du texte en gras. </td>
                        </tr>
                        <tr key="24">
                            <th>&lt;em&gt;</th>
                            <td>Généralement utilisé pour mettre du texte en italique</td>
                        </tr>
                        <tr key="25">
                            <th>&lt;q&gt;</th>
                            <td>l'élément HTML <code>q</code> est utilisé pour mettre du text entre guillemets. <q>Idéal pour une courte citation</q> </td>
                        </tr>
                        <tr key="26">
                            <th>&lt;blockquote&gt;</th>
                            <td>Cette balise est utilisé pour englober du contenu texte de citation. Le texte est généralement affiché avec une indentation. </td>
                        </tr>
                        <tr key="27">
                            <th>&lt;balise&gt;</th>
                            <td>A rédiger</td>
                        </tr>
                    </tbody>
                    <thead className={"entete"}>
                    <tr>
                        <th className={"intersectionText"} scope={"row"} colSpan={2}>Styliser son texte avec des balises sémentiques</th>
                    </tr>
                    </thead>
                </table>
            </section>

            <section className={"section"}>
                <h2 className={"titleBalises"}>Créer des tableaux et des listes</h2>
                <table>
                    <thead className={"entete"}>
                    <tr className={"enteteTexte"}>
                        <th>Balise</th>
                        <th>Description</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr key="28">
                        <th>&lt;table&gt;</th>
                        <td>A rédiger</td>
                    </tr>
                    <tr key="29">
                        <th>&lt;caption&gt;</th>
                        <td>A rédiger</td>
                    </tr>
                    <tr key="30">
                        <th>&lt;tr&gt;</th>
                        <td>A rédiger</td>
                    </tr>
                    <tr key="31">
                        <th>&lt;td&gt;</th>
                        <td>A rédiger</td>
                    </tr>
                    <tr key="32">
                        <th>&lt;th&gt;</th>
                        <td>A rédiger</td>
                    </tr>

                    <tr key="33">
                        <th>&lt;balise&gt;</th>
                        <td>A rédiger</td>
                    </tr>
                    </tbody>
                </table>
            </section>
            <section className={"section"}>
                <h2 className={"titleBalises"}>Intégrer des médias !</h2>
                <table>

                </table>
            </section>
            <section className={"section"}>
                <h2 className={"titleBalises"}>Les balises pour créer formulaire</h2>
                <table>

                </table>
            </section>
        </section>
        </>
    )
}