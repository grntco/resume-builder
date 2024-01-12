import { Card } from '../form/Card';
import { Form } from '../form/Form';
import { Resume } from '../resume/Resume';
import { useState } from 'react';
import { resumeData } from '../../resumeData';
import '../../styles/mediaQueries.css'

export function MainContent() {
    const [updatedData, setUpdatedData] = useState(resumeData);

    return ( 
        <section className="main-content">
            <div className="cards-container">
                {
                    updatedData.map((form, formIndex) => {
                    return (
                        <Card key={formIndex}>
                            <Form 
                                form={form}
                                handleUpdateForm={handleUpdateForm}
                            ></Form>
                        </Card>
                        )
                    })
                }
            </div>
            <div className="resume-container">
                <Resume data={updatedData}></Resume>
            </div>   
        </section>
    )

    function handleUpdateForm(e, currentForm, updateFunc, currentFieldset, inputIndex) {
        e.preventDefault();
        setUpdatedData((prevData) => {
            return prevData.map(form => {
                if (form === currentForm) {
                   return updateFunc(form, currentFieldset, inputIndex, e);
                }
                return form;
            })
        })
    }
}