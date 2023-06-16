import { Blocker } from 'disposable-email-blocker';
export default {
    install(Vue, options) {
        const blocker = new Blocker(options);
        Vue.prototype.$blocker = blocker;
    },
};
