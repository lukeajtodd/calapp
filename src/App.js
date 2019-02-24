import React from 'react';
import { Container, Columns, Column } from 'bloomer';

import 'bulma';
import './App.scss';

function App() {
  return (
    <Container>
      <Columns>
        <Column isSize="1/3">navigation</Column>
        <Column>calendar</Column>
      </Columns>
    </Container>
  );
}

export default App;
