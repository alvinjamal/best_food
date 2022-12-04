import Image from "next/image";
import Head from "next/head";
import { global } from "styled-jsx/css";

const Login = () => {
  return (
    <>
      <div className="container-xl mx-auto bg-slate-200 pt-10 pb-10">
        <div className="container flex flex-row mx-auto">
          <div className="basis-2/4">
            <div
              style={{
                backgroundImage: `url(/bg.png)`,
                height: "900px",
                width: "700px",
              }}
            >
              <div
                style={{
                  backgroundImage: `url(/bg.png)`,
                  height: "100%",
                  width: "100%",
                  opacity: "0.5",
                }}
                className="col p-4 "
              >
                <Image
                  src="/col.png"
                  width={300}
                  height={300}
                  style={{
                    opacity: "1",
                    marginTop: "300px",
                    marginLeft: "180px",
                  }}
                />
              </div>
              <div>
                <div className="flex-end">
                  <div className="text-end mt-1" style={{ marginRight: "20%" }}>
                    Welcome
                  </div>
                </div>
                <div className="basis-2/4 mt-2">
                  <span className="font-sans text-sm font-normal text-black w-28 h-5 text-end">
                    <div className="mt-6 mr-28">Lupa kata sandi?</div>
                  </span>
                  <div className="font-sans mx-auto mt-8 text-sm font-normal text-blaxk w-max h-5 mt-2 text-end">
                    Anda belum punya akun?
                    <div className="text-end amber-400 mt-1">
                      Daftar disini!
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
