import '../styles/Form.css'

export function Form({ children }) {
    return(
        <form className="form" autoComplete='off'>
            <ul className='form__inputs-container'>
                {children}
            </ul>
            {/* <button>Done</button>
            <button>Edit</button> */}
        </form>
    )
}