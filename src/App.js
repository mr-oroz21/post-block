import React from 'react';
import './App.css'
import Comments from './Comments';
import Like from "./Like";
import Title from "./Title";


const App = () => {
    return (
        <div className="App">
            <div className="wrap">
                <div className="card">
                    <div className="card-image">
                        <img src="./sea.jpg" alt="surfing" />
                        <Title />
                        <Like />
                    </div>
                    <Comments />
                </div>
            </div>
        </div>
    );
};

export default App;
