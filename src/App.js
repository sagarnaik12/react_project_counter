import React from 'react'
import Counter from './components/Counter'
import Forms from './components/form'
import Classes from './components/Classes'
import IconButton from './components/IconButton'
import MaterialUI from './components/materialUIComponents'
import './App.css';
import { Box , Button } from '@material-ui/core';

function App() {

  const btnData = [
    { 
      title: 'Home',
      icon: 'fa fa-home',
      color: '#6F69AC'
  },
  { 
    title: 'Calender',
    icon: 'fa fa-calendar',
    color: '#95DAC1'
},
{ 
  title: 'Dashboard',
  icon: 'fa fa-bar-chart',
  color: '#FFEBA1'
},
{ 
  title: 'Health',
  icon: 'fa fa-heart-o',
  color: '#FD6F96'
}
  ]
  return (
    <div className="App">
      <div className="counter-container">
        <Counter />
      </div>
      
      <div className="btn-container">
        {btnData.map((btn) => (  
          <IconButton key={btn.title} buttonTitle={btn.title} icon={btn.icon} bgColor={btn.color}/>  
        ))}
      </div>

      <MaterialUI />

      <Forms />

      <Classes />
    </div>
  );
}

export default App;
