import React from 'react';
import { useSelector } from 'react-redux';

import ItemList from './ItemList'

// Create an action containing relevant information for each character that updates as more are discovered
function PersonList() {
  const items = useSelector(st => Object.values(st.people).map(
    p => ({...p, url: `/people/${p.id}`})
  ));
  return <ItemList title="People" items={items} />;
}

export default PersonList;