import { Card } from './cards/Card';
import { Form } from './cards/Form';
import { Toolbar } from './cards/Toolbar';
import { Resume } from './Resume';
import { useState } from 'react';
import { resumeData } from '../resumeData';


export function MainContent() {
    const [updatedData, setUpdatedData] = useState(resumeData);

    return ( 
        <section className="main-content">
            <div className="cards-container">
                <Card><Toolbar /></Card>
                {
                    updatedData.map((form, formIndex) => {
                    return (
                        <Card key={formIndex}>
                            <Form 
                                data={updatedData} 
                                formIndex={formIndex}
                                form={form} 
                                handleInputChange={handleInputChange}
                                handleAddFieldset={handleAddFieldset}
                                handleDeleteFieldset={handleDeleteFieldset}
                            ></Form>
                        </Card>
                    )
                    })
                }
            </div>
            <div className="preview-container">
                <Resume data={updatedData}></Resume>
            </div>   
        </section>
    )

    function handleInputChange(e, currentForm, fieldsetIndex, inputIndex) {
        setUpdatedData((prevData) => {
            return prevData.map(form => {
                if (form === currentForm) {
                    return {
                        ...form,
                        fieldsets: form.fieldsets.map((fieldset, j) => {
                            if (fieldsetIndex === j) {
                                return [
                                    ...fieldset.slice(0, inputIndex),
                                    {
                                        ...fieldset[inputIndex],
                                        value: e.target.value,
                                    },
                                    ...fieldset.slice(inputIndex + 1),
                                ];
                            }
                            return fieldset;
                        }),
                    };
                }
                return form;
            })
        })
    }

    function handleAddFieldset(e, currentForm) {
        e.preventDefault();
        setUpdatedData((prevData) => {
            return prevData.map(form => {
                if (form === currentForm) {
                    const blankFieldset = form.fieldsets
                        .slice(0, 1)
                        .flat()
                        .map(input => ({ ...input, value: "" }));

                    return {
                        ...form,
                        fieldsets: [...form.fieldsets, blankFieldset]
                    }
                }
                return form;
            })
        })
    }
        
    function handleDeleteFieldset(e, currentForm) {
        e.preventDefault();
        setUpdatedData((prevData) => {
            return prevData.map(form => {
                if (form === currentForm) {
                    return {
                        ...form,
                        fieldsets: [...form.fieldsets.slice(0, form.fieldsets.length - 1)],
                    }
                }
                return form;
            })
        })
    }
}