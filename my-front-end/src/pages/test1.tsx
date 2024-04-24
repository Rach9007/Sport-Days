import React from 'react';
import SelectComponent from './test';
 // Importer le composant SelectComponent

const MyPage: React.FC = () => {
  const options = [
    { label: 'Page 1', href: '/page1' },
    { label: 'Page 2', href: '/page2#section3' },
    { label: 'Page 3', href: '/page3' }
  ];

  return (
    <div>
      <h1>Sélectionnez une page :</h1>
      <SelectComponent options={options} /> {/* Utiliser le composant SelectComponent avec les options */}
    </div>
  );
};

export default MyPage;
