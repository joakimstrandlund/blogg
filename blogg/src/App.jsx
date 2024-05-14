import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import InformationPage from './pages/InformationPage';
import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage';
import ProfilePage from './pages/ProfilePage';
import { ProductProvider } from './context/ProductContext';
// import Login from './components/Login/Login';
// import Register from './components/Register/Register';
import PrivateRoutes from './components/PrivatesRoutes/PrivateRoutes';

const App = () => {
  return (
    <div className="app">
      <ProductProvider>
        <BrowserRouter>
          <NavBar />

          <Routes>
            {/* Gör länkarna privat tex om du är inloggad eller inte */}
            {/* <Route path="/" element={<PrivateRoute />} /> */}

            {/* <Route path="/login" element={login} */}
            {/* <Route path="/register" element={register} */}

            <Route path="/" element={<LandingPage />} />
            <Route path="/AboutPage" element={<AboutPage />} />
            <Route path="/InformationPage" element={<InformationPage />} />
            <Route path="/ProfilePage" element={<ProfilePage />} />
          </Routes>
        </BrowserRouter>
      </ProductProvider>
    </div>
  );
};

export default App;
