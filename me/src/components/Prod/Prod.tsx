import { products } from '../../db/products';
import { cost } from '../../db/cost';

interface Product {
  N: string;
  Яблоки: number;
  Апельсины: number;
  Бананы: number;
}

interface Props {
  addToList: (item: Product) => void;
}

export default function Prod({ addToList }: Props) {
  return (
    <div>
      <p>Все варианы</p>
      {products.map((item: Product, i: number) => (
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
}
