import ReactFullpage from '@fullpage/react-fullpage';
import Footer from './components/Footer';
import Titlecard from './components/Titlecard';
import Contact from './components/Contact';
import Content from './components/Content';
import Team from './components/Team';
import React from "react";
import { IoMoon } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";


function App() {
    const [dark, setDark] = React.useState(false);
    const [language, setLanguage] = React.useState('EN');
    const [animateTitle, setAnimateTitle] = React.useState(false);
    const [fullpageApi, setFullpageApi] = React.useState(null);

    React.useEffect(() => {
        const savedLanguage = localStorage.getItem('language');
        if (savedLanguage) {
            setLanguage(savedLanguage);
        }
    }, []);

    const languageToggleHandler = () => {
        const newLanguage = language === 'EN' ? 'PL' : 'EN';
        setLanguage(newLanguage);
        localStorage.setItem('language', newLanguage);
    };

    React.useEffect(() => {
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const savedTheme = localStorage.getItem('theme');

        if (savedTheme) {
            setDark(savedTheme === 'dark');
            document.body.classList.toggle('dark', savedTheme === 'dark');
        } else if (systemPrefersDark) {
            setDark(true);
            document.body.classList.add('dark');
        }
    }, []);

    const darkModeHandler = () => {
        const newTheme = !dark ? 'dark' : 'light';
        setDark(!dark);
        document.body.classList.toggle('dark', !dark);
        localStorage.setItem('theme', newTheme);
    };

    return (
        <>
            <nav
                className="fixed top-0 left-0 w-full z-50 h-screen pointer-events-none md:pointer-events-none transition-all duration-700"
            >
                <div
                    id="title-card-div"
                    className={`pointer-events-auto ${animateTitle ? 'div-animate' : ''}`}
                >
                    <h1
                        id="title-card-h1"
                        className="max-[600px]:text-6xl font-extrabold text-8xl dark:text-slate-100 text-outline-slate dark:text-outline-zinc cursor-pointer pointer-events-auto"
                        onClick={() => fullpageApi && fullpageApi.moveTo(1)}
                    >
                        LawBureau
                    </h1>
                </div>

                <div className="absolute top-0 right-0 flex gap-4 px-6 py-4 pointer-events-auto">
                    <button
                        className="btn btn-sm dark:bg-zinc-800 dark:text-slate-100"
                        onClick={languageToggleHandler}
                    >
                        {language}
                    </button>
                    <button
                        className="btn btn-sm dark:bg-zinc-800 dark:text-slate-100"
                        onClick={darkModeHandler}
                    >
                        {dark ? <IoSunny /> : <IoMoon />}
                    </button>
                </div>
            </nav>

            <ReactFullpage
                scrollingSpeed={700}
                onLeave={(origin, destination, direction) => {
                    if (origin.index === 0 && destination.index !== 0) {
                        setAnimateTitle(true);
                    }
                    if (origin.index !== 0 && destination.index === 0) {
                        setAnimateTitle(false);
                    }
                }}
                render={({ state, fullpageApi }) => {
                    setFullpageApi(fullpageApi);
                    return (
                        <div>
                            <div className="section h-screen">
                                <Titlecard />
                            </div>
                            <div className="section h-screen">
                                <Content language={language} />
                            </div>
                            <div className="section h-screen">
                                <Team language={language} />
                            </div>
                            <div className="section h-screen">
                                <Contact language={language} />
                            </div>
                            <div className="section">
                                <Footer language={language} />
                            </div>
                        </div>
                    );
                }}
            />
        </>
    );
}

export default App;
