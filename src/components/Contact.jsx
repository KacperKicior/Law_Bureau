import law_street_bright from '../imgs/Law_Street_Bright.PNG';
import law_street_dark from '../imgs/Law_Street_Dark.png';
import React, { useContext } from 'react';

const translations = {
    EN: {
        Contact:"Contact",
        Ifyoufeel:"If you feel we might be able to help you and you want to get us on your side, please contact us at ",
        andWeWill:"and we will get back as soon as possible.",
        Ifyouwould:"If you would like to join our team, please visit our",
        Carrers:"Carrers",
        page:"page.",
        Ifyouwant:"If you want to keep in touch and see what our team is up to, please follow us on ",
        Ifyouhave:"If you have any other questions, please contact us at ",
        Orcall:" or call ",
        Ouroffice:"Our office is in an iconic building Grzybowska Tower in downtown Radom, under the address:",
        Bureau:"Law Bureau L.L.C.",
        Address:"Grzybowska 24",
        Zipcode:"26-600 Radom",
        Country:"Poland"

    },
    PL: {
        Contact:"Kontakt",
        Ifyoufeel: "Jeśli uważasz, że możemy pomóc i chcesz mieć nas po swojej stronie, zapraszamy do kontaktu z nami na ",
        andWeWill: ", a my odpowiemy tak szybko, jak to będzie możliwe.",
        Ifyouwould: "Jeśli chcesz do nas dołączyć, zapraszamy na stronę ",
        Carrers: "Kariery",
        page: ".",
        Ifyouwant: "Jeśli chcesz pozostać z nami w kontakcie i śledzić nasze działania, zapraszamy na ",
        Ifyouhave: "Jeśli masz jakiekolwiek inne pytania, zapraszamy do kontaktu z nami na ",
        Orcall: " lub ",
        Ouroffice: "Nasze biuro znajduje się w centrum Radomia, w słynnym budynku Grzybowska Tower, pod adresem:",
        Bureau: "Law Bureau Sp.k.",
        Address: "Grzybowska 24",
        Zipcode: "26-600 Radom",
        Country: "Polska",
    }
};
function Contact({language}) {
    const contact = translations[language];
    return (
        <section className="bg-slate-100 dark:bg-zinc-950">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 px-4 py-24 mx-auto max-w-screen-xl lg:h-screen">
                <div
                    className="flex flex-col h-full rounded-lg bg-slate-200 dark:bg-zinc-900 dark:text-slate-100 p-4 lg:col-span-1 text-xl border-2 border-black dark:border-slate-100">
                    <h3 className="font-extrabold text-5xl mb-4">{contact.Contact}</h3>

                    <p className="mb-4">
                        {contact.Ifyoufeel}<a href="mailto:contact@lawbureau.com"
                              className="hover:text-blue-400 underline">contact@lawbureau.com</a>
                        {contact.andWeWill}
                    </p>
                    <p className="mb-4">
                        {contact.Ifyouwould}
                         <a href="/careers" className="hover:text-blue-400 underline">{contact.Carrers}</a>
                        {contact.page}
                    </p>
                    <p className="mb-4">
                        {contact.Ifyouwant}
                        <a href="https://linkedin.com/lawbureau" className="hover:text-blue-400 underline">LinkedIn</a>.
                    </p>
                    <p className="mb-4">
                        {contact.Ifyouhave}
                        <a href="mailto:contact@lawbureau.com" className="hover:text-blue-400 underline">contact@lawbureau.com</a>
                        {contact.Orcall}
                        <a href="tel:+48 665 620 093" className="hover:text-blue-400 underline">+48 665 620 093</a>.
                    </p>
                    <p className="mb-4">
                        {contact.Ouroffice}
                    </p>
                    <p>
                        {contact.Bureau}<br/>
                        {contact.Address}<br/>
                        {contact.Zipcode}<br/>
                        {contact.Country}
                    </p>
                </div>

                <div
                    className="lg:col-span-2 bg-gray-200 flex dark:hidden items-center justify-center h-full border-2 border-black dark:border-slate-100 rounded-lg">
                    <img src={law_street_bright} alt="Law Street" className="object-cover w-full h-full rounded-lg"/>
                </div>
                <div
                    className="lg:col-span-2 bg-gray-200 hidden dark:flex items-center justify-center h-full border-2 border-black dark:border-slate-100 rounded-lg">
                    <img src={law_street_dark} alt="Law Street" className="object-cover w-full h-full rounded-lg"/>
                </div>
            </div>
        </section>
    );
}

export default Contact;
