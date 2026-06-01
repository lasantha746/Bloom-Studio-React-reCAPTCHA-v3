# Code With Lasa — React reCAPTCHA v3

## Video Tutorial
[Click Here](https://youtu.be/9DD5QLEL6c0)

## Install
```bash
npm install react-google-recaptcha-v3
```

## Import
```javascript
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from 'react-google-recaptcha-v3';
```

## Main File (src/main.js or src/index.js)
```javascript
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

<GoogleReCaptchaProvider reCaptchaKey="YOUR_V3_SITE_KEY">
  <App />
</GoogleReCaptchaProvider>
```

## Contact Form
```javascript
const { executeRecaptcha } = useGoogleReCaptcha();

if (!executeRecaptcha) {
  alert("reCAPTCHA not ready");
  return;
}

const token = await executeRecaptcha('contact_form');
```

Follow GitHub and star the repo.
