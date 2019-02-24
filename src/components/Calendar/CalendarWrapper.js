import React from 'react';
import { Button } from 'bloomer';

import firebase from '../../firebase';
import { useCollection } from 'react-firebase-hooks/firestore';

const eventsDb = firebase.firestore().collection('events');

const _addEvent = () => {
  eventsDb.add({
    end: null,
    start: 'test',
    title: 'test'
  });
};

export default function CalendarWrapper() {
  const { error, loading, value } = useCollection(eventsDb);

  return (
    <div className="calendar">
      <div className="calendar__inner">
        {value &&
          value.docs.map(doc => (
            <li key={doc.id}>{JSON.stringify(doc.data())}</li>
          ))}
      </div>
      <Button onClick={_addEvent}>Add new</Button>
    </div>
  );
}
