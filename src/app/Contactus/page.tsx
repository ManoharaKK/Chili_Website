import React from 'react'
import Image from 'next/image'
import Brownbutton from '../../../componets/Button/Brownbutton'
import Section01 from '../../../componets/Contactus/Section01'
import Section02 from '../../../componets/Contactus/Section02'
import Section03 from '../../../componets/Contactus/Section03'
import Section04 from '../../../componets/Contactus/Section04'
import Footer from '../../../componets/Footer/Footer'
function page() {
  return (
    <main>
      <Section01 />
      <Section02 />
      <Section03 />
      <Section04 />
      <Footer />
    </main>
  )
}

export default page