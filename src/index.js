import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const App = () => {

    return (
        <div>
        <h1>Hello there World!</h1>
        <p>Ever since I was a young boy I said "Hello World"</p>
        </div>
    )
}
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
