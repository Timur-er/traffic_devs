import Header from "./Components/Header/Header";
import OfferSection from "./Sections/OfferSection/OfferSection";
import AboutSection from "./Sections/AboutSection/AboutSection";
import TopVerticalsSection from "./Sections/TopVerticalsSection/TopVerticalsSection";
import StatisticSection from "./Sections/StatisticSection/StatisticSection";
import WhyWorkingWithUsSection from "./Sections/WhyWorkingWithUsSection/WhyWorkingWithUsSection";
import SourcesSection from "./Sections/SourcesSection/SourcesSection";
import ContactSection from "./Sections/ContactSection/ContactSection";
import styles from './App.module.css';

function App() {
  return (
    <>
      <Header />
        <body className={styles.body}>
        <OfferSection />
        <AboutSection />
        <TopVerticalsSection />
        <StatisticSection />
        <WhyWorkingWithUsSection />
        <SourcesSection />
        <ContactSection />
        </body>
    </>
  );
}

export default App;
