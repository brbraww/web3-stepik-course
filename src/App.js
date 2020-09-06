import React from 'react';
import './App.css';

function App() {
    const handleAuthOnClick = () => {
        const authData = {data: 'Auth on my site'}
        const WavesKeeper = window.WavesKeeper
        if (WavesKeeper) {
            WavesKeeper.auth(authData).then(auth => {
                console.log(auth)
            }).catch(error => {
                console.error(error)
            })
        } else {
            alert('To Auth WavesKeeper should be installed.')
        }
    }
    return (
        <div className="App">
            <h1 className='mt-5'>
                WAVES
            </h1>
            <p>Simple React.js app</p>
            <button className='btn btn-outline-primary' onClick={() => {alert('Alert')}}>Alert</button>
            <button className='btn btn-primary' onClick={handleAuthOnClick}>Auth</button>
        </div>
    );
}

export default App;
