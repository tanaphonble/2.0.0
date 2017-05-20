import FooterSection from '../components/FooterSection'
import HeroUnit from '../components/HeroUnit'
import MainLayout from '../components/MainLayout'
import SectionSeparator from '../components/SectionSeparator'
import SpeakersSection from '../components/SpeakersSection'
import TicketsSection from '../components/TicketsSection'
import SponsorsSection from '../components/SponsorsSection'
import { Element } from 'react-scroll'

export default () => (
  <MainLayout>
    <HeroUnit />
    <SectionSeparator first />
    <Element name='tickets'>
      <section id='tickets'><TicketsSection /></section>
    </Element>
    <SectionSeparator />
    <Element name='sponsors'>
      <section id='sponsors'><SponsorsSection /></section>
    </Element>
    <SectionSeparator />
    <Element name='speakers'>
      <section id='speakers'><SpeakersSection /></section>
    </Element>
    <SectionSeparator />
    <Element name='contact'>
      <section id='contact'><FooterSection /></section>
    </Element>
  </MainLayout>
)
