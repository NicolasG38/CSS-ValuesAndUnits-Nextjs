import './Form.css'
export default function Form(){
    return (
        <>
            <form className="form">
                <fieldset className={"formInputs"}>
                    <legend className={"formTitle"}>CONTACT</legend>
                    <label >
                        <input className={"formInput"} type="text" name="form-firstname" placeholder="Prénom" required={true} />
                    </label>
                    <label>
                        <input className={"formInput"} type={"text"} name="form-lastname" placeholder="Nom" required={true} />
                    </label>
                    <label>
                        <input className={"formInput"} type="email" name="form-email" placeholder="Courriel" required={true} />
                    </label>
                    <label>
                        <textarea className={"formTextarea"} name="form-message" placeholder="Message" required={true} />
                    </label>
                    <button type="submit" className={"formSubmit"}>Envoyer !</button>
                </fieldset>
            </form>
        </>
    )
}