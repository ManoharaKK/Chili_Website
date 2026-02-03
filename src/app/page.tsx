import Image from "next/image";
import Brownbutton from "../../componets/Button/Brownbutton";
import Section01 from "../../componets/Home/Section01";
import Section02 from "../../componets/Home/Section02";
import Section03 from "../../componets/Home/Section03";
import Section04 from "../../componets/Home/Section04";
import Section05 from "../../componets/Home/Section05";
import Section06 from "../../componets/Home/Section06";
import Section07 from "../../componets/Home/Section07";
import Section08 from "../../componets/Home/Section08";
import Footer from "../../componets/Footer/Footer";
export default function Home() {
  return (
    <main>
      <Section01 />
      <Section02 />
      <Section03 />
      <Section04 />
      <Section05 />
      <Section06 />
      <Section07 />
      <Section08 />
      <Footer />
    </main>

  );
}
