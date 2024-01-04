// import chevronIcon from "../../assets/icons/chevron-up.svg"
import { ChevronUpIcon } from "@heroicons/react/24/outline"

export function FormHeader({ title, onClick, isCollapsed}) {
    return (
        <div className="form-header">
            <h2 className="form-title">{title}</h2>
            <button className="toggle-btn" onClick={onClick}>
                <div 
                    className={!isCollapsed 
                        ? "toggle-btn__arrow" 
                        : "toggle-btn__arrow active"
                    }
                >
                    <ChevronUpIcon className="icon"/>
                </div>
            </button>
        </div>
    )
}