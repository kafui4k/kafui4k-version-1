import React from 'react';
import './App.css';
import './assets/css/all.css'

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="hero">
          <h1 className="name"><strong>Kafui</strong> Alordo</h1>
          <span className="email"><a href="mailto:kalordo7@gmail.com">kalordo7@gmail.com</a></span>

          <h2 className="lead job-title">cross platform native web/mobile applications developer</h2>

          <h2 className="lead">
            find me online as <strong>kafui4k</strong>, 
            currently exploring the world of <i className="fab fa-osi"></i>pen Source
            <br></br>I push codes to <a href="https://github.com/kafui4k" target="blank"><i className="fab fa-github"></i> </a>
            follow on <a href="https://twitter.com/kafui4k" target="blank"><i className="fab fa-twitter"></i> </a>
            network on <a href="https://linkedin.com/Kafui Alordo" target="blank"><i class="fab fa-linkedin-in"></i> </a>
            and blog on <a href="https://medium.com/@kafui4k" target="blank"><i class="fab fa-medium"></i> </a>
          </h2>
        </div>
      </div>


      {/* <footer className="container">
        <span style="font-size: 16px;"> <i class="fas fa-greater-than-equal"></i>  read my <a href="#"><i class="fas fa-blog"></i></a> || check my resume <a href="#"><i class="fas fa-file"></i></a> || support me on patron <a href="#"><i class="fab fa-patreon"></i></a> || buy me a <a href="#"><i class="fas fa-mug-hot"></i></a></span>

      </footer> */}
    </div>
  );
}

export default App;
