import Aboutus from './components/Aboutus';
import Ielts from './components/Ielts';
import Enquiry from './components/Enquiry';
import ContactUsPage from './components/ContactUsPage';
import CountriesDetail from './components/CountriesDetail'
import Dashboard from './components/Dashboard'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Student from './components/Student';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route>
            <Route  path="/" element={<Dashboard />} />
            <Route path="/Aboutus" element={<Aboutus />} />
            <Route path="/Exploredestination" element={<Student />} />
            <Route path="/Ielts" element={<Ielts />} />
            <Route path="/Enquiry" element={<Enquiry />} />
            <Route path="/Gallery" element={<ContactUsPage />} />
            <Route path="/Contact" element={<CountriesDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
