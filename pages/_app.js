import Layouts from "../components/Layouts";
import "../styles/globals.css";

function MyApp({ Component, pageProps, Navbar }) {
  return (
    <Layouts>
      <Component {...pageProps} />
    </Layouts>
  );
}

export default MyApp;
