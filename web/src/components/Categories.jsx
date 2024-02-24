function Categories({ categories }) {
  const renderCategories = categories.map((product) => {
    return <li key={product.id}>{product.category}</li>;
  });
  return (
    <div className="generalContainer">
      <h3>What do you like to play with? </h3>
      <p>Choose as many plays as you like</p>
      <ul></ul>
    </div>
  );
}

export default Categories;
