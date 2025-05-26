import './balises.css'



export default function BalisesMain(){
    return(
        <>
        <section className="sectionMain">
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
                        <th scope="row">&lt;!DOCTYPE></th>
                        <td>Détermine le type du document</td>
                    </tr>
                    <tr key="2">
                        <th>&lt;html></th>
                        <td>Permet de déterminer notre document HTML. <code>&lt;html></code> marque le début du document, elle sera fermer par une balise <code>&lt;/html></code></td>
                    </tr>
                    <tr key="3">
                        <th>&lt;head></th>
                        <td>C'est entre ces balises que tu déposes les métadonnées. Tu y trouveras des balises <code>&lt;title></code>, <code>&lt;meta></code>, <code>&lt;link></code>, ou encore <code>&lt;script></code>.  </td>
                    </tr>
                    <tr key="4">
                        <th>&lt;title></th>
                        <td>Cette balise donne un nom à ton site que tu retrouves dans l'onglet de ton navigateur. On y trouvera à proximité le favicon.  </td>
                    </tr>
                    <tr key="5">
                        <th>&lt;body></th>
                        <td>C'est le corps de la page HTML. Tous ce qui sera entre cette balise sera affiché sur la page. Cette balise est unique dans le document HTML</td>
                    </tr>
                    <tr key="6">
                        <th>&lt;header></th>
                        <td>Il s'agit du haut de la page. On n'y trouve en régle général, la nagivation, le logo de la marque, le bouton de connexion...</td>
                    </tr>
                    <tr key="7">
                        <th>&lt;nav></th>
                        <td>Entre ces balises tu placeras... la navigation de ton site.</td>
                    </tr>
                    <tr key="8">
                        <th>&lt;section></th>
                        <td>Permet de rassembler des balises ayant un sens sémantique.</td>
                    </tr>
                    <tr key="9">
                        <th>&lt;article></th>
                        <td>Représente un composition autonome dans une page. Il est destiné à être réutiliser de manière indépendente. exemple : un post de blog, un message de forum...  </td>
                    </tr>
                    <tr key="10">
                        <th>&lt;footer></th>
                        <td>Le footer se trouve en bas de page, il va rassembler tous les liens utiles pour l'utilisateur.</td>
                    </tr>

                    </tbody>
                </table>
            </section>
        </section>
        </>
    )
}