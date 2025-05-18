import React from 'react';

import { SectionContact } from './section-contact';
import { SectionDoctors } from './section-doctors';
import { SectionInfo } from './section-info';
import { SectionPricing } from './section-pricing';
import { SectionServices } from './section-services';
import { SectionWelcome } from './section-welcome';
import styles from './styles.module.less';

const HomePage: React.FC = () => {
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
