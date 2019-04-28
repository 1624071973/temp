<template>
  <div>
    <Table border :columns="columns1" :data="data1" @on-row-click="handlerClicked"></Table>
    <Button @click='demo'>
      dianji
    </Button>
  </div>

</template>
<script>
  export default {
    data() {
      return {
        columns1: [
          {
            title: 'Name',
            align: 'center',
            key: 'flag',
            render: (h, params) => {
              return h('div', [
                h('Radio', {
                  props: {
                    value: this.data1[params.index].flag
                  }
                })
              ])
            }
          },
          {
            title: 'Age',
            key: 'age'
          },
          {
            title: 'Address',
            key: 'address'
          }
        ],
        data1: [
          {
            flag: false,
            age: 18,
            address: 'New York No. 1 Lake Park',
            date: '2016-10-03'
          },
          {
            flag: false,
            age: 24,
            address: 'London No. 1 Lake Park',
            date: '2016-10-01'
          },
          {
            flag: false,
            age: 30,
            address: 'Sydney No. 1 Lake Park',
            date: '2016-10-02'
          },
          {
            flag: false,
            age: 26,
            address: 'Ottawa No. 2 Lake Park',
            date: '2016-10-04'
          }
        ]
      }

    },
    methods: {
      demo() {

      },
      handlerClicked(val) {
        console.log(val);
        this.data1.forEach(function (item) {
          let {address, age, flag} = item;
          item.flag = address === val.address && age === val.age && flag === val.flag;
        })
      }
    }
  }
</script>
