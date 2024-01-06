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
                                handleInputChange={handleInputChange}
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


        // setUpdatedData(updatedData.map((form, i) => {
        //     if (formIndex === i) {
        //         return { ...form, fieldsets: form.fieldsets.map((fieldset, j) => {
        //             if (fieldsetIndex === j) {
        //                 return [...fieldset, fieldset.map((input, k) => {
        //                     if (inputIndex === k) {
        //                         console.log('hello');
        //                         return { ...input, value: e.target.value }
        //                     }
        //                 })]
        //             }
        //         })}
        //     }
        // }))
    }
}