import App from '../../App';
import routes from './Routes';
import { merge } from 'lodash';
import baseLocale from '../../core/locale';
import locale from './locale';
import ReactDOM from 'react-dom';
import baseConfig from '../../core/config';
import config from './config';

ReactDOM.render(
  <App
    locale={merge({}, baseLocale, locale)}
    config={merge({}, baseConfig, config)}
    routes={routes}
  />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
