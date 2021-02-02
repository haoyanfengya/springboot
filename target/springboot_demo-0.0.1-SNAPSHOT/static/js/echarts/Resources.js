var myChart;
var myChart1;
var myChart2;
var myChart3;
var myVar;

window.onload = function() {

    clearTimeout(myVar);
    draw()
}
function draw() {
    $.ajax({
        url : '../system/Resourcesresult',
        type : 'post',
        dataType : 'json',
        cache : false,
        async : false,
        success : function(data) {

            // 左下
            /** 把查询到的值放到对应位置 */
            var resourcesareavalue = [];
            var resourcesareaname = [];
            var map = eval(data.resourcesarea);
            for (var i = 0; i < map.length; i++) {
                resourcesareavalue[i] = data.resourcesarea[i].number;
                resourcesareaname[i] = data.resourcesarea[i].areas;
            }

            option = {
                color : [ '#21539c', '#3398db', '#7fc0fd', '#6ed5d6',
                    '#04a29d', '#cfa960', '#f1d85d', '#21539c',
                    '#3398db', '#7fc0fd', '#6ed5d6', '#04a29d',
                    '#cfa960', '#f1d85d' ],
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
                    data : resourcesareaname,

                    axisLine : {
                        lineStyle : {
                            type : 'solid',
                            color : 'white', // 左边线的颜色
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
                    name : '机构领域数目',
                    type : 'bar',

                    data :resourcesareavalue,


                } ]
            };

            if (myChart != null && myChart != ""
                && myChart != undefined) {
                myChart.dispose();
            }
            myChart = echarts.init(document
                .getElementById('leftbottom'));
            myChart.clear();
            // 使用制定的配置项和数据显示图表
            myChart.setOption(option);

            // 右下
            /** 把查询到的值放到对应位置 */
            var resourceslabvalue = [];
            var resourceslabname = [];
            var map = eval(data.resourceslab);
            for (var i = 0; i < map.length; i++) {
                resourceslabvalue[i] = data.resourceslab[i].number;
                resourceslabname[i] = data.resourceslab[i].areas;
            }

            option = {
                color : [ '#21539c', '#3398db', '#7fc0fd', '#6ed5d6',
                    '#04a29d', '#cfa960', '#f1d85d', '#21539c',
                    '#3398db', '#7fc0fd', '#6ed5d6', '#04a29d',
                    '#cfa960', '#f1d85d' ],
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
                    data : resourceslabname,

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
                    name : '机构重点实验室数目',
                    type : 'bar',

                    data :resourceslabvalue,
                    // barWidth : 30,

                } ]
            };

            if (myChart1 != null && myChart1 != ""
                && myChart1 != undefined) {
                myChart1.dispose();
            }
            myChart1 = echarts.init(document
                .getElementById('rightbottom'));
            myChart1.clear();
            // 使用制定的配置项和数据显示图表
            myChart1.setOption(option);

            // 左上
            /** 把查询到的值放到对应位置 */
            var resourceslevel=[];
            var resourceslevelname=[]
            var map=eval(data.resourceslevel);
            for(var i=0;i<map.length;i++){
                var resourceslevelsum = new Object();
                resourceslevelsum.name=data.resourceslevel[i].areas;
                resourceslevelsum.value=data.resourceslevel[i].number;
                resourceslevel[i]=resourceslevelsum;
                resourceslevelname[i]=data.resourceslevel[i].areas;
            }
            option = {
                color : [ '#21539c', '#3398db', '#7fc0fd', '#6ed5d6',
                    '#04a29d', '#cfa960', '#f1d85d', '#21539c',
                    '#3398db', '#7fc0fd', '#6ed5d6', '#04a29d',
                    '#cfa960', '#f1d85d' ],
                tooltip : {
                    trigger : 'item',
                    formatter : "{a} <br/>{b} : {c} ({d}%)"
                },
                legend : {
                    textStyle : {
                        fontSize : 14,
                        color : 'white',
                    },
                    icon : "rect", //   这个字段控制形状  类型包括 circle，rect
                    // ，roundRect，triangle，diamond，pin，arrow，none

                    itemWidth : 10, // 设置宽度

                    itemHeight : 10, // 设置高度

                    itemGap : 10,
                    orient : 'vertical',
                    left : 'left',
                    data : resourceslevelname,
                },
                series : [ {
                    name : '机构级别:数量(占比)',
                    type : 'pie',
                    radius : '55%',
                    center : [ '55%', '60%' ],
                    data :resourceslevel,
                    itemStyle : {
                        emphasis : {
                            shadowBlur : 10,
                            shadowOffsetX : 0,
                            shadowColor : 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                } ]
            };


            if (myChart2 != null && myChart2 != ""
                && myChart2 != undefined) {
                myChart2.dispose();
            }
            myChart2 = echarts.init(document.getElementById('lefttop'));
            myChart2.clear();
            // 使用制定的配置项和数据显示图表
            myChart2.setOption(option);

            // 右上
            /** 把查询到的值放到对应位置 */
            var resourcestypevalue = [];
            var resourcestypename = [];
            var map = eval(data.resourcestype);
            for (var i = 0; i < map.length; i++) {
                resourcestypevalue[i] = data.resourcestype[i].number;
                resourcestypename[i] = data.resourcestype[i].areas;
            }

            option = {
                color : [ '#21539c', '#3398db', '#7fc0fd', '#6ed5d6',
                    '#04a29d', '#cfa960', '#f1d85d', '#21539c',
                    '#3398db', '#7fc0fd', '#6ed5d6', '#04a29d',
                    '#cfa960', '#f1d85d' ],
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
                    data : resourcestypename,

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
                    name : '机构类型数目',
                    type : 'bar',

                    data :resourcestypevalue,
                    // barWidth : 30,

                } ]
            };

            if (myChart3 != null && myChart3 != ""
                && myChart3 != undefined) {
                myChart3.dispose();
            }
            myChart3 = echarts.init(document
                .getElementById('righttop'));
            myChart3.clear();
            // 使用制定的配置项和数据显示图表
            myChart3.setOption(option);



            window.addEventListener("resize", function() {
                myChart.resize();
                myChart1.resize();
                myChart2.resize();
                myChart3.resize();

            });

            myVar = setTimeout("draw()", 1000*60*60);
        }
    })
}