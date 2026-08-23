import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Academics from "./pages/Academics";
import Admissions from "./pages/Admissions";
import Research from "./pages/Research";
import CampusLife from "./pages/CampusLife";
import Placements from "./pages/Placements";
import Contact from "./pages/Contact";

import VisionMission from "./pages/VisionMission";
import Leadership from "./pages/Leadership";
import Departments from "./pages/Departments";

import Undergraduate from "./pages/Undergraduate";
import Postgraduate from "./pages/Postgraduate";
import PhD from "./pages/PhD";

import Eligibility from "./pages/Eligibility";
import ApplicationProcess from "./pages/ApplicationProcess";
import ImportantDates from "./pages/ImportantDates";

import ResearchAreas from "./pages/ResearchAreas";
import Publications from "./pages/Publications";


function App() {

    return (
        <div>

            <Navbar />

            <Routes>

                {/* MAIN PAGES */}

                <Route
                    path="/"
                    element={<Home />}
                />

                <Route
                    path="/about"
                    element={<About />}
                />

                <Route
                    path="/academics"
                    element={<Academics />}
                />

                <Route
                    path="/admissions"
                    element={<Admissions />}
                />

                <Route
                    path="/research"
                    element={<Research />}
                />

                <Route
                    path="/campus-life"
                    element={<CampusLife />}
                />

                <Route
                    path="/placements"
                    element={<Placements />}
                />

                <Route
                    path="/contact"
                    element={<Contact />}
                />


                {/* ABOUT US */}

                <Route
                    path="/about/vision-mission"
                    element={<VisionMission />}
                />

                <Route
                    path="/about/leadership"
                    element={<Leadership />}
                />

                <Route
                    path="/about/departments"
                    element={<Departments />}
                />


                {/* ACADEMICS */}

                <Route
                    path="/academics/undergraduate"
                    element={<Undergraduate />}
                />

                <Route
                    path="/academics/postgraduate"
                    element={<Postgraduate />}
                />

                <Route
                    path="/academics/phd"
                    element={<PhD />}
                />


                {/* ADMISSIONS */}

                <Route
                    path="/admissions/eligibility"
                    element={<Eligibility />}
                />

                <Route
                    path="/admissions/application-process"
                    element={<ApplicationProcess />}
                />

                <Route
                    path="/admissions/important-dates"
                    element={<ImportantDates />}
                />


                {/* RESEARCH */}

                <Route
                    path="/research/areas"
                    element={<ResearchAreas />}
                />

                <Route
                    path="/research/publications"
                    element={<Publications />}
                />

            </Routes>
           
            <Footer />
        </div>
    );
}

export default App;