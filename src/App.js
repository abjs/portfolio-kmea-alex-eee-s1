import './App.css'
import mypic from './me.jpg'
import kmea from './kmea.jpg'
export default function App() {
  return (
    <div className="App">
      <h1>I AM ALEX SEBASTIAN</h1>
      <h2>About Me</h2>
      <p>BTECH student @KMEA Engineering College</p>
      <img src={mypic} alt="itzme" />
      <h3>EDUCATION</h3>
      <br/>
      <p>
        I completed my high school education at Little Flower High School,
        Panayikulam. I pursued my higher secondary education in science stream
        from GHSS N. Edappally. Currently I am pursuing my degree in Electrical
        and Electronics Engineering from KMEA Engineering College Edathala,
        Aluva.
      </p>
      <img src={kmea} alt="College" />
      <h4>ACHIEVEMENTS</h4>
      <p>
        •Member of hacklub •Participated in State Zonal Handball Competition
        •Medalled in sub district level Triple jump competition
      </p>
      <h5>HOBBIES</h5>
      <footer>♤TRAVELLING♤ ●PLAYING FOOTBALL● </footer>
    </div>
  );
}
