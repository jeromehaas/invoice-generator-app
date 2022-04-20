import { Creditor } from "components/molecules/creditor/creditor";
import { Debitor } from "components/molecules/debitor/debitor";
import { Logo } from 'components/atoms/logo/logo';
import { Title } from "components/atoms/title/title";
import { Positions } from 'components/molecules/positions/positions';
import React, { useState, useContext, useEffect } from 'react';
import { Context } from 'context/Provider';
import { HotKeys } from "react-hotkeys";
import { configure } from 'react-hotkeys';
import download from 'downloadjs';

const InvoiceForm = () => {

  const { state, setState } = useContext(Context);

  configure({
    ignoreTags: ['textarea']
  });

  const keyMap = {
    pressEnter: "command+shift+enter",
    pressCommandK: "command+shift+k"
  };

  const calculateTotal = () => {
    let total = 0;
    total += state.positions.form.total;
    state.positions.items.map((item) => total += item.total);
    setState({ ...state, positions: { form: state.positions.form, total: total, items: [...state.positions.items, { position: state.positions.items.length + 1, amount: state.positions.form.amount, description: state.positions.form.description, total: state.positions.form.total }] } })
  };

  const addPosition = () => {
    setState({ ...state, positions: { form: state.positions.form, total: state.positions.total, items: [...state.positions.items, { position: state.positions.items.length + 1, amount: state.positions.form.amount, description: state.positions.form.description, total: parseFloat(state.positions.form.total + "hello") }] } })
  };

  const requestDownload = async () => {
    const data = await fetch('http://localhost:3003/download', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      mode: 'cors',
    })
    const blob = await data.blob();
    download(blob, 'test.js');

  }

  const keyHandlers = {
    pressEnter: () => {
      addPosition();
      calculateTotal();
    },
    pressCommandK: () => {
      requestDownload();
    }
  };

  return (
    <HotKeys className='invoice-form' keyMap={keyMap} handlers={keyHandlers} allowChanges={true}>
      <Logo />
      <Creditor />
      <Debitor />
      <Title />
      <Positions />
    </HotKeys>
  );
}

export {
  InvoiceForm
};