import default_avatar_light from '../imgs/default_avatar_light.webp'
import default_avatar_dark from '../imgs/default_avatar_dark.png'
import React, { useContext } from 'react';

const translations = {
    EN: {
        TheTeam:"The Team",
        ManagingPartner:"Managing Partner",
        Partner:"Partner",
        SeniorAssociate:"Senior Associate",
        Associate:"Associate",
        LegalIntern:"Legal Intern"
    },
    PL: {
        TheTeam:"Zespół",
        ManagingPartner:"Wspólnik Zarządzający",
        Partner:"Wspólnik",
        SeniorAssociate:"Aplikant",
        Associate:"Radca",
        LegalIntern:"Stażysta Prawniczy"
    }
};
function Team({language}){
    const team = translations[language];
    return(
        <section className={'bg-slate-100 dark:bg-zinc-950'}>
            <div className={"grid grid-cols-1 lg:grid-cols-1 gap-8 px-4 py-16 mx-auto max-w-screen-xl lg:h-screen"}>
                <div
                    className={"grid grid-cols-1 lg:grid-cols-4 grid-rows-2 gap-4 flex-col h-full rounded-lg bg-slate-200 dark:bg-zinc-900 dark:text-slate-100 dark:border-slate-100 p-4 lg:col-span-1 text-xl border-2 border-black"}>
                    <h3 className="flex font-extrabold text-6xl lg:col-span-4 row-end-1 px-4">{team.TheTeam}</h3>
                    <div
                        className={"flex dark:hidden flex-col p-4 lg:col-span-1 text-xl rounded-lg hover:border-black hover:border-2"}>
                        <img src={default_avatar_light} alt={'John Doe'} className={'object-fill'}/>
                        <h5 className={'font-bold'}>Mick Haller</h5>
                        <h6>{team.ManagingPartner}</h6>
                    </div>
                    <div
                        className={"hidden dark:flex flex-col p-4 lg:col-span-1 text-xl rounded-lg hover:border-slate-100 hover:border-2"}>
                        <img src={default_avatar_dark} alt={'John Doe'} className={'object-fill'}/>
                        <h5 className={'font-bold'}>Mick Haller</h5>
                        <h6>{team.ManagingPartner}</h6>
                    </div>
                    <div
                        className={"flex dark:hidden flex-col p-4 lg:col-span-1 text-xl rounded-lg hover:border-black hover:border-2"}>
                        <img src={default_avatar_light} alt={'Arthur Morgan'} className={'object-fill'}/>
                        <h5 className={'font-bold'}>Vinny Gambini</h5>
                        <h6>{team.SeniorAssociate}</h6>
                    </div>
                    <div
                        className={"hidden dark:flex flex-col p-4 lg:col-span-1 text-xl rounded-lg hover:border-slate-100 hover:border-2"}>
                        <img src={default_avatar_dark} alt={'Arthur Morgan'} className={'object-fill'}/>
                        <h5 className={'font-bold'}>Vinny Gambini</h5>
                        <h6>{team.SeniorAssociate}</h6>
                    </div>
                    <div
                        className={"flex dark:hidden flex-col p-4 lg:col-span-1 text-xl rounded-lg hover:border-black hover:border-2"}>
                        <img src={default_avatar_light} alt={'James McGill'} className={'object-fill'}/>
                        <h5 className={'font-bold'}>James McGill</h5>
                        <h6>{team.Associate}</h6>
                    </div>
                    <div
                        className={"hidden dark:flex flex-col p-4 lg:col-span-1 text-xl rounded-lg hover:border-slate-100 hover:border-2"}>
                        <img src={default_avatar_dark} alt={'James McGill'} className={'object-fill'}/>
                        <h5 className={'font-bold'}>James McGill</h5>
                        <h6>{team.Associate}</h6>
                    </div>
                    <div
                        className={"flex dark:hidden flex-col p-4 lg:col-span-1 text-xl rounded-lg hover:border-black hover:border-2"}>
                        <img src={default_avatar_light} alt={'Kevin Lomax'} className={'object-fill'}/>
                        <h5 className={'font-bold'}>Kevin Lomax</h5>
                        <h6>{team.Associate}</h6>
                    </div>
                    <div
                        className={"hidden dark:flex flex-col p-4 lg:col-span-1 text-xl rounded-lg hover:border-slate-100 hover:border-2"}>
                        <img src={default_avatar_dark} alt={'Kevin Lomax'} className={'object-fill'}/>
                        <h5 className={'font-bold'}>Kevin Lomax</h5>
                        <h6>{team.Associate}</h6>
                    </div>

                    <div
                        className={"flex dark:hidden flex-col p-4 lg:col-span-1 text-xl rounded-lg hover:border-black hover:border-2"}>
                        <img src={default_avatar_light} alt={'Rudy Baylor'} className={'object-fill'}/>
                        <h5 className={'font-bold'}>Rudy Baylor</h5>
                        <h6>{team.LegalIntern}</h6>
                    </div>
                    <div
                        className={"hidden dark:flex flex-col p-4 lg:col-span-1 text-xl rounded-lg hover:border-slate-100 hover:border-2"}>
                        <img src={default_avatar_dark} alt={'Rudy Baylor'} className={'object-fill'}/>
                        <h5 className={'font-bold'}>Rudy Baylor</h5>
                        <h6>{team.LegalIntern}</h6>
                    </div>
                    <div
                        className={"flex dark:hidden flex-col p-4 lg:col-span-1 text-xl rounded-lg hover:border-black hover:border-2"}>
                        <img src={default_avatar_light} alt={'Daniel Kaffe'} className={'object-fill'}/>
                        <h5 className={'font-bold'}>Daniel Kaffe</h5>
                        <h6>{team.LegalIntern}</h6>
                    </div>
                    <div
                        className={"hidden dark:flex flex-col p-4 lg:col-span-1 text-xl rounded-lg hover:border-slate-100 hover:border-2"}>
                        <img src={default_avatar_dark} alt={'Daniel Kaffe'} className={'object-fill'}/>
                        <h5 className={'font-bold'}>Daniel Kaffe</h5>
                        <h6>{team.LegalIntern}</h6>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Team