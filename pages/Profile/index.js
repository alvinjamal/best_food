import Image from "next/image";
import { globals } from "styled-jsx/css";
import ModalEdit from "../../components/Modal/index";
import NavTabs from "../../components/NavTabs/index";

function Profile() {
  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div
          className="col-1"
          style={{
            height: "30rem",
            width: "50rem",
            border: "1px solid",
            background: "#EFC81A",
          }}
        >
          <Image src={"/foto2.png"} width={100} height={100} alt="" />
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
      <div className="row mb-5">
        <NavTabs />
      </div>
    </div>
  );
}

export default Profile;
