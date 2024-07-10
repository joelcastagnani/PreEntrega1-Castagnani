const ItemList = ({ greeting, numero, sumar }) => {
  return (
    <div>
      <h1>{greeting}</h1>
      <h1>{numero}</h1>
      <button onClick={sumar}>sumar</button>
    </div>
  );
};

export default ItemList;
