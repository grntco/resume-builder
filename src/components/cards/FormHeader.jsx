import chevronIcon from "../../assets/icons/chevron-up.svg"

export function FormHeader({ title, onClick, isCollapsed}) {
    return (
        <div className="form-header">
            <h2 className="form-title">{title}</h2>
            <button className="form-btn" onClick={onClick}>
                <img 
                    src={chevronIcon}
                    className={!isCollapsed 
                        ? "form-btn-arrow" 
                        : "form-btn-arrow active"
                    }
                />
            </button>
        </div>
    )
}