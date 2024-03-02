function Categories({
  uniqueCategories,
  onCateoriesChange,
  selectedCategories,
}) {
  const renderCategories = uniqueCategories.map((category) => {
    return (
      <li key={category} className="containerCategories__li">
        <label htmlFor={category}>
          <input
            onChange={onCateoriesChange}
            type="checkbox"
            id={category}
            value={category}
            checked={selectedCategories.includes(category)}
          />
          {category}
        </label>
      </li>
    );
  });

  return (
    <div className="generalContainer">
      <h3>What do you like to play with? </h3>
      <p>Choose as many options as you like</p>
      <ul className="containerCategories">{renderCategories}</ul>
    </div>
  );
}

export default Categories;
