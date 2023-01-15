import React from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { Button } from "react-bootstrap";

const Layouts = ({ children }) => {
  // const token = JSON.parse(localStorage.getItem("token"));
  // const router = useRouter();
  // const [data, setData] = useState([]);
  // const [recipe, setRecipe] = useState([]);
  // console.log(data, "dari profile");

  // // useEffect(() => {
  // const user = JSON.parse(localStorage.getItem("data"));

  // const apiResep = `http://localhost:3500/users/${user.id}`;
  // useEffect(() => {
  //   axios
  //     .get(apiResep)
  //     .then((result) => {
  //       result.data && setData(result.data.data[0]);
  //       console.log(result.data.data[0], "ini data user");
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       alert("get data fail");
  //     });
  // }, []);

  // const myrecipe = () => {
  //   axios
  //     .get(`http://localhost:3500/recipe/`, {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     })
  //     .then((result) => {
  //       result.data && setRecipe(result.data.data);
  //       console.log(result.data.data, "ini data my recipe");
  //       // alert('get my recipe success');
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       alert("get my recipe fail");
  //     });
  // };

  // useEffect(() => {
  //   myrecipe();
  //   console.log(recipe.id, "data recipe");
  // }, []);

  // const handleDelete = (id) => {
  //   axios
  //     .delete(`http://localhost:3500/recipe/${id}`, {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     })
  //     .then((result) => {
  //       alert("delete recipe success");
  //       myrecipe();
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       alert("delete recipe fail");
  //     });
  // };
  return (
    <>
      <Head>
        <title>Food Recipe</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </Head>
      <nav className="container-fluid mt-3 ">
        <div className="container">
          <div className="row">
            <div className="col-1">
              <Link href="/">
                {" "}
                <h4>Home</h4>{" "}
              </Link>
            </div>
            <div className="col-2">
              <Link href="/Add-Recipe">
                {" "}
                <h4>Add Recipe</h4>{" "}
              </Link>
            </div>
            <div className="col-1">
              <Link href="/Profile">
                {" "}
                <h4>Profile</h4>{" "}
              </Link>
            </div>
            {/* {token ? ( */}
            <>
              {/* <div className="col-1 offset-5" style={{ marginLeft: "5px" }}>
                <Button
                  className="btn btn-danger btn-small"
                  onClick={() => logout()}
                >
                  Logout
                </Button>
              </div> */}
            </>
            {/* ) : ( */}
            <div className="col-1 offset-5">
              <Link href="/Login">
                <div className="btn" style={{ borderRadius: "30px" }}>
                  <Image
                    src="/panel.png"
                    height={40}
                    width={80}
                    alt=""
                    priority
                  />
                </div>
              </Link>
            </div>
            {/* )} */}
          </div>
        </div>
      </nav>
      <div className="container-fluid bg-white">{children}</div>
    </>
  );
};

export default Layouts;
