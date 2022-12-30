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
                    Developed by Ankit Kumar Mondal | Front-end developer |
                    Problem Solver | Aspiring Full-stack developer
                </p>
                <address className="public__addr">
                    ankitkumarmondalofficial@gmail.com
                    <br />
                    <a
                        href="https://www.linkedin.com/in/ankit-kumar-mondal-60a531213"
                        target="_blank"
                        rel="noreferrer"
                        style={{ textDecoration: 'none' }}
                    >
                        Linkdein
                    </a>
                    <br />
                    <a
                        href="https://github.com/Devankit2022"
                        target="_blank"
                        rel="noreferrer"
                        style={{ textDecoration: 'none' }}
                    >
                        Github
                    </a>
                    <br />
                    8926085820
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
