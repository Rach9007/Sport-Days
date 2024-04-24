import React from 'react';
import { useRouter } from 'next/router'; // Importer useRouter pour gérer la navigation

interface Option {
  label: string;
  href: string;
}

interface Props {
  options: Option[];
}

const SelectComponent: React.FC<Props> = ({ options }) => {
  const router = useRouter();

  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = event.target.value;
    router.push(selectedOption); // Rediriger vers l'URL sélectionnée
  };

  return (
    <select onChange={handleOptionChange}>
      {options && options.map((option, index) => (
        <option key={index} value={option.href}>{option.label}</option>
      ))}
    </select>
  );
};

export default SelectComponent;
