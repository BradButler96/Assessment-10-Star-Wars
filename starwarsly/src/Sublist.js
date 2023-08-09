import React from 'react';
import { Link } from "react-router-dom";


function Sublist({title, items}) {
  return (
    <>
      <h3>{ title }</h3>
      <ul>
        {/* Create li for each item in action, if item has been discovered display name otherwise display unknown */}
        {items.map(item =>
          <li key={item.id}><Link to={item.url}>{item.display}</Link></li>
        )}
      </ul>
    </>
  );
}

export default Sublist;