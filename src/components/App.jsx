import '../styles/App.css';
import { Header } from './Header';
import { MainContent } from './MainContent';
import { Footer } from './Footer';

export function App() {
  return (
    <div className="app">
      <Header />
      <MainContent />
      <Footer />
    </div>
  )
}
