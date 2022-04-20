import React, { useState, createContext } from 'react';

const Context = createContext();

const Provider = ({ children }) => {

  const [state, setState] = useState({
    positions: {
      form: {
        position: '',
        amount: '',
        description: '',
        total: ''
      },
      items: [
        {
          position: '1',
          amount: '3 Stunden',
          description: 'Frontend Entwicklung',
          total: 300
        },
        {
          position: '2',
          amount: '8 Stunden',
          description: 'Backend Entwicklung',
          total: 800
        },
        {
          position: '3',
          amount: '1 Stunden',
          description: 'SEO (Onpage)',
          total: 300
        }
      ],
      total: 0
    },
    creditor: {
      company: 'haas web solutions',
      street: 'Bodenmatte 16a',
      town: '5647 Oberrüti',
      IBAN: ''
    },
    debitor: {
      company: '',
      street: '',
      town: ''
    }
  });

  return (
    <Context.Provider value={{ state, setState }}>
      {children}
    </Context.Provider>
  );

}

export {
  Provider,
  Context
};