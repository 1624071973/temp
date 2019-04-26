<template>
  <div class="">
    <form  class="">
      <label class="">手机号</label>
      <p class="">
        <input v-model="phone" name="phone" :class="" type="text"
               placeholder="请输入手机号"><br>
        <span v-show="errors.has('phone')" class="error">{{ errors.first('phone') }}</span>
      </p>
      <label class="">姓名</label>
      <p class="">
        <input v-model="name" name="name" :class="" type="text"
               placeholder="请输入手机号"><br>
        <span v-show="errors.has('name')" class="error">{{ errors.first('name') }}</span>
      </p>

      <p class="">
        <Button  class="" name="button" @click="applyCoupon">确定</Button>
      </p>
    </form>
  </div>
</template>
<script>
  import VeeValidate, {Validator} from 'vee-validate';
  import cn from 'vee-validate/dist/locale/zh_CN';

  Validator.localize('cn', cn);

  const dict = {
    cn: {messages: {required: (name) => `${name}不能为空!`}}
  }
  Validator.localize(dict);

  export default {
    name: 'coupon-example',
    validator: null,
    data: () => ({
      phone: '',
      name: '',
      errors: null
    }),
    computed: {},
    methods: {
      applyCoupon() {  // 提交执行函数
        this.validator.validate('name', this.name).then((result) => this.discounted = result);
        this.validator.validate('phone', this.phone).then((result) => this.discounted = result);
      }
    },
    created() {
      this.validator = new Validator({});

      Validator.extend('mobile', {
        getMessage: field => "请输入正确的手机号码",
        validate: value => value.length === 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(value)
      });
      Validator.extend('name', {
        getMessage: field => "请输入正确姓名",
        validate: value => value == 'tom'
      });

      this.validator.attach({name: 'name', rules: 'required|name', alias: '姓名'});
      this.validator.attach({name: 'phone', rules: 'required|mobile', alias: '手机'});
      // 使用attach以FieldOptions作为其第一个参数的方法添加验证规则。

      this.$set(this, 'errors', this.validator.errors);
    }
  };
</script>
<style>
  .error {
    font-size: 12px;
    color: #ff1c13;
  }
</style>
