import React from 'react';
import './static/css/global.css';
import { createYear } from './utils/helpers/date/createYear';

console.log(createYear({ locale: 'en-US' }).createYearMonthes());

const App: React.FC = () => {
  return <div className="app__container">App</div>;
};

export default App;
