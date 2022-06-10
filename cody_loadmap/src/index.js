import React from 'react'; 
import ReactDOM from 'react-dom'; 
import App from './components/App'; 
import { Provider } from 'react-redux'; 
import Say from './components/Say'
import store from './store'; 
import "./static/fonts/font.css";

ReactDOM.render( 
<Provider store={store}> 
<App /> 
</Provider>, 
document.getElementById('root') 
);

