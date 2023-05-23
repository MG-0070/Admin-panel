import "./list.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Dataproduct from "../../components/datatable/Dataproduct";

const List = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Dataproduct />
      </div>
    </div>
  );
};

export default List;
