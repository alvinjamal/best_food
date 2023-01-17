import "../styles/globals.css";
import { Provider } from "react-redux";
import food from "../redux/store";
import { SSRProvider } from "react-bootstrap";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Provider store={food}>
        <Component {...pageProps} />{" "}
      </Provider>
    </div>
  );
}
export default MyApp;
