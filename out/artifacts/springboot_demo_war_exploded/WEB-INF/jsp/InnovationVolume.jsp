<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<c:set var="proPath" value="${pageContext.request.contextPath}" />
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>创新券申请情况</title>
<script type="text/javascript" src="${proPath}/static/js/jquery.min.js"></script>
<link rel="stylesheet" href="${proPath}/static/css/bootstrap.css" />
<script type="text/javascript" src="${proPath}/static/layui/layui.js"></script>
<link rel="stylesheet" href="${proPath}/static/layui/css/layui.css" />
<script type="text/javascript" src="${proPath}/static/js/echarts.js"></script>
<script type="text/javascript" src="${proPath}/static/js/echarts-wordcloud.min.js"></script>

<!-- 下载 -->
<script type="text/javascript" src="${proPath}/static/js/html2canvas.js" ></script>
<script type="text/javascript" src="${proPath}/static/js/jspdf.debug.js" ></script>
<script type="text/javascript" src="${proPath}/static/js/down.js" ></script>

<script type="text/javascript" src="${proPath}/static/js/echarts/InnovationVolume.js"></script>
</head>
<style>
			html,body,#pdf{
				width: 100%;
				height: 100%;
				margin: 0px;
				border: 0px;
				overflow: hidden;
				color: white;
				font-size:1.1rem;
			}

#title{
				font-size:2rem;
				position: absolute;
				top: 1.5rem;
			
				color: white;
				width: 100%;
				z-index:500;
				
				text-align: center;
			}


/*td{
border: 1px solid red;
}
div{
border: 1px solid red;
}*/

table {
	text-align: center;
}
.value {
	color: rgb(76,164,205);
	
}

.name{

text-align: left;}
.reportname{
font-size: 1.2rem;}
</style>
<body>
	<a href="javascript:downpdf('创新券申请情况')">
<img src="${proPath}/static/img/public/exp.png" style="position: absolute;top:6.2%;right:4.5%;z-index:700;" title="点击导出pdf" >
</a>
<a href="${proPath}/system/home"> <img
		src="${proPath}/static/img/public/return.png"
		style="z-index: 200; border-radius: 10px; position: absolute; top: 6%; right: 1.5%; width: 1.5%; height: 3%;"
		title="点击返回主页">
	</a>
		<div id="pdf">
	<img src="${proPath}/static/img/InnovationVolume/allback.png"
		style="width: 100%; height: 100%; z-index: 50;" />
	<img src="${proPath}/static/img/InnovationVolume/background.png"
		style="width: 100%; height: 100%; z-index: 150; position: absolute; top: 0%;">
	
	<table id="title">
		<tr>
			<td >创新券申请情况</td>
		</tr>
	</table>

	<table
		style="width: 49%; z-index: 150; position: absolute; top: 10.5%; height: 11.3%; left: 1.5%;font-size: 1.2rem;">
		<tr>
			<td style="width: 29.25%">创新券申请数量</td>
			<td style="width: 20%; color:  #f1d85d; font-size: 2rem;" id="cxjshenqing"></td>
			<td style="width: 1.2%"></td>
			<td style="width: 29.25%">已通过申请数量</td>
			<td style="width: 20%; color: #f1d85d; font-size: 2rem;" id="cxjyitongguo"></td>
		</tr>
	</table>
	<table
		style="width: 47.5%; z-index: 150; position: absolute; top: 10.5%; height: 11.3%; left: 51%;font-size: 1.2rem;">
		<tr>
			<td style="width: 29.25%">创新券申请额度</td>
			<td style="width: 20.5%; color: #f1d85d; font-size: 2rem;" id="cxjshenqingedu"></td>
			<td style="width: 1.2%"></td>
			<td style="width: 29.25%">创新券发放额度</td>
			<td style="width: 20%; color: #f1d85d; font-size: 2rem;" id="cxjfafangedu"></td>
		</tr>
	</table>
	<table
		style="width: 32.3%; z-index: 150; position: absolute; top: 25%; height: 4.5%; left: 1.5%;font-size: 1.2rem;">
		<tr>
			<td >企业购买服务类别</td>
		
		</tr>
	</table>
	<table style="width: 32.3%; z-index: 150; position: absolute; top: 29.5%; height: 29.5%; left: 1.5%;font-size: 1rem;" >
		<tr>
		<td style="width: 20%;"></td>
			<td style="width: 35%; height: 4%" id="leftone[0].name" class="name"></td>
		    <td style="width: 35%; height: 4%" id="leftone[0].value" class="value"></td>
		    <td style="width: 10%;"></td>
		</tr>
		<tr>
	<td style="width: 20%;"></td>
		<td style="width: 35%; height: 4%" id="leftone[1].name" class="name"></td>
		<td style="width: 35%; height: 4%" id="leftone[1].value" class="value"></td>
		<td style="width:10%;"></td>
	</tr>
	<tr>
<td style="width: 20%;"></td>
			<td style="width: 35%; height: 4%" id="leftone[2].name" class="name"></td>
		    <td style="width: 35%; height: 4%" id="leftone[2].value" class="value"></td>
		    <td style="width: 10%;"></td>
		</tr>
		<tr>
		<td style="width: 20%;"></td>
			<td style="width: 35%; height: 4%" id="leftone[3].name" class="name"></td>
		    <td style="width:35%; height: 4%" id="leftone[3].value" class="value"></td>
		    <td style="width: 10%;"></td>
		</tr>
		<tr>
		<td style="width: 20%;"></td>
			<td style="width: 35%; height: 4%" id="leftone[4].name" class="name"></td>
		    <td style="width: 35%; height: 4%" id="leftone[4].value" class="value"></td>
		    <td style="width: 10%;"></td>
		</tr>
		<tr>
		<td style="width: 20%;"></td>
			<td style="width: 35%; height: 4%" id="leftone[5].name" class="name"></td>
		    <td style="width: 35%; height: 4%" id="leftone[5].value" class="value"></td>
		    <td style="width: 10%;"></td>
		</tr>
		<tr>
		<td style="width: 20%;"></td>
			<td style="width: 35%; height: 4%" id="leftone[6].name" class="name"></td>
		    <td style="width: 35%; height: 4%" id="leftone[6].value" class="value"></td>
		    <td style="width: 10%;"></td>
		</tr>
		<tr>
		<td style="width: 20%;"></td>
			<td style="width: 35%; height: 4%" id="leftone[7].name" class="name"></td>
		    <td style="width: 35%; height: 4%" id="leftone[7].value" class="value"></td>
		    <td style="width: 10%;"></td>
		</tr>
	</table>
		<table
		style="width: 32.3%; z-index: 150; position: absolute; top: 60%; height: 4.5%; left: 1.6%;font-size: 1.2rem;">
		<tr>
			<td >申请创新券企业认定情况</td>
		
		</tr>
	</table>
	<table
		style="width: 32.3%; z-index: 150; position: absolute; top: 64.6%; height: 29.4%; left: 1.6%;font-size: 1rem;">
		<tr>
	<td style="width: 20%;"></td>
			<td style="width: 35%; height: 4%" class="name">高新技术产业</td>
		    <td style="width: 35%; height: 4%" id="gaoxin" class="value"></td>
		    <td style="width: 10%;"></td>
		</tr>
		<tr>
		<td style="width: 20%;"></td>
		<td style="width: 35%; height: 4%" class="name">市科技型企业</td>
		<td style="width: 35%; height: 4%" id="shikeji" class="value"></td>
		<td style="width: 10%;"></td>
	</tr>
	<tr>
	<td style="width: 20%;"></td>
			<td style="width: 35%; height: 4%" class="name">市小巨人企业</td>
		    <td style="width: 35%; height: 4%" id="shixiaojuren" class="value"></td>
		    <td style="width: 10%;"></td>
		</tr>
		<tr>
		<td style="width: 20%;"></td>
			<td style="width: 35%; height: 4%;" class="name">市小巨人培育企业</td>
		    <td style="width: 35%; height: 4%" id="shipeiyu" class="value"></td>
		    <td style="width: 10%;"></td>
		</tr>
		<tr>
		<td style="width: 20%;"></td>
			<td style="width: 35%; height: 4%;" class="name">市高新技术培育企业</td>
		    <td style="width: 35%; height: 4%" id="shigaoxin" class="value"></td>
		    <td style="width: 10%;"></td>
		</tr>
		
		<tr>
		<td style="width: 20%;"></td>
			<td style="width: 35%; height: 4%" class="name">区小巨人企业</td>
		    <td style="width: 35%; height: 4%" id="quxiaojuren" class="value"></td>
		    <td style="width: 10%;"></td>
		</tr>
		<tr>
		<td style="width: 20%;"></td>
			<td style="width: 35%; height: 4%"  class="name">以上都不是</td>
		    <td style="width: 35%; height: 4%" id="qita" class="value"></td>
		    <td style="width: 10%;"></td>
		</tr>
	</table>
	<table
		style="width: 64.2%; z-index: 150; position: absolute; top: 25%; height: 4.8%; left: 34.4%">
		<tr>
		<td style="width: 49.7%" class="reportname">申请创新券的产业领域图</td>
			<td style="width: 1%"></td>
			<td style="width: 49.3%" class="reportname">申请创新券企业单位性质分布图</td>
			
		</tr>
	</table>
	<table
		style="width: 64.2%; z-index: 150; position: absolute; top: 59.5%; height: 4.8%; left: 34.3%">
		<tr>
			
			<td style="width: 49.7%" class="reportname">2019年度创新券申请和通过情况</td>
			<td style="width: 1%"></td>
			
			<td style="width: 49.3%" class="reportname">申请创新券企业所属区域分布图</td>
		</tr>
	</table>
	<div id="centertop"
	style="position: absolute; top: 30%; width: 32%; height: 29.1%; z-index: 300; left: 34.3%; "></div>
<div id="leftbottom"
	style="position: absolute; top: 30%; width:  31.7%; height: 29.1%; z-index: 300; left: 66.8%; "></div>

<div id="centerbottom"
	style="position: absolute; top: 64.5%; width:  32%; height:29.5%; z-index: 300; left: 34.3%; "></div>
<div id="rightbottom"
	style="position: absolute; top: 70%; width:  25%; height: 20%; z-index: 300; left: 70%; "></div>
	
	</div>
</body>

</html>
