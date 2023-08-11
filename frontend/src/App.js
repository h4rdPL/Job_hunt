import './App.css';
import { Hero } from './Hero/Hero';
import { JobTemplate } from './JobTemplate/JobTemplate';
import { Navbar } from './Navbar/Navbar';

import "./style.css"

function App() {
  return (
    <>
    <Navbar />
    <Hero />
    <JobTemplate jobCategory="All"/>
    </>
  );
}

export default App;
