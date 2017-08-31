<template>
  <div class="page-picker">
    <div class="page-picker-wrapper">
      <mt-picker :slots="yearSlot" @change="onYearChange" :visible-item-count="3"></mt-picker>
    </div>
    <p class="page-picker-desc">出生年份: {{ year }}</p>

    <div class="page-picker-wrapper">
      <mt-picker :slots="dateSlots" @change="onDateChange" :visible-item-count="3"></mt-picker>
    </div>
    <p class="page-picker-desc">在校时间: {{ dateStart }} 至 {{ dateEnd }}</p>

    <div class="page-picker-wrapper" v-if="addressState">
      <mt-picker :slots="addressSlots" @change="onAddressChange" :visible-item-count="5"></mt-picker>
    </div>
    <p class="page-picker-desc">地址: {{ addressProvince }} {{ addressCity }}</p>
    
  </div>
</template>

<style>
  @component-namespace page {
    @component picker {
      padding: 0 10px 20px;
      @descendent wrapper {
        background-color: #fff;
        text-align: center;
      }
      @descendent desc {
        margin: 10px 0 50px;
      }
      .mint-button {
        margin-top: 15px;
      }
    }
  }
</style>

<script type="text/babel">

import Api from '@/libs/api.js';

import { Toast } from 'mint-ui';

var address = {};

export default {
    beforeCreate(){
      const _this = this;
      Api.getMap().then((res)=>{
        address = JSON.parse(res.data);
        _this.addressState = true;
        _this.addressSlots[0].values = Object.keys(address)
        console.log('数据获取成功');
      })
      .catch(()=>{
        Toast({
          message: '请求失败'
        });
      })
      
    },
    methods: {
      onYearChange(picker, values) {
        this.year = values[0];
      },
      onDateChange(picker, values) {
        if (values[0] > values[1]) {
          picker.setSlotValue(1, values[0]);
        }
        this.dateStart = values[0];
        this.dateEnd = values[1];
      },
      onAddressChange(picker, values) {
        picker.setSlotValues(1, address[values[0]]);
        this.addressProvince = values[0];
        this.addressCity = values[1];
      }
    },
    data() {
      return {
        year: '1984',
        number: 0,
        yearSlot: [{
          flex: 1,
          values: ['1984', '1985', '1986', '1987', '1988', '1989', '1990', '1991', '1992', '1993', '1994', '1995'],
          className: 'slot1'
        }],
        dateSlots: [
          {
            flex: 1,
            values: ['2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016'],
            className: 'slot1',
            textAlign: 'right'
          }, {
            divider: true,
            content: '-',
            className: 'slot2'
          }, {
            flex: 1,
            values: ['2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016'],
            className: 'slot3',
            textAlign: 'left'
          }
        ],
        dateStart: '2002',
        dateEnd: '2002',
        addressState: false,
        addressSlots: [
          {
            flex: 1,
            values: [],
            className: 'slot1',
            textAlign: 'center'
          }, {
            divider: true,
            content: '-',
            className: 'slot2'
          }, {
            flex: 1,
            values: ['北京'],
            className: 'slot3',
            textAlign: 'center'
          }
        ],
        addressProvince: '北京',
        addressCity: '北京'
      };
    },
    mounted() {
      this.$nextTick(() => {
        console.log('页面渲染完成');
      });
    }
  };
</script>
