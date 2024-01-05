import '../styles/App.css';
import { Card } from './cards/Card';
import { Form } from './cards/Form';
import { Toolbar } from './cards/Toolbar';
import { Resume } from './Resume';
import { Header } from './Header';
import { Footer } from './Footer';
import { resumeData } from '../resumeData';

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
            <Form data={resumeData.personalDetails} />
          </Card>
          <Card>
            <Form data={resumeData.workExperience} fieldsetLimit={3}/>
          </Card>
          <Card>
            <Form data={resumeData.education} fieldsetLimit={2}/>
          </Card>
          <Card>
            <Form data={resumeData.skills} fieldsetLimit={15}/>
          </Card>
          <Card>
            <button className='default-btn'>Display</button>
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
