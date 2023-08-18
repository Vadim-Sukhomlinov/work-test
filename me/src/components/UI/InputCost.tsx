import React, { useState } from 'react';
import Cost from '../Cost/Cost';

interface Props {
  addToList: (item: any) => void;
}

export default function InputWeight({ addToList }: Props) {
  const [costItem, setCostItem] = useState(0);

  function getCostValue() {
    if (costItem === 1000) {
      return <Cost addToList={addToList} />;
    } else {
      return null;
    }
  }

  return (
    <div>
      <label>По цене</label>

      <input type="text" onChange={(e) => setCostItem(+e.target.value)} />
      {getCostValue()}
    </div>
  );
}
