"use client";
import React from "react";
import Sidebar from "./sidebar";

function Navbar() {
    const [toggle, setToggle] = React.useState(false);

    return (
        <section className="relative">
            <nav className="h-14  text-xl flex justify-around items-center">
                <div className="" onClick={() => setToggle(!toggle)}>
                    PS
                </div>
                <div className="flex justify-between w-[20%]">
                    <div className="">About</div>
                    <div className="">Contact</div>
                </div>
            </nav>
            <Sidebar toggle={toggle} setToggle={setToggle} />
        </section>
    );
}

export default Navbar;
