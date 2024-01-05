import '../styles/App.css';
import { Header } from './Header';
import { MainContent } from './MainContent';
import { Footer } from './Footer';
import { resumeData } from '../resumeData';

export function App() {
  return (
    <div className="app">
      <Header />
      <MainContent data={resumeData} />
      <Footer />
    </div>
  )
}
