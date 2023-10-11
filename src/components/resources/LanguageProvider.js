import React from 'react';
import LanguageContext from './LanguageContext';

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = React.useState("eng");

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
