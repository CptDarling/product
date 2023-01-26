export const ProductRow = ({ product }) => {
  const name = product.stocked ? product.name :
    <span className="out-of-stock">
      {product.name}
    </span>

  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
}