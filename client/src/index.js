import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Rain from './purplerain';
import Counter from './counter';
import PropsEx from './propsEx'; 
import TextAppear from './textAppear';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Rain />
    <Counter/>
    <PropsEx name='Benny' lastname='Mendoza' text='is the dopest developer'/>
    <TextAppear/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
