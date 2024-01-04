import { EyeIcon } from "@heroicons/react/24/outline"
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline"
import '../../styles/Toolbar.css'

export function Toolbar() {
    return (
        <div className="toolbar">
            <button className="toolbar__btn" title="Preview"><EyeIcon className="icon"/></button>
            <button className="toolbar__btn" title="Download as PDF"><ArrowDownTrayIcon className="icon"/></button>
        </div>
    )
}