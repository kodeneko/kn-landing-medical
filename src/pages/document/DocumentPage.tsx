import spinner from '@assets/pics/spinner.png';
import i18n from '@i18n/index';
import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { useLocation } from 'react-router-dom';

import styles from './styles.module.less';

const docMap: Record<string, string> = {
  '/cookies': 'cookies',
  '/legal': 'legal',
  '/privacy': 'privacy'
};

const getLang = () => (navigator.language.startsWith('es') ? 'es' : 'en');

const DocumentPage: React.FC = () => {
  const { t } = i18n;
  const location = useLocation();
  const [content, setContent] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    const docKey = docMap[location.pathname];
    if (!docKey) {
      setError(t('errors.docNotFound'));
      setLoading(false);
      return;
    }
    const lang = getLang();
    const url = `/docs/${docKey}-${lang}.md`;
    fetch(url)
      .then(res => {
        if (!res.ok) throw new Error(t('errors.docNotLoaded'));
        return res.text();
      })
      .then(setContent)
      .catch(() => setError(t('errors.docNotLoaded')))
      .finally(() => setLoading(false));
  }, [location.pathname, t]);

  return (
    <div className={styles.cont}>
      {loading && <img src={spinner} />}
      {error && <p>{error}</p>}
      {!loading && !error && <div className={styles.doc}><ReactMarkdown>{content}</ReactMarkdown></div>}
    </div>
  );
};

export default DocumentPage;
