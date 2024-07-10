import './App.css';
import RoutesWrapper from './routes';
import { BrowserRouter } from 'react-router-dom';
import  {Provider} from 'react-redux'

import {store} from './redux/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
      <RoutesWrapper/>
      </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
