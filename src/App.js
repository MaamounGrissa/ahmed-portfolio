import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AppRoutes from './routes';
import { Provider } from 'react-redux';
import { store } from './store';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
