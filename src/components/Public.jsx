import { Link } from 'react-router-dom';

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>
                    Welcome to <span className="nowrap">Notebook App!</span>
                </h1>
            </header>
            <main className="public__main">
                <p>
                    Ankit's Repair Shop | Fatest Completer | Covers All Range Of
                    Problem
                </p>
                <address className="public__addr">
                    ankitsrepairshop999@gmail.com
                    <br />
                    <span>Visit Website</span>
                    <br />
                    <span>Linkdein</span>
                    <br />
                    9999999999
                </address>
                <br />
                <p>Owner: Ankit Kumar Mondal</p>
            </main>
            <footer>
                <Link to="/login">User Login</Link>
            </footer>
        </section>
    );
    return content;
};

export default Public;
