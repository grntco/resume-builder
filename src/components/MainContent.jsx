import { Card } from './Card';
import { Form } from './form/Form';
import { Resume } from './resume/Resume';
import { useState } from 'react';
import { resumeData } from '../resumeData';
import '../styles/mediaQueries.css'

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
                                data={updatedData} 
                                formIndex={formIndex}
                                form={form} 
                                handleInputChange={handleInputChange}
                                handleAddFieldset={handleAddFieldset}
                                handleDeleteFieldset={handleDeleteFieldset}
                                handleAddResponsibility={handleAddResponsibility}
                                handleDeleteResponsibility={handleDeleteResponsibility}
                                handleTextAreaChange={handleTextAreaChange}
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
                        .map(input => {
                            if (input.label === "Responsibilities") {
                                return {...input, responsibilities: [""]}
                            }
                            return { ...input, value: "" }
                        });
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

    function handleAddResponsibility(e, currentForm, currentFieldset) {
        e.preventDefault();
        setUpdatedData((prevData) => {
            return prevData.map(form => {
                if (form === currentForm) {
                    return {
                        ...form,
                        fieldsets: form.fieldsets.map(fieldset => {
                            if (fieldset === currentFieldset) {
                                return fieldset.map(input => {
                                    if (input.label === "Responsibilities") {
                                        return {...input, responsibilities: [...input.responsibilities, ""] }
                                    }
                                    return input;
                                })
                            }
                            return fieldset;
                        })
                    }
                }
                return form;
            })
        })
    }

    function handleDeleteResponsibility(e, currentForm, currentFieldset) {
        e.preventDefault();
        setUpdatedData((prevData) => {
            return prevData.map(form => {
                if (form === currentForm) {
                    return {
                        ...form,
                        fieldsets: form.fieldsets.map(fieldset => {
                            if (fieldset === currentFieldset) {
                                return fieldset.map(input => {
                                    if (input.label === "Responsibilities") {
                                        return {...input, responsibilities: [...input.responsibilities.slice(0, input.responsibilities.length - 1)] }
                                    }
                                    return input;
                                })
                            }
                            return fieldset;
                        })
                    }
                }
                return form;
            })
        })
    }

    function handleTextAreaChange(e, currentForm, currentFieldset, responsibilityIndex) {
        e.preventDefault();
        setUpdatedData((prevData) => {
            return prevData.map(form => {
                if (form === currentForm) {
                    return {
                        ...form,
                        fieldsets: form.fieldsets.map(fieldset => {
                            if (fieldset === currentFieldset) {
                                return fieldset.map(input => {
                                    if (input.label === "Responsibilities") {
                                        return {...input, responsibilities: input.responsibilities.map((responsibility, i) => {
                                            if (i === responsibilityIndex) {
                                                responsibility = e.target.value;
                                            }
                                            return responsibility;
                                        })}
                                    } 
                                    return input;
                                })
                            }
                            return fieldset;
                        })
                    }
                }
                return form;
            })
        })
    }
}