const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];
import img from './assets/components.png';
import Header from './components/Header.jsx';
import Coreconcept from './components/CoreConcept.jsx';

import { CORE_CONCEPTS } from './assets/data.js';







function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <Coreconcept 
            {...CORE_CONCEPTS[0]}
            />
            <Coreconcept 
            {...CORE_CONCEPTS[1]}
            />
            <Coreconcept 
            {...CORE_CONCEPTS[2]}
            />

          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;