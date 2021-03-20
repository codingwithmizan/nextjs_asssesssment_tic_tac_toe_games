
import {Provider} from 'react-redux'
import {useStore} from '../state/store'
import "../styles/index.css";
import "../styles/globals.css";
import Layout from "../hocs/Layout";

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState)
  return (
    <Provider store={store}>
  <Layout>
      <Component {...pageProps} />
    </Layout>
    </Provider>
  
  );
}

export default MyApp;
