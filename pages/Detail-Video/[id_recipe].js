/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
import Image from "next/image";
import axios from "axios";
import Layouts from "../../components/Layouts";
import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";

export async function getServerSideProps(context) {
  const cookie = context.req.headers.cookie;
  if (!cookie) {
    return {
      redirect: {
        destination: "/auth/Login",
        permanent: true,
      },
    };
  }
  return {
    props: {
      // isLogin: true,
      login: cookie,
    },
  };
}

function detailVideoRecipe({ login }) {
  const router = useRouter();
  const { id_recipe } = router.query;
  const [data, setData] = useState({
    id_recipe: "",
    title: "",
    photo: "",
    video: "",
    ingredients: "",
  });
  useEffect(() => {
    axios
      .get(`/service/recipe/detail/${id_recipe}`, {
        withCredentials: true,
      })
      .then((res) => {
        setData(res.data.data);
      });
  }, []);
  return (
    <div>
      <Layouts />
      <div className="container">
        <div className="row mb-5">
          <div className="col-7">
            <video width={890} height={500} controls>
              <source src={data.video} type="video/mp4" />
              Your browser does not support HTML video.
            </video>
            <h6 className="text-secondary">3 month ago</h6>
          </div>
          <div className="col-3 offset-2">
            <h4>Next</h4>
            <video width={290} height={200} controls>
              <source src={data.video} type="video/mp4" />
              Your browser does not support HTML video.
            </video>
            <h6>{data.title}</h6>
            <p className="text-secondary">{data.fullname} - 3 month ago</p>
            <video width={290} height={200} controls>
              <source src={data.video} type="video/mp4" />
              Your browser does not support HTML video.
            </video>
            <h6>{data.title}</h6>
            <p className="text-secondary">{data.fullname} - 3 month ago</p>
            <video width={290} height={200} controls>
              <source src={data.video} type="video/mp4" />
              Your browser does not support HTML video.
            </video>
            {/* <h6>{data.title}</h6> */}
            {/* <p className="text-secondary">{data.fullname} - 3 month ago</p> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default detailVideoRecipe;
