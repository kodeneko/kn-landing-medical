import { MainLayout } from '@layouts';
import { HomePage } from '@pages';

import { initI18n } from './i18n';

initI18n();

const App = () => {
  return (
    <div>
      <MainLayout>
        <HomePage></HomePage>
      </MainLayout>
    </div>
  );
};

export default App;
