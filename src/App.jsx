import React from 'react';
import Card from './Card';
import catImage from './cat.jpg'; // Import the image
import './App.css'; // Import the CSS file for App component

const App = () => {
  const cardData = [
    {
      image: catImage, // Use the imported image
      title: 'Cat',
      description: 'Cats can jump up to 6 times their height.',
    },
    {
      image: catImage, // Use the imported image
      title: 'Cat',
      description: 'Cats can jump up to 6 times their height.',
    },
    {
      image: catImage, // Use the imported image
      title: 'Cat',
      description: 'Cats can jump up to 6 times their height.',
    },
    {
      image: catImage, // Use the imported image
      title: 'Cat',
      description: 'Cats can jump up to 6 times their height.',
    },
    {
      image: catImage, // Use the imported image
      title: 'Cat',
      description: 'Cats can jump up to 6 times their height.',
    },
    {
      image: catImage, // Use the imported image
      title: 'Cat',
      description: 'Cats can jump up to 6 times their height.',
    },
    // Add more card objects as needed
  ];

  return (
    <div>
      {cardData.map((card, index) => (
        <Card
          key={index}
          image={card.image}
          title={card.title}
          description={card.description}
        />
      ))}
    </div>
  );
};

export default App;
