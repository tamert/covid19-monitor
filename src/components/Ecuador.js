import React from 'react';
import data from '../db/EcuadorData';
import {
    StatGrid,
    StatBlock,
    TwoCols,
    Row,
    Separator
} from '../components/StyledStats';
import {withTranslation} from 'react-i18next';
import api from "../utils/api";

class Ecuador extends React.Component {

    state = {
        loading: true,
        dataTotals: false
    };

    componentDidMount() {

        api.get('/')
            .then(response => {
                this.setState({
                    loading: false,
                    dataTotals: response
                })
            })
            .catch(err => {
                this.setState({
                    loading: false,
                    dataTotals: false
                });

            });
    }

    render() {

        console.log(this.state.dataTotals);

        const provinces = data;
        const sortedProvinces = provinces.sort((a, b) => {
            return b.confirmed - a.confirmed;
        });

        /*
        const dataTotalss = {

            total_tests: 125556,
            tests_done_today: 18135,
            deaths: 356,
            intensive_care: 1101,
            intubated_patients: 783,
            recoverd: 415,
            confirmed_cases: 18757,
            confirmed_cases_today: 2456,
            deaths_today: 79,
            date: "2020-4-2",
        };
               */


        let result = 0;
        const dataTotals = this.state.dataTotals;

        if (dataTotals) {
            result = (dataTotals.confirmed_cases / dataTotals.total_tests) * 100;
        }
        const t = this.props.t;
        return (
            <>
                {(this.state.loading) && <div>{t('loading')}</div>}
                {(dataTotals) &&
                <div>
                    <div>
                        <small>
                            {t('updateDate.label')} {dataTotals.date} {t('source.label')}{' '}
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="http://saglik.gov.tr"
                            >
                                T.C. SAĞLIK BAKANLIĞI
                            </a>
                        </small>
                    </div>
                    <StatGrid>


                        <StatBlock className="warning">
                            <p>{dataTotals.confirmed_cases}</p>
                            <h3>{t('confirmed.label')}</h3>
                        </StatBlock>
                        <StatBlock className="danger">
                            <p>{dataTotals.deaths}</p>
                            <h3>{t('deaths.label')}</h3>
                        </StatBlock>
                        <StatBlock>
                            <p>{dataTotals.intensive_care}</p>
                            <h3>{t('intensive_care.label')}</h3>
                        </StatBlock>
                        <StatBlock>
                            <p>{(dataTotals.total_tests - dataTotals.confirmed_cases)}</p>
                            <h3>{t('negatives.label')}</h3>
                        </StatBlock>
                        <StatBlock>
                            <p>{dataTotals.recoverd}</p>
                            <h3>{t('recoveries.label')}</h3>
                        </StatBlock>
                        <StatBlock>
                            <p>{dataTotals.total_tests}</p>
                            <h3>{t('test.label')}</h3>
                        </StatBlock>
                        <StatBlock>
                            <p>{result.toFixed(2)}% </p>
                            <h3>{t('rate.label')}</h3>
                        </StatBlock>
                    </StatGrid>
                </div>
                }
                <br/>
                <h4>{t('confirmedPerRegion.label')}</h4>
                <br/>
                <TwoCols>
                    {sortedProvinces.map(province => (
                        <Row key={province.id}>
                            <span>{province.name}</span>
                            <Separator/>
                            <span>{province.confirmed}</span>
                        </Row>
                    ))}
                </TwoCols>
            </>
        );
    }
}

export default withTranslation()(Ecuador);
