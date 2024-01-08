import { Card } from './cards/Card';
import { Form } from './cards/Form';
import { Toolbar } from './cards/Toolbar';
import { Resume } from './Resume';
import { useState } from 'react';

export function MainContent( { data } ) {
    const [updatedData, setUpdatedData] = useState(data);

    return ( 
        <section className="main-content">
            <div className="cards-container">
                <Card>
                    <Toolbar />
                </Card>
                {
                    updatedData.map((form, formIndex) => {
                    return (
                        <Card key={formIndex}>
                            <Form 
                                data={updatedData} 
                                formIndex={formIndex}
                                // form={updatedData(formIndex)} 
                                handleInputChange={handleInputChange}
                                handleAddFieldset={handleAddFieldset}
                            ></Form>
                        </Card>
                    )
                    })
                }
                <Card>
                    <button className='default-btn'>Display</button>
                </Card>
            </div>
            <div className="preview-container">
                <Resume data={updatedData}></Resume>
            </div>   
        </section>
    )

    function handleInputChange(e, formIndex, fieldsetIndex, inputIndex) {
        setUpdatedData((prevData) => {
            return prevData.map((form, i) => {
                if (formIndex === i) {
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
            if (currentForm.fieldsets.length < currentForm.fieldsetLimit) {
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
            }
            return prevData;
        })

        // setUpdatedData((prevData) => {
        //     if (prevData[formIndex].fieldsets.length < prevData[formIndex].fieldsetLimit)
        //         return prevData.map((form, i) => {
        //             if (formIndex === i) {
        //                 const blankFieldset = form.fieldsets[0];
        //                 blankFieldset.map(input => input.value = "")

        //                 return {
        //                     ...form,
        //                     fieldsets: [...form.fieldsets, blankFieldset]
        //                 }
        //             }
        //             return form;
        //         })

        //     return prevData;
        // })

    }
        
        // if (fieldsetList.length < data[formIndex].fieldsetLimit) {
        //     setFieldsetList([...fieldsetList, ...data[formIndex].fieldsets])
        // }
}