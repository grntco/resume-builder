import '../styles/Header.css';
import { DocumentCheckIcon } from '@heroicons/react/24/outline';
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline"
import * as html2pdf from "html2pdf.js";

export function Header() {
    return(
        <header className="header">
            <div className="header__logo">
                <DocumentCheckIcon className="header__logo-icon" height={"1.4rem"}/>
                <h1 className="header__logo-text">Resume Builder</h1>
            </div>
            <button
                className="default-btn add-btn header__download-btn"
                title="Download as PDF"
                onClick={handlePDFDownload}
            >{window.innerWidth > 946 && "Download as PDF"}<ArrowDownTrayIcon className="icon"/></button>
        </header>
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