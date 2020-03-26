import React, { Suspense }  from 'react';
import { Router } from '@reach/router';
import MapChart from '../src/components/MapChart';
import {
  ConfirmedChart,
  ConfirmedByProvinceChart,
  DetailsChart
} from '../src/components/Charts';
import { GlobalStyle } from '../src/components/GlobalStyle';
import DataPanel from '../src/components/DataPanel';

export default function App() {
  return (
    <>
      <Suspense fallback={null}>
        <GlobalStyle />
        <main>
          <DataPanel />
          <section>
            <Router>
              <MapChart path="/" />
              <ConfirmedChart path="/gun-gun" />
              <ConfirmedByProvinceChart path="/bolge-bolge" />
              <DetailsChart path="/detayli" />
            </Router>
          </section>
        </main>
      </Suspense>
    </>
  );
}
