import { EyeIcon } from "@heroicons/react/24/outline"
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline"
import '../../styles/Toolbar.css'
// import html2pdf from "../../../node_modules/html2pdf.js/dist/html2pdf.bundle.js"
import * as html2pdf from "html2pdf.js";


export function Toolbar() {
    return (
        <div className="toolbar">
            <button className="toolbar__btn" title="Preview"><EyeIcon className="icon"/></button>
            <button
                className="toolbar__btn"
                title="Download as PDF"
                onClick={handlePDFDownload}
            ><ArrowDownTrayIcon className="icon"/></button>
        </div>
    )

    function handlePDFDownload() {
        const resume = document.getElementById('resume')
        // const options = {
        //     // margin: 1,
        //     filename: 'resume.pdf',
        //     image:        { type: 'jpeg', quality: 0.98 },
        //     html2canvas:  { scale: 3 },
        //     jsPDF:        { format: 'letter' }
        // }

        html2pdf(resume)
    }
}