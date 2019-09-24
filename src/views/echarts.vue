<template>
    <div style="display: flex;">
        <div id="bar" style="width: 500px;height: 400px;"></div>
        <div id="pie" style="width: 500px;height: 400px;"></div>
    </div>
</template>

<script>
import echarts from 'echarts'

export default {
    name: 'echarts',
    methods: {
        /**
         * 柱形图
         */
        initBar () {
            let myecharts = echarts.init(document.getElementById('bar'));
            let opt = {
                title: {
                    text: 'ECharts 入门示例'
                },
                tooltip: {},
                xAxis: {
                    data: ['eee', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
                },
                yAxis: {},
                series: [{
                    name: '销量',
                    type: 'bar',
                    data: [5, 20, 36, 10, 10, 20]
                },{
                    name: '价格',
                    type: 'bar',
                    data: [8, 25, 39, 18, 20, 24]
                }]
            }
            myecharts.setOption(opt);
        },
        /**
         * 饼状图  --  南丁格尔图
         */
        initPie () {
            let myecharts = echarts.init(document.getElementById('pie'),'dark');
            let opt = {
                series: [{
                    name: '销量',
                    type: 'pie',
                    // color: ['#37A2DA', '#32C5E9', '#67E0E3', '#9FE6B8', '#FFDB5C','#ff9f7f', '#fb7293', '#E062AE', '#E690D1', '#e7bcf3', '#9d96f5', '#8378EA', '#96BFFF'],
                    radius: '50%',
                    roseType: 'angle',
                    data: [
                        { value: 234, name: 'video ad'},
                        { value: 274, name: 'audio ad'},
                        { value: 336, name: 'email ad'},
                        { value: 392, name: 'new ad'},
                        { value: 423, name: 'search ad'},
                    ],
                    itemStyle: {
                        normal: {
                            shadowBlur: 100,
                            shadowColor: 'pink'
                        }
                    }
                }]
            }
            myecharts.setOption(opt);
        },
    },
    mounted () {
        this.initBar();
        this.initPie();
    },
}
</script>