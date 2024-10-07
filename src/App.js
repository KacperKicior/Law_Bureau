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
    const [dark,setDark] = React.useState(false);
    const [language,setLanguage] = React.useState('EN');

    React.useEffect(()=>{
        const savedLanguage = localStorage.getItem('language');
        if (savedLanguage){
            setLanguage(savedLanguage);
        }
    },[]);

    const languageToggleHandler = () => {
        const newLanguage = language === 'EN' ? 'PL' : 'EN';
        setLanguage(newLanguage);
        localStorage.setItem('language',newLanguage);
    }

    React.useEffect(()=>{
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark').matches;
        const savedTheme = localStorage.getItem('theme');

        if(savedTheme){
            setDark(savedTheme==='dark');
            document.body.classList.toggle('dark', savedTheme === 'dark');
        }else if(systemPrefersDark){
            setDark(true);
            document.body.classList.add('dark');
        }
    },[]);
    const darkModeHandler=()=>{
        const newTheme = !dark ? 'dark' : 'light';
        setDark(!dark);
        document.body.classList.toggle('dark',!dark);
        localStorage.setItem('theme',newTheme);
    };
    return (
        <>
            <nav id={"navbar"} className="fixed top-0 left-0 w-full z-50 flex justify-end gap-4 px-6 py-4">
                <h1 className="text-2xl font-bold" id="navbar-title">
                </h1>
                <button className={"btn btn-sm dark:bg-zinc-800 dark:text-slate-100"} onClick={languageToggleHandler}>
                    {language}
                </button>
                <button className={"btn btn-sm dark:bg-zinc-800 dark:text-slate-100"} onClick={() => darkModeHandler()}>{dark && <IoSunny/>}{!dark && <IoMoon/>}</button>
            </nav>
            <ReactFullpage
                scrollingSpeed={700}
                render={({state, fullpageApi}) => {
                    return (
                        <div>
                            <div className="section h-screen">
                                <Titlecard/>
                            </div>
                            <div className="section h-screen">
                                <Content language={language}/>
                            </div>
                            <div className="section h-screen">
                                <Team language={language}/>
                            </div>
                            <div className="section h-screen">
                                <Contact language={language}/>
                            </div>
                            <div className="section">
                                <Footer/>
                            </div>
                        </div>
                    );
                }}
            />
        </>
    );
}

export default App;
