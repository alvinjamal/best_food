import Image from "next/image";
import { globals } from "styled-jsx/css";
import ModalEdit from "../../components/Modal/index";
import NavTabs from "../../components/NavTabs/index";

function Profile() {
  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-1">
          <Image
            src={"/alvin1.png"}
            width={100}
            height={100}
            alt=""
            style={{ borderRadius: "40%" }}
          />
        </div>
      </div>
      <div className="row justify-content-center mt-5">
        <div className="col-1">
          <ModalEdit />
        </div>
      </div>
      <div className="row">
        <div
          className="col-6"
          style={{ marginLeft: "570px", marginTop: "-50px" }}
        ></div>
      </div>
      <div className="row mb-4">
        <NavTabs />
      </div>
    </div>
  );
}

export default Profile;
