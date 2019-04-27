import VeeValidate, {Validator} from 'vee-validate';
import Vue from 'vue';
import VueI18n from 'vue-i18n';
import en from 'vee-validate/dist/locale/en';
import zh_CN from 'vee-validate/dist/locale/zh_CN';

Vue.use(VueI18n);

const i18n = new VueI18n();
i18n.locale = "zh_CN"; // set a default locale (without it, it won't work)

const validator = new Validator({});
validator.localize('zh_CN');
Vue.use(VeeValidate, {
  i18nRootKey: 'validations', // customize the root path for validation messages.
  i18n,
  dictionary: {
    zh_CN,
    en
  }
});



// this.$t('以字母或者下划线开头，可包含字母数字下划线'),
Validator.extend('username', {
  messages: {zh_CN: (field, args) => field + '以字母或者下划线开头，可包含字母数字下划线'},
  validate: value => {
    return /^[a-zA-Z0-9_-]{4,10}$/.test(value)
  }
});
Validator.extend("phonenumber", {
  getMessage: field => "手机格式不正确",
  validate: value =>
    value.length === 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(value)
});
const Dictionary = {
  zh_CN: {
    attributes: {
      phonenumber:'shouji',
      username:'username'

    }
  }
};
Validator.localize(Dictionary);

