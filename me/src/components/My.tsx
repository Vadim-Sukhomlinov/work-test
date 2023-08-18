import { useState } from 'react';
import InputWeight from './UI/InputWeigth';
import InputCost from './UI/InputCost';
import style from './MyStyle.module.css';

interface ListItem {
  N: number;
  Яблоки: string;
  Апельсины: string;
  Бананы: string;
  'Общая стоимость': string;
  'Общий вес': string;
}

export default function My() {
  const [myList, setMyList] = useState<ListItem[]>([]);

  function addToList(item: ListItem) {
    setMyList((prevList) => [...prevList, item]);
  }

  const totalCost = myList.reduce((acc, item) => {
    return acc + parseFloat(item['Общая стоимость']);
  }, 0);

  const totalWeight = myList.reduce((acc, item) => {
    return acc + parseFloat(item['Общий вес']);
  }, 0);

  return (
    <div className={style.main}>
      <InputWeight addToList={addToList} />
      <InputCost addToList={addToList} />

      <div>
        <p>Мой список</p>
        {myList.map((item, i) => (
          <ul
            key={i + 1}
            style={{
              display: 'flex',
              border: '1px solid #ccc',
              justifyContent: 'space-between',
              alignItems: 'center',
              listStyle: 'none',
              padding: '20px 20px',
              margin: '0 auto',
            }}
          >
            <h3>Вариант: {item.N}</h3>
            <li>🍎 {item.Яблоки}</li>
            <li>🍊 {item.Апельсины}</li>
            <li>🍌 {item.Бананы}</li>
            <li>💰 {item['Общая стоимость']}</li>
            <li>🎒 {item['Общий вес']}</li>
          </ul>
        ))}
        <div>
          <p>Общая стоимость: {totalCost}</p>
          <p>Общий вес: {totalWeight}</p>
        </div>
      </div>
    </div>
  );
}
