import { useEffect } from "react";
import TagManager from "react-gtm-module";
import "../styles/custom.global.scss";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize({ gtmId: "GTM-M3J3KBX" });
  }, []);
  return <Component {...pageProps} />;
}
export default MyApp;
