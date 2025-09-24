import { paths } from '@globals/paths';
import { Sections } from '@models/app';
import { useUser } from '@store/zustand';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { SectionContact } from './section-contact';
import { SectionDoctors } from './section-doctors';
import { SectionInfo } from './section-info';
import { SectionPricing } from './section-pricing';
import { SectionServices } from './section-services';
import { SectionWelcome } from './section-welcome';
import styles from './styles.module.less';

const HomePage: React.FC = () => {
  const location = useLocation();
  const scrollToSection = useUser(state => state.scrollToSection);

  useEffect(() => {
    if (paths.includes(location.pathname)) {
      const sectionKey = location.pathname.substring(1).toUpperCase() as keyof typeof Sections;
      const section = Sections[sectionKey];
      scrollToSection(section);
    }
  }, [location, scrollToSection]);

  return (
    <div className={styles.cont}>
      <SectionWelcome />
      <SectionInfo />
      <SectionServices />
      <SectionDoctors />
      <SectionPricing />
      <SectionContact />
    </div>
  );
};

export default HomePage;
