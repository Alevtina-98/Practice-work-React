import "./Main.css";
import data from "../../data/data.json";
import Article from "../../components/Articles";

const Main = () => {
  return (
    <div className="Main">
      <Article data={data} />
    </div>
  );
};

export default Main;
