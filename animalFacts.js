// Sample code for the animal factfinder from codecademy
import { animals } from './animals';
import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);

const images = [];
for (let animal in animals) {
  images.push(<img 
  key={animal}
  className='animal' 
  alt={animal} 
  src={animals[animal].image} 
  aria-label={animal} 
  role='button' 
  onClick={displayFact} />);
};

const background = <img className="background" alt="ocean" src="/images/ocean.jpg" />;
const showBackground = true;

const title = "";
const animalFacts = (
  <div>
    <h1>{title || "Click an animal for a fun fact"}</h1>
    {showBackground && background}
    <div className='animals'>{images}</div>
    <p id='fact'></p>
  </div>
    );

root.render(animalFacts);

function displayFact(e) {
  const animalName = e.target.alt;
  const randIndex = Math.floor(animals[animalName].facts.length * Math.random());
  const funFact = animals[animalName].facts[randIndex];
  const factDiv = document.getElementById('fact');
  factDiv.innerHTML = funFact;
}

