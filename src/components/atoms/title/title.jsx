import moment from 'moment';

const Title = () => {

  // GET CURRENT DATE
  const now = new Date();
  const today = moment(now).format('DD.MM.YYYY');

  // GET INVOICE NUMBER
  const date = moment(now).format('YYMMDD');
  const randomNumber = Math.floor(Math.random() * 1000);
  const randomNumberString = randomNumber.toString().padStart(4, '0');
  const invoiceNumber = `${date}${randomNumberString}`;

  return (
    <div className="title">
      <h1 className="title__invoice-number">Rechnung Nr. {invoiceNumber}</h1>
      <p className="title__metadata">Oberrüti, {today}</p>
    </div>
  );
};

export {
  Title
};