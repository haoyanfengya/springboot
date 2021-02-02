var myChart;
var myChart1;
var myVar;

window.onload = function() {

    clearTimeout(myVar);
    draw()
}

function draw() {
    /***/
    $
        .ajax({
            url : '../system/PolicyNumresult',
            type : 'post',
            dataType : 'json',
            cache : false,
            async : false,
            success : function(data) {
                //政策发布数量
                /** 把查询到的值放到对应位置 */
                var zhengcefaguifabuname=[];
                var zhengcefaguifabuvalue=[];

                var map=eval(data.zhengcefaguifabu);
                for(var i=0;i<map.length;i++){

                    zhengcefaguifabuname[i]=data.zhengcefaguifabu[i].areas;
                    zhengcefaguifabuvalue[i]=data.zhengcefaguifabu[i].number;
                }
                option = {
                    color : [ '#3398DB' ],
                    tooltip : {
                        trigger : 'axis',
                        axisPointer : { // 坐标轴指示器，坐标轴触发有效
                            type : 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },

                    grid : {
                        left : '3%',
                        right : '4%',
                        bottom : '13%',
                        containLabel : true
                    },
                    xAxis : [ {

                        type : 'category',
                        data :zhengcefaguifabuname,
                        axisTick : {
                            alignWithLabel : true
                        },
                        axisLine : {
                            lineStyle : {
                                type : 'solid',
                                color : 'white',// 左边线的颜色
                                //  width:'2'//坐标线的宽度
                            }
                        },
                        // 设置颜色
                        axisLabel : {
                            inside : false,
                            textStyle : {
                                fontSize : 15,
                                color : 'white'
                            },

                        },
                    } ],
                    yAxis : [ {
                        type : 'value',
                        axisLine : {
                            lineStyle : {
                                type : 'solid',
                                color : 'white',// 左边线的颜色
                                //  width:'2'//坐标线的宽度
                            }
                        },
                        // 设置颜色
                        axisLabel : {
                            inside : false,
                            textStyle : {
                                fontSize : 15,
                                color : 'white'
                            },

                        },

                    } ],

                    series : [ {
                        name : '政策法规',
                        type : 'bar',
                        barMaxWidth:'70',
                        data :zhengcefaguifabuvalue,

                    } ]
                };
                if (myChart != null && myChart != ""
                    && myChart != undefined) {
                    myChart.dispose();
                }
                myChart = echarts.init(document.getElementById('left'));
                myChart.clear();
                // 使用制定的配置项和数据显示图表
                myChart.setOption(option);




                //政策法规类型分布
                /** 把查询到的值放到对应位置 */
                var leixingfenbuvalue = [];
                var leixingfenbuname = [];
                var map = eval(data.leixingfenbu);
                for (var i = 0; i < map.length; i++) {


                    leixingfenbuvalue[i] = data.leixingfenbu[i].number;

                    leixingfenbuname[i] = data.leixingfenbu[i].areas;
                }

                option = {
                    color : [ '#21539c', '#3398db', '#7fc0fd', '#6ed5d6',
                                '#04a29d', '#cfa960','#fec069', '#f1d85d',
                            ],
                    tooltip : {
                        trigger : 'axis',
                        axisPointer : { // 坐标轴指示器，坐标轴触发有效
                            type : 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    grid : {
                        left : '3%',
                        right : '4%',
                        bottom : '5%',
                        containLabel : true
                    },
                    xAxis : [ {
                        type : 'value',
                        boundaryGap : [ 0, 0.01 ],
                        // 设置颜色
                        axisLabel : {

                            textStyle : {
                                fontSize : 10,
                                color : 'white'
                            }
                        },
                        axisLine : {
                            lineStyle : {
                                type : 'solid',
                                color : 'white',// 左边线的颜色
                                //  width:'2'//坐标线的宽度
                            }
                        },
                        splitLine : { // 网格线
                            lineStyle : {
                                type : 'dashed' // 设置网格线类型 dotted：虚线
                                // solid:实线
                            },
                            show : false
                            // 隐藏或显示
                        },

                    } ],
                    yAxis : [ {
                        axisTick : {
                            show : false
                        },
                        type : 'category',
                        data : leixingfenbuname,

                        axisLine : {
                            lineStyle : {
                                type : 'solid',
                                color : 'white',// 左边线的颜色
                                //  width:'2'//坐标线的宽度
                            }
                        },
                        // 设置颜色
                        axisLabel : {
                            // inside : true,
                            textStyle : {
                                fontSize : 12,
                                color : 'white'
                            },

                        },
                        z : 20,
                    } ],
                    series : [ {
                        name : '政策类型数目',
                        type : 'bar',

                        data :leixingfenbuvalue,
                        // barWidth : 30,

                    } ]
                };

                if (myChart1 != null && myChart1 != ""
                    && myChart1 != undefined) {
                    myChart1.dispose();
                }
                myChart1 = echarts
                    .init(document.getElementById('right'));
                myChart1.clear();
                myChart1.setOption(option);

                document.getElementById('zhengcefabu').innerText=data.zhengcefabushuliang;
                window.addEventListener("resize", function() {

                    myChart.resize();
                    myChart1.resize();

                });
                myVar = setTimeout("draw()", 1000*60*60);
            }
        })
}