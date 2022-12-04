import Image from "next/image";
import { Modal } from "react-bootstrap";
import { globals } from "styled-jsx/css";

function Chat() {
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
            <Modal className="chat text-light ">Chat Admin</Modal>
            <div>
              <Image src="/food1.png" alt="makanan" width={600} height={500} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
