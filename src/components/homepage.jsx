import React, { useState } from "react";


import { Navbar } from './navbar';
import { Base } from './base';
import { StatsDashboard } from './stats-dashboard';
import { TourPackages } from './tour-packages';
import { Footer } from './footer';
import { FooterNew } from './footer-new';
import { ExploreDashboard } from './explore-dashboard';
import { LandingFormNext } from "./landing-form-new";


function HomePage() {
    // const [showLogin, setShowLogin] = useState(false)
    return(
        <div className="App">
            <Navbar />
            <Base />
            <LandingFormNext />
            <ExploreDashboard />
            {/* <Footer /> */}
            <StatsDashboard />
            <TourPackages />
            <FooterNew />
        </div>
    )
}

export default HomePage;