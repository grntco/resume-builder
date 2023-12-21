import '../styles/App.css';
import { Card } from './Card';
import { Form } from './Form';
import { TextInput } from './TextInput';
import { Resume } from './Resume';
import { Header } from './Header';
import { Footer } from './Footer';

export function App() {
  return (
    <div className="app">
      <Header />
      <section className="main-content">
        <div className="controls-container">
          <div className="toolbar">
            <button>Toggle Preview</button>
            <button>Download as PDF</button>
          </div>
          <Card title="Personal Details">
            <Form>
              <TextInput label="Full Name"></TextInput>
              <TextInput label="Email"></TextInput>
              <TextInput label="Phone Number"></TextInput>
              <TextInput label="Location"></TextInput>
            </Form>
          </Card>
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
