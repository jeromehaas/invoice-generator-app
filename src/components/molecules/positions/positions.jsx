import React, { useState, useContext, useEffect } from 'react';
import { Context } from 'context/Provider';
import { HotKeys } from "react-hotkeys";

const Positions = () => {

  const { state, setState } = useContext(Context);

  return (

    <div className="positions">
      <table className="positions__table">

        <thead>
          <tr>
            <th>Position</th>
            <th>Anzahl</th>
            <th>Beschriebung</th>
            <th className="align-right">Total</th>
          </tr>
        </thead>

        <tbody>
          {state.positions.items.map((item, index) => (
            <tr key={index}>
              <td>{item.position}</td>
              <td>{item.amount}</td>
              <td>{item.description}</td>
              <td className="align-right"> CHF {item.total}</td>
            </tr>
          ))}
          {state.positions.form && (
            <tr>
              <td>{state.positions.items.length + 1}</td>
              <td><input type="text" value={state.positions.form.amount} onChange={(event) => setState({ ...state, positions: { ...state.positions, form: { ...state.positions.form, amount: event.target.value } } })} /></td>
              <td><input type="text" value={state.positions.form.description} onChange={(event) => setState({ ...state, positions: { ...state.positions, form: { ...state.positions.form, description: event.target.value } } })} /></td>
              <td className="align-right"><input className="align-right" type="number" value={state.positions.form.total} onChange={(event) => setState({ ...state, positions: { ...state.positions, form: { ...state.positions.form, total: parseInt(event.target.value) } } })} /></td>
            </tr>
          )}
        </tbody>

        <tfoot>
          <tr>
            <td className="bold"></td>
            <td className="bold"></td>
            <td className="bold">Rechnungstotal</td>
            <td className="bold align-right">CHF {state.positions.total}</td>
          </tr>
          <tr>
            <td colSpan="4" className="small align-right">* nicht mehrwertsteuerpflichtig</td>
          </tr>
        </tfoot>

      </table>
    </div >
  );
};

export {
  Positions
};