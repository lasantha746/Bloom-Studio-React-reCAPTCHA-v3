import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import {GoogleReCaptchaProvider} from 'react-google-recaptcha-v3';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<GoogleReCaptchaProvider reCaptchaKey="YOUR_V3_SITE_KEY"> {/* Replace with your actual reCAPTCHA v3 site key */}
  <App />
</GoogleReCaptchaProvider>
);