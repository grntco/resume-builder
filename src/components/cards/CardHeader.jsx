import chevronIcon from "../../assets/icons/chevron-up.svg"
import "../../styles/Card.css";

export function CardHeader({ title, onClick, isCollapsed}) {
    return (
        <div className="card-header">
            <h2 className="card-title">{title}</h2>
            <button className="card__toggle-btn" onClick={onClick}>
                <img 
                    src={chevronIcon}
                    className={!isCollapsed 
                        ? "card__toggle-btn-arrow" 
                        : "card__toggle-btn-arrow active"
                    }
                />
            </button>
        </div>
    )
}