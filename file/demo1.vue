<template>
  <div style="width:600px">
    <Tree :data="data5" :render="renderContent" @on-toggle-expand="addContent"></Tree>
    <input v-validate="'required|email'" name="email" type="text">
    <span>{{ errors.first('email') }}</span>

    <input v-validate="'phonenumber'" name="ASD" type="text">

    <span>{{ errors.first('ASD') }}</span>
    <input type="tel" v-model="username" name="username" v-validate="{regex : resg}" data-vv-name="username">
    <span v-if="errors.has('username')" style="height:40px; width: 100px; background: #7f7e7e; font-size: 16px;">请输入正确的手机号</span>


  </div>

</template>
<script>
  export default {
    $_veeValidate: {
      validator: 'new'
    },
    data: function () {
      return {
        username: '',
        resg:/^((13|14|15|17|18)[0-9]{1}\d{8})*$/,
        data5: [
          {
            title: 'parent 1',
            layerId: '001',
            expand: false,
            render: (h, {root, node, data}) => {
              return h('span', {
                style: {
                  display: 'inline-block',
                  width: '100%'
                }
              }, [
                h('span', {}, [
                  h('span', data.title)
                ]),
                h('span', {
                  style: {
                    display: 'inline-block',
                    float: 'right',
                    marginRight: '32px'
                  },

                })
              ]);
            },
            children: [{}]
          }
        ],
        buttonProps: {
          type: 'default',
          size: 'small',
        }
      }
    },
    computed: {
      disabledFlag() {
        //验证不通过button disabled
        return this.$validator.errors.has('phonenumber')
      }
    },
    methods: {
      renderContent(h, {root, node, data}) {
        return h('span', {
          style: {
            display: 'inline-block',
            width: '100%'
          }
        }, [
          h('span', {

          }, [
            h('span', data.title)
          ]),
          h('span', {
            style: {
              display: 'inline-block',
              float: 'right',
              marginRight: '32px'
            }
          }, [
            h('Button', {
              props: Object.assign({}, this.buttonProps, {
                icon: 'ios-add'
              }),
              style: {
                marginRight: '8px'
              },
              on: {
                click: () => {
                  alert(data.title)
                }
              }
            })
          ])
        ]);
      },
      addContent(data){
      console.log(data);
        let children = [{
          title: 'appended node' + data.layerId,
          expand: false,
          layerId: data.layerId + '1',
          children: [{}]
        }, {
          title: 'child 1-1' + data.id,
          expand: false,
          id: data.id + '02',
          children: [{}]
        }];
        this.$set(data, 'children', children);
      }
    }
  }
</script>
