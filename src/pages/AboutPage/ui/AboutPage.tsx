import React from 'react';
import { useTranslation } from 'react-i18next';

const AboutPage = () => {
    const { t } = useTranslation('about');

    return (
        <div>
            {t('asdasda')}
            {t('О сайте')}
        </div>
    );
};

export default AboutPage;
