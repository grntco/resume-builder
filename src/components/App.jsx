import '../styles/App.css';
import { Card } from './cards/Card';
import { Form } from './cards/Form';
import { TextInput } from './cards/TextInput';
import { Resume } from './Resume';
import { Header } from './Header';
import { Footer } from './Footer';
import { PersonalCard } from './cards/PersonalCard';

export function App() {
  return (
    <div className="app">
      <Header />
      <section className="main-content">
        <div className="cards-container">
          <Card>
            <div className="toolbar">
              <button>Toggle Preview</button>
              <button>Download as PDF</button>
            </div>
          </Card>
          <PersonalCard></PersonalCard>
          <Card title="Work Experience">
            <Form>
              <TextInput label="Company"></TextInput>
              <TextInput label="Position"></TextInput>
              <TextInput label="Location"></TextInput>
              <TextInput label="Start Date"></TextInput>
              <TextInput label="End Date"></TextInput>
            </Form>
            <button>Add Experience</button>
          </Card>
          <Card title="Education">
            <Form>
              <TextInput label="University"></TextInput>
              <TextInput label="Degree"></TextInput>
              <TextInput label="Location"></TextInput>
              <TextInput label="Start Date"></TextInput>
              <TextInput label="End Date"></TextInput>
            </Form>
            <button>Add Education</button>
          </Card>
          <Card title="Skills & Languages">
            <Form>
              <TextInput label="Skill"></TextInput>
            </Form>
            <button>Add Skill</button>
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
