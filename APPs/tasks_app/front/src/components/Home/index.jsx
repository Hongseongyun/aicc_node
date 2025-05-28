import React from 'react';
import Navbar from '../Common/Navbar';
import ItemPanel from '../Common/ItemPanel';

const index = () => {
  return (
    <div className="page_section">
      <Navbar activeIdx={0} />
      <ItemPanel pageTitle="All Items" />
    </div>
  );
};

export default index;
