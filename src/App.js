import React from 'react';
import './App.css'
import Like from "./Like";
import store from "./redux/store";

const App = () => {
  return (
      <div className="App">
          <div className="wrap">
              <div className="card">
                  <div className="card-image">
                      <img src="./sea.jpg" alt="surfing"/>
                      <Like store={store}/>
                  </div>
              </div>
          </div>
      </div>
  );
};

export default App;
