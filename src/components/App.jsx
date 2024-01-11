import '../styles/App.css';
import { Header } from './sections/Header';
import { MainContent } from './sections/MainContent';
import { Footer } from './sections/Footer';

export function App() {
  return (
    <div className="app">
      <Header />
      <MainContent />
      <Footer />
    </div>
  )
}
