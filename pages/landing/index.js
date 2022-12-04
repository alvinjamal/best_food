import Image from "next/image";
import { globals } from "styled-jsx/css";

function LandingPage1() {
  return (
    <div className="container">
      <div>
        <div className="food" style={{ backgrounColor: "blue" }}>
          <div className="wrapper-left mt-2 ">
            <div>
              <div
                className="box line-items-center"
                style={{ marginTop: "20px", color: "blue" }}
              >
                <h1>Discover recipe & Delicious food</h1>
                <span class="icon">
                  <i class="fa fa-search" />
                </span>
                <input
                  type="search"
                  className="search"
                  placeholder="Search Restaurant Food"
                />
              </div>
            </div>
          </div>
          <div>
            <div
              className="wrapper-right"
              style={{
                width: "50%",
                display: "flex",
                alignItems: "center",
                marginLeft: "55%",
                backgroundImage: `url(/bg.png)`,
                height: "700px",
                width: "780px",
              }}
            >
              <div>
                <Image
                  src="/food1.png"
                  alt="makanan"
                  width={600}
                  height={500}
                />
              </div>
            </div>
          </div>
          <h4 className="title">
            <span></span>popular For You!
          </h4>
        </div>
        <div className="wrapper">
          <div className="wrapper-left col-2">
            <div
              className="wrapper-img-popular"
              style={{ marginRight: "100px" }}
            >
              <Image src="/food4.png" alt="makanan" width={600} height={500} />
            </div>
            <div className="wrapper-img-popular">
              <Image src="/food5.png" alt="makanan" width={600} height={500} />
            </div>
          </div>
        </div>
        <h1 className="title">
          <span></span>New Recipe
        </h1>
        <div className="wrapper">
          <div className="wrapper-left">
            <div className="wrapper-img-popular">
              <Image src="/mam.png" alt="makanan" width={600} height={600} />
            </div>
          </div>
          <div className="wrapper-right" style={{ marginLeft: "80px" }}>
            <div>
              <h2 className="subtitle">
                Healthy Bone Broth Ramen (Quick & Easy)
              </h2>
              <p>
                Quick + Easy Chicken Bone Broth Ramen- Healthy chicken ramen in
                a hurry? That’s right!
              </p>
              <button className="button">Learn More</button>
            </div>
          </div>
        </div>
        <div id="popular-recipe">
          <h1 className="title">
            <span></span>Popular Recipe
          </h1>
          <div className="popular-img col-12 p-10 mt-10">
            <div className="img-shop mt-5">
              <Image
                src="/gambar1.png"
                alt="makanan"
                width={400}
                height={350}
              />
            </div>
            <div className="img-shop mt-5">
              <Image
                src="/gambar2.png"
                alt="makanan"
                width={400}
                height={350}
              />
            </div>
            <div className="img-shop mt-5">
              <Image
                src="/gambar3.png"
                alt="makanan"
                width={400}
                height={350}
              />
            </div>
            <div className="img-shop mb-4">
              <Image
                src="/gambar4.png"
                alt="makanan"
                width={400}
                height={350}
              />
            </div>
            <div className="img-shop mb-4">
              <Image
                src="/gambar5.png"
                alt="makanan"
                width={400}
                height={350}
              />
            </div>
            <div className="img-shop mb-4">
              <Image
                src="/gambar6.png"
                alt="makanan"
                width={400}
                height={350}
              />
            </div>
          </div>
        </div>
        <div id="end">
          <div class="background">
            <h2 class="data mb-5">Eat, Cook, Repeat</h2>
            <a style={{ color: "#707070" }}>
              Share your best recipe by uploading here !
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage1;
