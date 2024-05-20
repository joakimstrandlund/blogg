import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar';
import InformationPage from './pages/InformationPage';
import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage';
import ProfilePage from './pages/ProfilePage';
import { ArticleProvider } from './context/ArticleContext';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import PrivateRoutes from './components/PrivatesRoutes/PrivateRoutes';

const App = () => {
  return (
    <div className="app">
      {' '}
      <ArticleProvider>
        {' '}
        <BrowserRouter>
          <NavBar />{' '}
          <Routes>
            {/* Gör länkarna privat tex om du är inloggad eller inte */}
            {/* <Route path="/" element={<PrivateRoutes />} /> */}

            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />

            <Route path="/" element={<PrivateRoutes />}>
              <Route path="/" element={<LandingPage />} />
              <Route path="/AboutPage" element={<AboutPage />} />
              <Route path="/InformationPage" element={<InformationPage />} />
              <Route path="/ProfilePage" element={<ProfilePage />} />
            </Route>
          </Routes>{' '}
        </BrowserRouter>{' '}
      </ArticleProvider>
    </div>
  );
};

export default App;
