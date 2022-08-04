function Cats ({cat}) {
  return (
    <div className="cat">
      <span className="cat-name">{cat.name}</span>
      <img className="cat-image" src={cat.url} alt={cat.name} />
    </div>
  );
};

export default Cats;