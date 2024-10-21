import Article from "./Article";

function Articles({ data }) {
  return (
    <>
      {data.map((item, index) => (
        <Article key={index} item={item} />
      ))}
    </>
  );
}

export default Articles;
