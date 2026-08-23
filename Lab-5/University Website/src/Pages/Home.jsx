function Home() {
    return (
        <div className="home">

            <section className="hero">

                <h1>
                    Welcome to Shiv Nadar University
                </h1>

                <p>
                    Empowering students through education,
                    innovation, research, and excellence.
                </p>

                <button className="hero-button">
                    Explore University
                </button>

            </section>


            <section className="welcome">

                <h2>
                    About Our University
                </h2>

                <p>
                    Our university provides a dynamic learning
                    environment that encourages academic excellence,
                    innovation, research, and holistic development.
                </p>

            </section>


            <section className="highlights">

                <div className="highlight-card">

                    <h3>🎓 Academics</h3>

                    <p>
                        Quality undergraduate, postgraduate,
                        and PhD programs.
                    </p>

                </div>


                <div className="highlight-card">

                    <h3>🔬 Research</h3>

                    <p>
                        Promoting innovation and impactful research.
                    </p>

                </div>


                <div className="highlight-card">

                    <h3>🏫 Campus Life</h3>

                    <p>
                        A vibrant and engaging campus experience.
                    </p>

                </div>


                <div className="highlight-card">

                    <h3>💼 Placements</h3>

                    <p>
                        Career opportunities with leading organizations.
                    </p>

                </div>

            </section>

        </div>
    );
}

export default Home;