import React, { useContext } from 'react';

// Define translations for both English and Polish
const translations = {
    EN: {
        whatWeDo: "What We Do",
        businessDisputes: "Business Disputes",
        businessDisputesDesc1: "We thrive on complicated cases requiring strategic planning, extraordinary care, and attention to detail.",
        businessDisputesDesc2: "The stellar track record of our team in high-stakes litigation and arbitration spans a range of industries in more than 90 projects across several hundred proceedings with a combined value of over EUR 100,000,000.",
        importantProjects: "Important Projects",
        importantProjectsDesc1: "Among our clients, we are known for getting things done. We assist businesses with the most challenging projects.",
        importantProjectsDesc2: "We draft and review key corporate and transactional documentation, implement compliance programmes, and supervise ongoing legal operations.",
        disputeAvoidance: "Dispute Avoidance",
        disputeAvoidanceDesc1: "We put our disputes pedigree to work by helping our clients navigate contentious threats facing their businesses.",
        disputeAvoidanceDesc2: "Enterprises entrust us with identifying and appraising risks in transactional, corporate, and commercial settings. All to be as certain as possible that they can avoid any unwanted trouble."
    },
    PL: {
        whatWeDo: "Czym się zajmujemy",
        businessDisputes: "Spory biznesowe",
        businessDisputesDesc1: "Specjalizujemy się w skomplikowanych sprawach wymagających strategicznego planowania, szczególnej troski i dbałości o szczegóły.",
        businessDisputesDesc2: "Doskonałe osiągnięcia naszego zespołu w sporach sądowych i arbitrażowych obejmują wiele branż, w ponad 90 projektach w ramach setek postępowań o łącznej wartości ponad 100 000 000 EUR.",
        importantProjects: "Ważne projekty",
        importantProjectsDesc1: "Nasi klienci wiedzą, że osiągamy wyniki. Pomagamy firmom w realizacji najbardziej wymagających projektów.",
        importantProjectsDesc2: "Przygotowujemy i weryfikujemy kluczową dokumentację korporacyjną i transakcyjną, wdrażamy programy zgodności i nadzorujemy bieżące operacje prawne.",
        disputeAvoidance: "Unikanie sporów",
        disputeAvoidanceDesc1: "Wykorzystujemy nasze doświadczenie w sporach, aby pomóc naszym klientom w zarządzaniu zagrożeniami związanymi z działalnością gospodarczą.",
        disputeAvoidanceDesc2: "Przedsiębiorstwa powierzają nam identyfikację i ocenę ryzyka w transakcjach, korporacyjnych i handlowych sytuacjach. Wszystko po to, aby jak najbardziej unikać niechcianych problemów."
    }
};

function Content({ language }) {
    const content = translations[language];

    return (
        <section className={'bg-slate-100 dark:bg-zinc-950'}>
            <div className={"grid grid-cols-1 lg:grid-cols-1 gap-8 px-4 py-32 mx-auto max-w-screen-xl lg:h-screen"}>
                <div className={"grid grid-cols-1 lg:grid-cols-3 gap-4 flex-col h-full rounded-lg bg-slate-200 p-4 lg:col-span-1 text-xl border-2 border-black dark:bg-zinc-900 dark:text-slate-100 dark:border-slate-100"}>
                    <h3 className="flex font-extrabold text-6xl lg:col-span-3 px-4">{content.whatWeDo}</h3>

                    <div className={"flex flex-col h-full p-4 lg:col-span-1 text-xl "}>
                        <h4 className="font-bold text-5xl mb-4">{content.businessDisputes}</h4>
                        <p className="mb-4">{content.businessDisputesDesc1}</p>
                        <p>{content.businessDisputesDesc2}</p>
                    </div>

                    <div className={"flex flex-col h-full rounded-lg p-4 lg:col-span-1 text-xl"}>
                        <h4 className="font-bold text-5xl mb-4">{content.importantProjects}</h4>
                        <p className="mb-4">{content.importantProjectsDesc1}</p>
                        <p>{content.importantProjectsDesc2}</p>
                    </div>

                    <div className={"flex flex-col h-full rounded-lg p-4 lg:col-span-1 text-xl"}>
                        <h4 className="font-bold text-5xl mb-4">{content.disputeAvoidance}</h4>
                        <p className="mb-4">{content.disputeAvoidanceDesc1}</p>
                        <p>{content.disputeAvoidanceDesc2}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Content;
