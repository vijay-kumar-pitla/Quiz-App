import React, { useState } from 'react';
import './Home.css';
import Java from './Java';
import Python from './Python';
import Cloud from './Cloud';
import SQL from './SQL';
import OOPs from './OOPs';
import Azure from './Azure';
import DataAnalysis from './DataAnalysis';
import Agile from './Agile';

const Home = () => {
  const [activeComponent, setActiveComponent] = useState(null);

  const handleClick = (component, e) => {
    e.preventDefault();  // Prevents page reload
    setActiveComponent(component);
  };

  return (
    <div className="home-container">
      <h1 className="quiz-title">Welcome to the Quiz App</h1>
      <p className="quiz-subtitle">Choose a topic to begin</p>

      <div className="button-container">
        <button className="quiz-button" onClick={(e) => handleClick('Java', e)}>Java</button>
        <button className="quiz-button" onClick={(e) => handleClick('Python', e)}>Python</button>
        <button className="quiz-button" onClick={(e) => handleClick('Cloud', e)}>Cloud</button>
        <button className="quiz-button" onClick={(e) => handleClick('SQL', e)}>SQL</button>
        <button className="quiz-button" onClick={(e) => handleClick('OOPs', e)}>OOPs</button>
        <button className="quiz-button" onClick={(e) => handleClick('Azure', e)}>Microsoft Azure</button>
        <button className="quiz-button" onClick={(e) => handleClick('DataAnalysis', e)}>Data Analysis</button>
        <button className="quiz-button" onClick={(e) => handleClick('Agile', e)}>Agile</button>
      </div>

      <div className="component-container">
        {activeComponent === 'Java' && <Java />}
        {activeComponent === 'Python' && <Python />}
        {activeComponent === 'Cloud' && <Cloud />}
        {activeComponent === 'SQL' && <SQL />}
        {activeComponent === 'OOPs' && <OOPs />}
        {activeComponent === 'Azure' && <Azure />}
        {activeComponent === 'DataAnalysis' && <DataAnalysis />}
        {activeComponent === 'Agile' && <Agile />}
      </div>
    </div>
  );
};

export default Home;
