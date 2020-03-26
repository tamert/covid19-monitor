import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const RadioButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex: 2;
  font-size: 0.7rem;
`;

const Label = styled.label`
  display: inline-block;
  margin-left: 1rem;
`;

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const changeLanguage = event => {
    i18n.changeLanguage(event.target.value);
  };
  return (
    <RadioButtons onChange={changeLanguage}>
      <Label htmlFor="tr">
        <input
          id="qwc"
          type="radio"
          value="tr"
          defaultChecked={true}
          name="language"
          aria-label="Language Select"
        />{' '}
        Türkçe
      </Label>
      <Label htmlFor="en">
        <input
          id="qwc"
          type="radio"
          value="en"
          name="language"
          aria-label="Language Select"
        />{' '}
        English
      </Label>
    </RadioButtons>
  );
};

export default LanguageSelector;
