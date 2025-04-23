const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];
import img from './assets/components.png';

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

function Coreconcept(props){
  return (

    <li>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <img src={props.img} alt="" />
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
            title = "first"
            description = "description of the first one"
            img = {img}
            />
            <Coreconcept 
            title = "second"
            description = "description of the second one"
            img = {img}
            />
            <Coreconcept 
            title = "third"
            description = "description of the third one"
            img = {img}
            />

          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;