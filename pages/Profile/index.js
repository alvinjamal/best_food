import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getCookies } from "cookies-next";
import { globals } from "styled-jsx/css";
import Layouts from "../../components/Layouts";
import ModalEdit from "../../components/Modal/index";
import NavTabs from "../../components/NavTabs/index";

// export const getServerSideProps = async (context) => {
//   const { id_user } = context.req.cookies;
//   console.log(id_user);
//   if (!id_user) {
//     return {
//       redirect: {
//         destination: "/Login",
//         permanent: true,
//       },
//     };
//   }

//   return {
//     props: {
//       isLogin: true,
//       id_user: id_user,
//     },
//   };
// };

function Profile(id_user) {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    const token = getCookies("token");
    axios
      .get(`http://localhost:3500/users/profile`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log(res);
        setProfile(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="container">
      <Layouts />
      <div className="row justify-content-center mt-5">
        <div className="col-1">
          <Image
            src={profile.photo}
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
        >
          {/* <h5>{data ? data[0].fullname : "Data Not Found"}</h5> */}
        </div>
      </div>
      <div className="row mb-4">
        <NavTabs />
      </div>
    </div>
  );
}

export default Profile;
