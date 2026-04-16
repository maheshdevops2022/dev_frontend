import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Aboutus from "./about-us";
import ContactUs from "./contact-us";
import Header from "./components/header";
import Footer from "./components/footer";
import DevOpsTraining from "./devops-training-in-hyderabad";
import AzureTraining from "./azure-devops-training-in-hyderabad";
import DataScience from "./data-science-course-in-hyderabad";
import DataAnalytics from "./data-analytics-course-in-hyderabad";
import PowerBI from "./power-bi-training-in-hyderabad";
import FinOps from "./finops-training-in-hyderabad";
import PrivacyPolicy from "./privacy-policy";



function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={< Aboutus/>}/>
        <Route path="/devops-training-in-hyderabad" element={<DevOpsTraining/>}/>
        <Route path="/azure-devops-training-in-hyderabad" element={<AzureTraining/>}/>
        <Route path="/data-science-course-in-hyderabad" element={<DataScience/>}/>
        <Route path="/data-analytics-course-in-hyderabad" element={<DataAnalytics/>}/>
        <Route path="/power-bi-training-in-hyderabad" element={<PowerBI/>}/>
        <Route path="/finops-training-in-hyderabad" element={<FinOps/>}/>
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />

      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;