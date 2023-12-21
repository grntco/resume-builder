export function Form({ children }) {
    return(
        <form className="form">
            <ul>
                {children}
            </ul>
            <button>Done</button>
            <button>Edit</button>
        </form>
    )
}