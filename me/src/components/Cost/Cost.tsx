import { products } from '../../db/products';
import { cost } from '../../db/cost';

interface Item {
  N: number;
  Яблоки: number;
  Апельсины: number;
  Бананы: number;
}

interface CostProps {
  addToList: (item: Item) => void;
}

const Cost: React.FC<CostProps> = ({ addToList }) => {
  return (
    <div>
      <p>Все варианы</p>
      {cost.map((item: Item, i: number) => (
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
            cursor: 'pointer',
          }}
          onClick={() => {
            addToList(item);
          }}
        >
          <h3>Вариант: {item.N}</h3>
          <li>🍎 {item.Яблоки}</li>
          <li>🍊 {item.Апельсины}</li>
          <li>🍌 {item.Бананы}</li>
        </ul>
      ))}
    </div>
  );
};

export default Cost;
