import '../../styles/Form.css'

export function Form({ isCollapsed, children }) {
    {if (!isCollapsed) {
        return(
            <form className="form" autoComplete='off'>
                <ul className='form__inputs-container'>
                    {children}
                </ul>
            </form>
        )}
    }
}