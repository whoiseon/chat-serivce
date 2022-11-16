import '../css/font/font.scss';
import '../css/global/reset.scss';

import PCRoot from '../components/pc/Root';

const App = ({ Component, pageProps }) => {
  return <PCRoot Component={Component} pageProps={pageProps} />;
};

export default App;
