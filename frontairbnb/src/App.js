import './App.css';
import imageCard from './Assets/Images/imageHome.jpg'

function App() {
  return (
    <div className="App">
      <h1>Salut les amis</h1>
      <div className="container">
        <div className="card" >
          <div className="card-image">
            <img src={imageCard} alt="sary"/>
            <span className="card-title">AirBnB Tech JS</span>
          </div>

          <div className="card-time">
            <p>Salut les amis, bienvenu sur notre plateforme de developpement de AirBnB</p>
            <p>Bon developpement ;)</p>
            <ol>
              <li>Sidonie</li>
              <li>Lionel</li>
              <li>Hery</li>
              <li>Thierry</li>
              De:
              <li>Iangolana</li>
            </ol>
          </div>

          <p>test commit</p>
        </div>
      </div>
    </div>
  );
}

export default App;
