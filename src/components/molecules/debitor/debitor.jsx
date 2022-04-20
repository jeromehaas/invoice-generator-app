const Debitor = () => {
  return (
    <div className="debitor">
      <input className="debitor__input" readOnly type="text" name="debitor__company" value="haas web solutions" />
      <input className="debitor__input" readOnly type="text" name="debitor__street" value="Bodenmatte 16a" />
      <input className="debitor__input" readOnly type="text" name="debitor__town" value="5647 Oberrüti" />
    </div>
  );
};

export {
  Debitor
};