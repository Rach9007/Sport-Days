import React, { useState } from 'react';

const ReservationPage = () => {
  const [selectedJetSki, setSelectedJetSki] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [reservationConfirmed, setReservationConfirmed] = useState(false);

  const jetSkis = [
    { id: '1', name: 'Jet Ski Standard', price: '100 €/heure' },
    { id: '2', name: 'Jet Ski Deluxe', price: '150 €/heure' },
    { id: '3', name: 'Jet Ski Sport', price: '120 €/heure' },
  ];

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log('Formulaire soumis avec succès :', { selectedJetSki, name, email, date, time });
    // Ajoutez ici la logique de réservation
    setReservationConfirmed(true); // Marquer la réservation comme confirmée
  };

  const handleConfirmReservation = () => {
    // Ajoutez ici la logique pour confirmer la réservation
    alert('Réservation confirmée avec succès!');
  };

  if (reservationConfirmed) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-3xl font-bold mb-6">Réservation Confirmée</h1>
        <p className="text-lg mb-4">Merci, votre réservation a été confirmée avec succès!</p>
        <button onClick={handleConfirmReservation} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Confirmer
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Réserver un Jet Ski</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="jetSki" className="block text-sm font-semibold mb-2">Type de Jet Ski :</label>
          <select id="jetSki" value={selectedJetSki} onChange={(e) => setSelectedJetSki(e.target.value)} className="border rounded w-full py-2 px-3">
            <option value="">Sélectionnez un type de Jet Ski</option>
            {jetSkis.map((jetSki) => (
              <option key={jetSki.id} value={jetSki.name}>
                {jetSki.name} - {jetSki.price}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-semibold mb-2">Nom :</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className="border rounded w-full py-2 px-3" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-semibold mb-2">Email :</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="border rounded w-full py-2 px-3" />
        </div>
        <div className="mb-4">
          <label htmlFor="date" className="block text-sm font-semibold mb-2">Date :</label>
          <input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} className="border rounded w-full py-2 px-3" />
        </div>
        <div className="mb-4">
          <label htmlFor="time" className="block text-sm font-semibold mb-2">Heure :</label>
          <input type="time" id="time" value={time} onChange={(e) => setTime(e.target.value)} className="border rounded w-full py-2 px-3" />
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded w-full">
          Réserver
        </button>
      </form>
      <div className="text-center mt-4">
        <button onClick={handleConfirmReservation} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-3 rounded">
          Confirmer la réservation
        </button>
      </div>
    </div>
  );
};

export default ReservationPage;

