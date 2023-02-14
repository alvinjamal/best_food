import React from "react";
import Image from "next/image";
import axios from "axios";
import Layouts from "../../components/Layouts";

export async function getServerSideProps(context) {
  const id_recipe = context.params.id_recipe;
  const cookie = context.req.headers.cookie;
  const res = await axios.get(
    `${process.env.URL_BASE}/recipe/detail/${id_recipe}`,
    {
      withCredentials: true,
      headers: {
        Cookie: cookie,
      },
    }
  );

  return {
    props: {
      data: res.data.data,
      id_recipe,
      token: `token=${cookie}`,
      // login: token ? true : false,
    },
  };
}

function detailVideoRecipe({ data }) {
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
