import React from 'react';
import { useSelector } from 'react-redux';

import ItemList from './ItemList'

// Create an action containing relevant information for each film that updates as more are discovered
function FilmList() {
  const items = useSelector(st => Object.values(st.films).map(
    f => ({...f, url: `/films/${f.id}`})
  ));
  return <ItemList title="Films" items={items} />;
}

export default FilmList;
