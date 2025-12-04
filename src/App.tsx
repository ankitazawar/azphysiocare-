import Hero from './components/Hero';
import About from './components/About';
import Treatments from './components/Treatments';
import WhyChoose from './components/WhyChoose';
import Testimonials from './components/Testimonials';
import Location from './components/Location';
import FAQ from './components/FAQ';
import CallbackForm from './components/CallbackForm';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import StickyBar from './components/StickyBar';
import VisitCounter from './components/VisitCounter';
import { useVisitTracking } from './hooks/useVisitTracking';

function App() {
  useVisitTracking();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Treatments />
      <WhyChoose />
      <Testimonials />
      <CallbackForm />
      <Location />
      <FAQ />
      <VisitCounter />
      <Footer />
      <StickyBar />
    </div>
  );
}

export default App;
