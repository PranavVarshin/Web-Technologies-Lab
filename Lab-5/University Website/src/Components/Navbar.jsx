import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";

function Navbar() {

    const aboutItems = [
        {
            name: "Vision & Mission",
            path: "/about/vision-mission"
        },
        {
            name: "Leadership",
            path: "/about/leadership"
        },
        {
            name: "Departments",
            path: "/about/departments"
        }
    ];


    const academicItems = [
        {
            name: "Undergraduate",
            path: "/academics/undergraduate"
        },
        {
            name: "Postgraduate",
            path: "/academics/postgraduate"
        },
        {
            name: "PhD",
            path: "/academics/phd"
        }
    ];


    const admissionItems = [
        {
            name: "Eligibility",
            path: "/admissions/eligibility"
        },
        {
            name: "Application Process",
            path: "/admissions/application-process"
        },
        {
            name: "Important Dates",
            path: "/admissions/important-dates"
        }
    ];


    const researchItems = [
        {
            name: "Research Areas",
            path: "/research/areas"
        },
        {
            name: "Publications",
            path: "/research/publications"
        }
    ];


    return (

        <nav className="navbar">

            <div className="logo">
                Shiv Nadar University
            </div>


            <div className="nav-links">

                <Link to="/">
                    Home
                </Link>


                <Dropdown
                    title="About Us"
                    items={aboutItems}
                />


                <Dropdown
                    title="Academics"
                    items={academicItems}
                />


                <Dropdown
                    title="Admissions"
                    items={admissionItems}
                />

                <Link to="/Research">
                    Research
                </Link>

                <Link to="/campus-life">
                    Campus Life
                </Link>


                <Link to="/placements">
                    Placements
                </Link>


                <Link to="/contact">
                    Contact Us
                </Link>

            </div>

        </nav>
    );
}

export default Navbar;