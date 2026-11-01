import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-800 font-sans">
      <Header />
      <div className="mx-auto my-8 grid max-w-5xl gap-6 px-4 md:grid-cols-3">
        <main className="flex flex-col gap-6 md:col-span-2">
          <About />
          <Education />
          <Experience />
        </main>
        <Skills />
      </div>
      <Footer />
    </div>
  );
}

export default App;
