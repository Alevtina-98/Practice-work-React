import "./Sidebar.css";
import Topics from "../../components/Topics";
import data from "../../data/data.json";

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <nav>
        <ul>
          <Topics data={data} />
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
