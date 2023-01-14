import React from 'react'
import Section1 from '../components/Section1/Section1';
import Infograph from '../components/Infograph/Inforgraph'
import Section2 from '../components/Section2/Section2';
import Ad1 from '../components/Ad1/Ad1';
import Header from '../components/Header/Header'
import TableContentsd from '../components/TableContents/TableContents';
import SeniorDiscounts from '../components/SeniorDiscounts/SeniorDiscounts';
import YoutubeVideo from '../components/YoutubeVideo/YoutubeVideo';
import Footer from '../components/Footer/Footer'
import Review from '../components/Reviews/Review';

export default function Home() {
  return (
    <div>
      <Header />
      <TableContentsd />
      <SeniorDiscounts />
      <YoutubeVideo embedId='9U0N7-xDx-0' />
      <Section1 />
      <Infograph/>
      <Ad1 />
      <Section2 />
      <Review />
      <Footer />
    </div>
  )
}
