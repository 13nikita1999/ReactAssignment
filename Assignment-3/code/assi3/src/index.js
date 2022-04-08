import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const data={
  Name:'Nikita Agarwal',
  EmployeeID: '27888191AGT',
  Time:'02:00',
  date:'06-04-2022',
  Email:'xxx.yy@email.nl',
  Phone:'+91-1234567891',
  Status:'In Progress',
  Door:'Mark',
  Img:'https://www.w3schools.com/howto/img_avatar.png',
  time2:'16:00',
};


ReactDOM.render(
  <React.StrictMode>
    <App data={data} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();