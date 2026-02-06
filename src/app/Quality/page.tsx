import React from 'react';
import Navbar from "../../../componets/Navbar/Navbar";
import Footer from "../../../componets/Footer/Footer";
import Section01 from "../../../componets/Quality/Section01";
import Section02 from "../../../componets/Quality/Section02";
import Section03 from "../../../componets/Quality/Section03";
import Section04 from "../../../componets/Quality/Section04";
import Section05 from "../../../componets/Quality/Section05";
import Baner from "../../../componets/Quality/Baner";

export default function QualityPage() {
    return (
        <main>
            <Section01 />
            <Section02 />
            <Section03 />
            <Section04 />
            <Section05 />
            <Baner />
            <Footer />
        </main>
    );
}
