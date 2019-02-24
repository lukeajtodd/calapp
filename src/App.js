import React from 'react';
import { Container, Columns, Column } from 'bloomer';

import Navigation from './components/Navigation';

import 'bulma';
import './App.scss';

function App() {
  return (
    <Container>
      <Columns>
        <Column isSize="1/3">
          <Navigation />
        </Column>
        <Column>calendar</Column>
      </Columns>
    </Container>
  );
}

export default App;
