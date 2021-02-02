
var myChart1;
var myChart2;
var myChart3;
var myChart4;
var myVar;

window.onload = function() {
	clearTimeout(myVar);
	draw()
}
function draw() {
	/***/
	$
			.ajax({
				url : '../system/InnovationVolumeresult',
				type : 'post',
				dataType : 'json',
				cache : false,
				async : false,
				success : function(data) {
					
					//创新券申请和通过情况
					/** 把查询到的值放到对应位置 */
					var centertopx=[];
					var centertopyleft=[];
					var centertopright=[];
					var map=eval(data.application);
					for(var i=0;i<map.length;i++){
						centertopx[i]=data.application[i].areas+"月";
						centertopyleft[i]=data.application[i].number;
						centertopright[i]=data.application[i].number2;
					}
					
					
					option = {
						color : [ '#21539c', '#3398db', '#7fc0fd', '#6ed5d6',
								'#04a29d', '#cfa960', '#f1d85d', '#21539c',
								'#3398db', '#7fc0fd', '#6ed5d6', '#04a29d',
								'#cfa960', '#f1d85d' ],
						tooltip : {
							trigger : 'axis',
							axisPointer : {
								// type: 'cross',
								crossStyle : {
									color : 'white'
								}
							}
						},
						grid : {
							width : '75%'
						},
						legend : {
							data : []
						},
						xAxis : [ {
							type : 'category',
							data :centertopx,
							axisPointer : {
								type : 'shadow'
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
									fontSize : 10,
									color : 'white'
								},
								/*interval : 0,// 横轴信息全部显示
								rotate : -340,// -30度角倾斜显示*/

							},
						} ],

						yAxis : [ {
							type : 'value',
							name : '创新券申请数量',
							
							axisLabel : {
								formatter : '{value}  '
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
									fontSize : 10,
									color : 'white'
								},

							},
							splitLine : { // 网格线
								lineStyle : {
									type : 'dashed' // 设置网格线类型 dotted：虚线
								// solid:实线
								},
								show : false
							// 隐藏或显示
							},
						}, {
							type : 'value',
							name : '创新券通过数量',
							
							axisLabel : {
								formatter : '{value}'
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
									fontSize : 10,
									color : 'white'
								},

							},splitLine : { // 网格线
								lineStyle : {
									type : 'dashed' // 设置网格线类型 dotted：虚线
								// solid:实线
								},
								show : false
							// 隐藏或显示
							},
						}

						],
						series : [
								{
									name : '创新券申请数量',
									type : 'bar',
									data : centertopyleft
								},
								{
									name : '创新券发放数量',
									type : 'line',
									yAxisIndex : 1,
									data :centertopright
								} ]
					};
					if (myChart1 != null && myChart1 != ""
							&& myChart1 != undefined) {
						myChart1.dispose();
					}
					myChart1 = echarts.init(document
							.getElementById('centerbottom'));
					myChart1.clear();
					// 使用制定的配置项和数据显示图表
					myChart1.setOption(option);
					///通过审核的企业所属区域分布饼图
					/** 把查询到的值放到对应位置 */
					var centerbotom=[];
					var centerbotomname=[];
					var map=eval(data.area);
					for(var i=0;i<map.length;i++){
						var centerbotomsum = new Object();
						centerbotomsum.name=data.area[i].areas;
						centerbotomsum.value=data.area[i].number;
						centerbotom[i]=centerbotomsum;
						centerbotomname[i]=data.area[i].areas;
					}
					
				/*	option = {
						color : [ '#21539c', '#3398db', '#7fc0fd', '#6ed5d6',
								'#04a29d', '#cfa960', '#f1d85d', '#21539c',
								'#3398db', '#7fc0fd', '#6ed5d6', '#04a29d',
								'#cfa960', '#f1d85d' ],
						tooltip : {
							trigger : 'item',
							formatter : "{a} <br/>{b} : {c}家 ({d}%)"
						},
						/*legend : {
							orient : 'vertical',
							left : 'left',
							data : centerbotomname
						},
						series : [ {
							name : '所属区域:数量(占比)',
							type : 'pie',
							radius : '55%',
							center : [ '50%', '60%' ],
							data :centerbotom,
							itemStyle : {
								emphasis : {
									shadowBlur : 10,
									shadowOffsetX : 0,
									shadowColor : 'rgba(0, 0, 0, 0.5)'
								}
							}
						} ]
					};*/
					  var formatUtil = echarts.format;


					  option = {
					      
					       tooltip: {
					    	   
					              formatter: function (info) {
					                  var value = info.value;
					                  var treePathInfo = info.treePathInfo;
					                  var treePath = [];

					                  for (var i = 1; i < treePathInfo.length; i++) {
					                      treePath.push(treePathInfo[i].name);
					                  }

					                  return [
					                      '<div class="tooltip-title">' + formatUtil.encodeHTML(treePath.join(':')) + '</div>',
					                      '通过数量: ' + formatUtil.addCommas(value) ,
					                  ].join('');
					              }
					          },
					          textStyle:{
					        	    fontSize:'20'
					        	},
					      series: [{
					    	  
					    	   breadcrumb:false,
					          		color:['#21539c', '#3398db', '#7fc0fd', '#6ed5d6',
					  							'#04a29d', '#cfa960', '#f1d85d','#21539c', '#3398db', '#7fc0fd', '#6ed5d6',
					  							'#04a29d', '#cfa960', '#f1d85d'  ],
					  						
					          type: 'treemap',
					          data: [ {
					              name: '所属区域',            // Second tree
					              
					              children:centerbotom,
					          }]
					      }]
					  };

					if (myChart2 != null && myChart2 != ""
							&& myChart2 != undefined) {
						myChart2.dispose();
					}
					myChart2 = echarts.init(document
							.getElementById('rightbottom'));
					myChart2.clear();
					myChart2.setOption(option);
					
					//通过审核企业单位性质分布饼图
					/** 把查询到的值放到对应位置 */
					var leftbottom=[];
					var leftbottomname=[];
					var map=eval(data.unitnature);
					for(var i=0;i<map.length;i++){
						var leftbottomsum = new Object();
						leftbottomsum.name=data.unitnature[i].areas;
						leftbottomsum.value=data.unitnature[i].number;
						leftbottom[i]=leftbottomsum;
						leftbottomname[i]=data.unitnature[i].areas;
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
						/*legend : {
							orient : 'vertical',
							left : 'left',
							data : leftbottomname
						},*/
						series : [ {
							name : '企业单位性质:数量(占比)',
							type : 'pie',
							radius : '55%',
							center : [ '50%', '60%' ],
							data : leftbottom,
							itemStyle : {
								emphasis : {
									shadowBlur : 10,
									shadowOffsetX : 0,
									shadowColor : 'rgba(0, 0, 0, 0.5)'
								}
							}
						} ]
					};
					if (myChart3 != null && myChart3 != ""
							&& myChart3 != undefined) {
						myChart3.dispose();
					}
					myChart3 = echarts.init(document
							.getElementById('leftbottom'));
					myChart3.clear();
					myChart3.setOption(option);
					//申请创新券的产业领域饼图
					/** 把查询到的值放到对应位置 */
					var rightbottom=[];
					var rightbottomname=[];
					var map=eval(data.industry);
					for(var i=0;i<map.length;i++){
						var rightbottomsum = new Object();
						rightbottomsum.name=data.industry[i].areas;
						rightbottomsum.value=data.industry[i].number;
						rightbottom[i]=rightbottomsum;
						rightbottomname[i]=data.industry[i].areas;
					}
				/*	option = {
						color : [ '#21539c', '#3398db', '#7fc0fd', '#6ed5d6',
								'#04a29d', '#cfa960', '#f1d85d', '#21539c',
								'#3398db', '#7fc0fd', '#6ed5d6', '#04a29d',
								'#cfa960', '#f1d85d' ],
						tooltip : {
							trigger : 'item',
							formatter : "{a} <br/>{b} : {c} ({d}%)"
						},
						/*legend : {
							orient : 'vertical',
							left : 'left',
							data :rightbottomname
						},
						series : [ {
							name : '产业领域:数量(占比)',
							type : 'pie',
							radius : '55%',
							center : [ '50%', '60%' ],
							data :rightbottom,
							itemStyle : {
								emphasis : {
									shadowBlur : 10,
									shadowOffsetX : 0,
									shadowColor : 'rgba(0, 0, 0, 0.5)'
								}
							}
						} ]
					};*/
					if (myChart4 != null && myChart4 != ""
							&& myChart4 != undefined) {
						myChart4.dispose();
					}
					myChart4 = echarts.init(document
							.getElementById('centertop'));
					myChart4.clear();
					//myChart4.setOption(option);
					  var maskImage = new Image();
			           maskImage.src ="data:image/png;base64,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"
					   maskImage.onload = function () {
			               myChart4.setOption({
			                   
			                   tooltip: {
			                       show: true,
			                       formatter : "{a} <br/>{b} : {c} "
			                   },
			                   series: [{
			                   		name:'产业领域:数量',
			                           type: 'wordCloud',
			                           gridSize: 1,
			                           sizeRange: [25,30],
			                           rotationRange:[0,0],
			                           maskImage: maskImage,
			                           textStyle: {
			                               normal: {
			                                   color: 
			                                function (params){
			                   var colorList =['#21539c', '#3398db', '#7fc0fd', '#6ed5d6',
									'#04a29d', '#cfa960', '#f1d85d','#21539c', '#3398db', '#7fc0fd', '#6ed5d6',
									'#04a29d', '#cfa960', '#f1d85d'  ];
			                   return colorList[params.dataIndex%colorList.length];

			                     }
			                               }
			                           },
			                           left: '14%',
			                           top: '8%',
			                      
			                          
			                           data: rightbottom
			                       }]
			               })
			           }
					
					
					document.getElementById('cxjshenqing').innerText=data.shenqingshuliang;
					document.getElementById('cxjyitongguo').innerText=data.applicationsnumber;
					document.getElementById('cxjshenqingedu').innerText=data.applyofquota+'万元';
					document.getElementById('cxjfafangedu').innerText=data.credit+'万元';
					/***左一表格数据*/
					var leftone=[];
				
					var map=eval(data.servicetype);
					for(var i=0;i<map.length;i++){
						var leftonesum = new Object();
						leftonesum.name=data.servicetype[i].areas;
						leftonesum.value=data.servicetype[i].number;
						leftone[i]=leftonesum;
					}
					for(var is=0;is<leftone.length;is++){
						document.getElementById('leftone['+is+'].name').innerText=leftone[is].name;
						document.getElementById('leftone['+is+'].value').innerText=leftone[is].value;
					}
				/**左二*/
					var lefttwo=[];
					
					var map=eval(data.findings);
					for(var i=0;i<map.length;i++){
						var lefttwosum = new Object();
						lefttwosum.name=data.findings[i].areas;
						lefttwosum.value=data.findings[i].number;
						lefttwo[i]=lefttwosum;
					}
					document.getElementById('gaoxin').innerText=0;
					document.getElementById('shikeji').innerText=0;
					document.getElementById('shixiaojuren').innerText=0;
					document.getElementById('shipeiyu').innerText=0;
					document.getElementById('shigaoxin').innerText=0;
					document.getElementById('qita').innerText=0;
					document.getElementById('quxiaojuren').innerText=0;
					
					
					for(var is=0;is<7;is++){
						if('高新技术产业'==lefttwo[is].name){
							document.getElementById('gaoxin').innerText=lefttwo[is].value;
						}else if('市科技型企业'==lefttwo[is].name){
							document.getElementById('shikeji').innerText=lefttwo[is].value;
						}else if('市小巨人企业'==lefttwo[is].name){
							document.getElementById('shixiaojuren').innerText=lefttwo[is].value;
						}else if('市小巨人培育企业'==lefttwo[is].name){
							document.getElementById('shipeiyu').innerText=lefttwo[is].value;
						}else if('市高新技术培育企业'==lefttwo[is].name){
							document.getElementById('shigaoxin').innerText=lefttwo[is].value;
							
						}else if('以上都不是'==lefttwo[is].name){
							document.getElementById('qita').innerText=lefttwo[is].value;
						}else if('区小巨人企业'==lefttwo[is].name){
							document.getElementById('quxiaojuren').innerText=lefttwo[is].value;
						}
						
					}
					
					
					window.addEventListener("resize", function() {

				
						myChart1.resize();
						myChart2.resize();
						myChart3.resize();
						myChart4.resize();
						/*
						 * myChart5.resize(); myChart6.resize();
						 */

					});
					myVar = setTimeout("draw()", 1000*60*60);
				}
			})
}