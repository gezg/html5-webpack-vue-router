<template>
<div class="page-picker">
    <div style="padding: 20px;">
        <router-link to="calendar" style="text-decoration: none;">
            <mt-button plain size="large" type="primary" >日历页面</mt-button>
        </router-link>
    </div>
    <div class="page-picker-wrapper" v-if="addressState">
        <mt-picker :slots="dateSlots" @change="onDateChange" :visible-item-count="3"></mt-picker>
    </div>
    <p class="page-picker-desc">在校时间: {{ dateStart }} 至 {{ dateEnd }}</p>
    <div class="page-picker-wrapper">
        <mt-picker :slots="addressSlots" @change="onAddressChange" :visible-item-count="5"></mt-picker>
    </div>
    <p class="page-picker-desc">地址Ajax获取: {{ addressProvince }} {{ addressCity }}</p>
    <!-- defaultIndex 参数变化 -->
    <div class="page-picker-wrapper">
        <mt-picker :slots="numberSlot" @change="onNumberChange" :visible-item-count="3"></mt-picker>
    </div>
    <p class="page-picker-desc">动态默认选项: {{ number }}</p>
</div>
</template>

<script>

import Api from '@/libs/api';

let address = {};

export default {
    beforeCreate(){
        const _this = this;
        Api.getMap().then(function(res) {
            address = JSON.parse(res.data);
            _this.addressState = true;
            _this.addressSlots[0].values = Object.keys(address);
        }).catch(function(error) {
            console.log('请求失败......');
        });
    },
    methods: {
        onDateChange(picker, values) {
            if (values[0] > values[1]) {
                picker.setSlotValue(1, values[0]);
            }
            this.dateStart = values[0];
            this.dateEnd = values[1];
        },
        onNumberChange(picker, values) {
            this.number = values[0];
        },
        onAddressChange(picker, values) {
            picker.setSlotValues(1, address[values[0]]);
            this.addressProvince = values[0];
            this.addressCity = values[1];
        }
    },
    data() {
        return {
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
            //地区选择
            addressState: false,
            addressSlots: [{
                flex: 1,
                values: Object.keys(address),
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
            }],
            addressProvince: '北京',
            addressCity: '北京',
            //defaultIndex
            number: 0,
            numberSlot: [{
                flex: 1,
                defaultIndex: 0,
                values: [0, 1, 2, 3, 4, 5, 6],
                className: 'slot1'
            }],
        };
    },
    mounted() {
        this.$nextTick(() => {
            let step = 0;
            setInterval(() => {
                this.numberSlot[0].defaultIndex = step++;
                if (step > this.numberSlot[0].values.length - 1) {
                    step = 0;
                }
            }, 1000);
        });
    }
};
</script>

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