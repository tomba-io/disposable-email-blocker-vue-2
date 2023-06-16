# 🛡️ Vue 2 Disposable email blocker

Detect and Block if new account registrations are using disposable email services.

[Vue 2 Demo](https://tomba-io.github.io/disposable-email-blocker-vue-2/)

The Disposable email blocker provide :

-   🛡️ Protects all HTML forms.
-   🛡️ Detects invalid email addresses and domains
-   🛡️ Blocks disposable email services
-   🛡️ Blocks webmail email services
-   🛡️ Custom error messages
-   🛡️ Disposable data daily updates to stay ahead of fake users

## How to use

### Install

[![NPM version][npm-image]][npm-url]
[![NPM bundle size][npm-bundle-size-image]][npm-url]
[![npm download][download-image]][download-url]

```shell
$ npm install disposable-email-blocker-vue-2 --save
# or
$ yarn add disposable-email-blocker-vue-2
```

### Usage

```javascript
import Blocker from 'disposable-email-blocker-vue-2';

Vue.use(Blocker);
```

### Options

The **_Blocker_** parameter.

Simple options

```javascript
const defaults = {
    apiUrl: 'string',
    data: 'TombaStatusResponse[]',
    disposable: {
        message: 'string',
    },
    webmail: {
        message: 'string',
        block: false,
    },
    emailError: {
        className: 'string',
        style: `string`,
    },
};
Vue.use(Blocker, defaults);
```

-   `apiUrl` API URL.
-   `data` Data structure.
-   `disposable.message` disposable error message.
-   `webmail.message` webmail error message.
-   `webmail.block` block webmail emails.
-   `emailError.className` HTML tag class .
-   `emailError.style` css style.

#### Custom disposable message

To disposable message:

```javascript
const defaults = {
    disposable: {
        message:
            'Abuses, strongly encourage you to stop using disposable email',
    },
};
Vue.use(Blocker, defaults);
```

### Custom webmail message

To webmail message:

```javascript
const defaults = {
    webmail: {
        message:
            'Warning, You can create an account with this email address, but we strongly encourage you to use a professional email address',
    },
};
Vue.use(Blocker, defaults);
```

### Custom API URL

```javascript
const defaults = {
    apiUrl: 'string',
};
Vue.use(Blocker, defaults);
```

### Custom DATA

This will stop API call

```javascript
const defaults = {
    data: [
        {
            domain: 'coronafleet.com',
            webmail: true,
            disposable: false,
        },
    ],
};
Vue.use(Blocker, defaults);
```

### Block webmail emails

```javascript
const defaults = {
    webmail: {
        block: true,
    },
};
Vue.use(Blocker, defaults);
```

## Instance property

To access the API functions, call the **$blocker** anywhere in your components.

```javascript
this.$blocker;
```

### Event handling

use the `on()` API method.
Available Event name `done` the Content is revealed on `onInput`

```javascript
his.$blocker.on('done', (e) => {
    // place your code here
});
```

## Free Plugins / Forum / E-Commerce / CMS

| Platform   | URL                                                                                                    | Status |
| ---------- | ------------------------------------------------------------------------------------------------------ | ------ |
| wordpress  | [wordpress-disposable-email-blocker](https://github.com/tomba-io/tomba-disposable)                     | ✅     |
| MyBB       | [mybb-disposable-email-blocker](https://github.com/tomba-io/mybb-disposable-email-blocker)             | ✅     |
| LiteCart   | [litecart-disposable-email-blocker](https://github.com/tomba-io/litecart-disposable-email-blocker)     | ✅     |
| Cloudflare | [cloudflare-disposable-email-blocker](https://github.com/tomba-io/cloudflare-disposable-email-blocker) | ✅     |
| Vue 2      | [disposable-email-blocker-vue-2](https://github.com/tomba-io/disposable-email-blocker-vue-2)           | ✅     |
| Joomla     |                                                                                                        | 🚧     |
| Drupal     |                                                                                                        | 🚧     |

## License

[![GitHub license](https://img.shields.io/github/license/tomba-io/disposable-email-blocker.svg)](https://github.com/tomba-io/disposable-email-blocker)

<!-- Links: -->

[npm-image]: https://img.shields.io/npm/v/disposable-email-blocker
[npm-url]: https://npmjs.org/package/disposable-email-blocker
[npm-bundle-size-image]: https://img.shields.io/bundlephobia/min/disposable-email-blocker
[download-image]: https://img.shields.io/npm/dt/disposable-email-blocker
[download-url]: https://npmjs.org/package/disposable-email-blocker
