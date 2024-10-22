function Topics({ data }) {
  return (
    <>
      {data.map((item, index) => (
        <li key={index}>
          <a href={item.href}>{item.title}</a>
        </li>
      ))}
    </>
  );
}
export default Topics;
