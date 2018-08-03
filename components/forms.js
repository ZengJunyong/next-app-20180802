// https://magic.reactjs.net/htmltojsx.htm
// JSX is a bit different with HTML
function Form() {
    return (
        <form>
            <label>
                Name:
                <input type="text" name="name"/>
            </label>
            <input type="submit" defaultValue="Submit"/>
        </form>
    )
}

export default Form