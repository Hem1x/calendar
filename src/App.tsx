import React, { useState } from 'react';
import './static/css/global.css';
import { formatDate } from './utils/helpers/date';
import { Calendar } from './components/Calendar/Calendar';

const App: React.FC = () => {
  const [selectedDate, selectDate] = useState(new Date());
  return (
    <div className="app__container">
      <div className="date__container">{formatDate(selectedDate, 'DD MM YYYY')}</div>
      <Calendar selectedDate={selectedDate} selectDate={selectDate} />
    </div>
  );
};

export default App;
