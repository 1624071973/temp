<template>
<Card>
  <div ref="print" >
    <Table    width="100%" height="500" size="small" :columns="columns7" :stripe="true" :data="data" border ></Table>
  </div>
</Card>
</template>
<script>
  export default {
    data () {
      return {
        columns7: [
          {
            title: '序号',
            type: 'index',
            width: 200
          },
          {
            title: '新批次',
            width: 350,
            key:'newLots'
          },
          {
            title: '数量',
            key: 'numLots',
            width: 350,
            align: 'center',
            render: (h, params) => {
              var vm = this;
              return h('div', [

                h('Input', {
                  props: {
                    //将单元格的值给Input
                    value:params.row.numLots,
                    vValidate:'phonenumber'
                  },
                  on:{
                    'on-change' (event) {
                      //值改变时
                      //将渲染后的值重新赋值给单元格值
                      params.row.numLots = event.target.value;
                      vm.data[params.index] = params.row;
                    }
                  }
                },)
              ]);
            }
          },
          {
            title: '操作',
            key: 'action',
            width: 350,
            align: 'center',
            render: (h, params) => {
              return h('div', [
                h('Button', {
                  props: {
                    type: 'error',
                    size: 'default'
                  },
                  style: {
                    marginRight: '5px'
                  },
                  on: {
                    click: () => {

                    }
                  }
                }, '删除')
              ]);
            }
          }

        ],
        data: [
          {
            newLots:'55',
            numLots:12,
            action:'555'
         }
        ],
      }
    }
  }
</script>
