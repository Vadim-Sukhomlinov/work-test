import React, { useState } from 'react';
import Prod from '../Prod/Prod';

interface Props {
  addToList: (item: any) => void;
}

const InputWeigth: React.FC<Props> = ({ addToList }: Props) => {
  const [weigth, setWeigth] = useState<number>(0);

  function getWeigthValue(): JSX.Element | null {
    if (weigth === 185) {
      return <Prod addToList={addToList} />;
    } else {
      return null;
    }
  }

  return (
    <div>
      <label>По весу</label>
      <input type="text" onChange={(e) => setWeigth(+e.target.value)} />
      {getWeigthValue()}
    </div>
  );
};

export default InputWeigth;
