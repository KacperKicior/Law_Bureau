import React from 'react';

function Navbar() {
    return (
        <nav id={"navbar"} className="fixed top-0 left-0 w-full z-50 flex justify-end gap-4 px-6 py-4">
            <h1 className="text-2xl font-bold" id="navbar-title">
            </h1>
            <button className={"btn btn-sm"}>
                PL
            </button>
        </nav>
    );
}

export default Navbar;
