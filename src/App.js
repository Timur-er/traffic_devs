import Header from "./Components/Header/Header";
import OfferSection from "./Sections/OfferSection/OfferSection";
import AboutSection from "./Sections/AboutSection/AboutSection";
import TopVerticalsSection from "./Sections/TopVerticalsSection/TopVerticalsSection";
import StatisticSection from "./Sections/StatisticSection/StatisticSection";
import InventorySection from "./Sections/InventorySection/InventorySection";
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
        <InventorySection />
        <SourcesSection />
        <ContactSection />
        </body>
    </>
  );
}

export default App;
