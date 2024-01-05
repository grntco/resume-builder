import { Card } from './cards/Card';
import { Form } from './cards/Form';
import { Toolbar } from './cards/Toolbar';
import { Resume } from './Resume';

export function MainContent( { data } ) {
    return ( 
        <section className="main-content">
            <div className="cards-container">
                <Card>
                    <Toolbar />
                </Card>
                {
                    data.map((form, formIndex) => {
                    return (
                        <Card key={formIndex}>
                        <Form data={data} formIndex={formIndex} />
                        </Card>
                    )
                    })
                }
                <Card>
                    <button className='default-btn'>Display</button>
                </Card>
            </div>
            <div className="preview-container">
                <Resume></Resume>
            </div>   
        </section>
    )
}