import React from 'react';
import data from '../db/EcuadorData';
import {
  StatGrid,
  StatBlock,
  TwoCols,
  Row,
  Separator
} from '../components/StyledStats';
import { withTranslation } from 'react-i18next';

const Ecuador = ({ t }) => {
  const provinces = data;
  const sortedProvinces = provinces.sort((a, b) => {
    return b.confirmed - a.confirmed;
  });

  const dataTotals = {
    confirmed: 3629,
    deaths: 75,
    suspicious: 2,
    negatives: 1387,
    recoveries: 26,
    tests: 40290
  };

  var result = (dataTotals.confirmed / dataTotals.tests) * 100;

  return (
    <>
      <p>
        <small>
          {t('updateDate.label')} 25.03 | 18:30 | {t('source.label')}{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/Riesgos_Ec"
          >
            T.C. SAĞLIK BAKANLIĞI
          </a>
        </small>
      </p>
      <StatGrid>
        <StatBlock className="warning">
          <p>{dataTotals.confirmed}</p>
          <h3>{t('confirmed.label')}</h3>
        </StatBlock>
        <StatBlock className="danger">
          <p>{dataTotals.deaths}</p>
          <h3>{t('deaths.label')}</h3>
        </StatBlock>
        <StatBlock>
          <p>{dataTotals.suspicious}</p>
          <h3>{t('suspicious.label')}</h3>
        </StatBlock>
        <StatBlock>
          <p>{dataTotals.negatives}</p>
          <h3>{t('negatives.label')}</h3>
        </StatBlock>
        <StatBlock>
          <p>{dataTotals.recoveries}</p>
          <h3>{t('recoveries.label')}</h3>
        </StatBlock>
        <StatBlock>
          <p>{dataTotals.tests}</p>
          <h3>{t('test.label')}</h3>
        </StatBlock>
        <StatBlock>
          <p>{result.toFixed(2)}% </p>
          <h3>{t('rate.label')}</h3>
        </StatBlock>
      </StatGrid>
      <br />
      <h4>{t('confirmedPerRegion.label')}</h4>
      <br />
      <TwoCols>
        {sortedProvinces.map(province => (
          <Row key={province.id}>
            <span>{province.name}</span>
            <Separator />
            <span>{province.confirmed}</span>
          </Row>
        ))}
      </TwoCols>
    </>
  );
};

export default withTranslation()(Ecuador);
