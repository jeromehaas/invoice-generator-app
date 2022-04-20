import 'styles/central.scss';
import { InvoiceForm } from 'components/pages/invoice-form/invoice-form';
import { Provider } from 'context/Provider';

function App() {
  
  return (
    <Provider>
      <div className="App">
        <InvoiceForm />
      </div>
    </Provider>
  );
}

export default App;
