import React from 'react';
import { Container, Columns, Column } from 'bloomer';

import Navigation from './components/Navigation';
import { CalendarWrapper } from './components/Calendar';

import 'bulma';
import './App.scss';

function App() {
  return (
    <Container>
      <Columns>
        <Column isSize="1/3">
          <Navigation />
        </Column>
        <Column>
          <CalendarWrapper />
        </Column>
      </Columns>
    </Container>
  );
}

export default App;
