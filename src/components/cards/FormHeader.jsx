// import chevronIcon from "../../assets/icons/chevron-up.svg"
import { ChevronUpIcon } from "@heroicons/react/24/outline"

export function FormHeader({ title, onClick, isCollapsed}) {
    return (
        <div className="form-header">
            <h2 className="form-title">{title}</h2>
            <button className="form-btn" onClick={onClick}>
                <div 
                    className={!isCollapsed 
                        ? "form-btn-arrow" 
                        : "form-btn-arrow active"
                    }
                >
                    <ChevronUpIcon />
                </div>
            </button>
        </div>
    )
}