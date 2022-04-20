import React, { useContext } from 'react';
import { Context } from 'context/Provider';

const Creditor = () => {

  const { state, setState } = useContext(Context);

  return (
    <div className="creditor">
      <p className="creditor__item" value="haas web solutions">{state.creditor.company}</p>
      <p className="creditor__item" value="haas web solutions">{state.creditor.street}</p>
      <p className="creditor__item" value="haas web solutions">{state.creditor.town}</p>
    </div >
  );
};

export {
  Creditor
};