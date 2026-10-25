import { useEffect, useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Reviews from './components/Reviews';
import Skills from './components/Skills';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

// День: 07:00–21:00, у решту часу — ніч
function themeByTime() {
  const hour = new Date().getHours();
  return hour >= 7 && hour < 21 ? 'light' : 'dark';
}

function App() {
  const [theme, setTheme] = useState('light');

  // Автоматичний вибір теми при початковому завантаженні
  useEffect(() => {
    setTheme(themeByTime());
  }, []);

  // Застосування теми: клас "dark" на <body> (як у методичці)
  useEffect(() => {
    document.body.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

  return (
    <div className="min-h-screen bg-indigo-50 font-sans text-slate-700 transition-colors dark:bg-slate-900 dark:text-slate-200">
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <div className="mx-auto my-8 grid max-w-5xl gap-6 px-4 md:grid-cols-3">
        <main className="flex flex-col gap-6 md:col-span-2">
          <About />
          <Education />
          <Experience />
          <Reviews />
        </main>
        <Skills />
      </div>
      <ContactForm />
      <Footer theme={theme} />
    </div>
  );
}

export default App;
