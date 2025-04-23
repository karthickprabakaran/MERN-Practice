const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];
import img from './assets/components.png';

import { CORE_CONCEPTS } from './assets/data.js';

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  return (
    <header>
      <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        Fundamental React concepts you will need for almost any app you are going to build!
      </p>
    </header>
  );
}

function Coreconcept({image,title,description}){
  return (

    <li>
      <h3>{title}</h3>
      <p>{description}</p>
      <img src={image} alt="" />
    </li>
  );
}

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