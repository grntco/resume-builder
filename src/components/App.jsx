import '../styles/App.css';
import { Card } from './cards/Card';
import { Form } from './cards/Form';
import { Toolbar } from './cards/Toolbar';
import { Resume } from './Resume';
import { Header } from './Header';
import { Footer } from './Footer';

export function App() {
  return (
    <div className="app">
      <Header />
      <section className="main-content">
        <div className="cards-container">
          <Card>
            <Toolbar />
          </Card>
          <Card>
            <Form title="Personal Details" fieldsetLabels={["Full Name", "Email", "Phone Number", "Location"]} fieldsetLimit={1} />
          </Card>
          <Card>
            <Form title="Work Experience" fieldsetLabels={["Company", "Position", "Location", "Start Date", "End Date"]} fieldsetLimit={3}/>
          </Card>
          <Card>
            <Form title="Education" fieldsetLabels={["University", "Degree", "Location", "Start Date", "End Date"]} fieldsetLimit={3}/>
          </Card>
          <Card>
            <Form title="Skills & Languages" fieldsetLabels={["Skill"]} fieldsetLimit={10}/>
          </Card>
          <Card>
            <div className="btn-container">
              <button className='default-btn'>Display</button>
            </div>
          </Card>
        </div>
        <div className="preview-container">
          <Resume></Resume>
        </div>     
      </section>
      <Footer />
    </div>
  )
}
