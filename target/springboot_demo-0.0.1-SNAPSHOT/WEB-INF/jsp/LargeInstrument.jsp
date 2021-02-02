<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<c:set var="proPath" value="${pageContext.request.contextPath}" />
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>大型仪器分布情况</title>
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

<!--这个页面图表制作的js -->
<script type="text/javascript"
	src="${proPath}/static/js/echarts/LargeInstrument.js"></script>
</head>
<style>
html, body,#pdf {
	width: 100%;
	height: 100%;
	margin: 0px;
	border: 0px;
	overflow: hidden;
	color: white;
	font-size: 18px;
}

#title {
	font-size: 2rem;
	z-index: 150;
	position: absolute;
	top: 3%;
	width: 100%;
	text-align: center;
	color: white;
}

table {
	text-align: center;
}

.value {
	color: #f1d85d;
	font-size: 1.2rem;
}

.name {
	font-size: 1.2rem;
}



.reportname {
	font-size: 1.3rem;
}

/*td {
	border: 1px solid green;
}


div{
border: 1px solid yellow;
}*/
</style>
<body>
	<a href="javascript:downpdf('大型仪器分布情况')">
<img src="${proPath}/static/img/public/exp.png" style="position: absolute;top:6.2%;right:4.5%;z-index:700;" title="点击导出pdf" >
</a>
<a href="${proPath}/system/home"> <img
		src="${proPath}/static/img/public/return.png"
		style="z-index: 200; border-radius: 10px; position: absolute; top: 6%; right: 1.5%; width: 1.5%; height: 3%;"
		title="点击返回主页">
	</a>
	<div id="pdf">
	<img src="${proPath}/static/img/LargeInstrument/allback.png"
		style="width: 100%; height: 100%;" />
	<img src="${proPath}/static/img/LargeInstrument/background.png"
		style="width: 100%; height: 100%; z-index: 150; position: absolute; top: 0%;">
	
	<table id="title">
		<tr>
			<td>大型仪器分布情况</td>
		</tr>

	</table>
	<!-- 左上 -->
	<table
		style="width: 47.3%; height: 11.5%; position: absolute; top: 12%; z-index: 150; left: 2.4%;">
		<tr>
			<td style="width: 49.5%;" class="name">大型仪器发布数</td>
			<td style="width: 1%;"></td>
			<td style="width: 49.5%;" class="name">仪器原值(万元)</td>
		</tr>
		<tr>
			<td id="fabushu" class="value"></td>
			<td></td>
			<td id="yuanzhi"  class="value"></td>
		</tr>
	</table>

	<!-- 右上 -->
	<table
		style="width: 47.5%; height: 3.5%; position: absolute; top: 12%; z-index: 150; left: 50.1%;">
		<tr>
			<td class="reportname">仪器机构类型分布图</td>

		</tr>
	</table>
	<div
		style="width: 47.5%; height: 42%; position: absolute; top: 16%; z-index: 150; left: 50.2%;"
		id="jigouleixingfenbu"></div>

	<!-- 左中 -->
	<table
		style="width: 47.3%; height: 3.5%; position: absolute; top: 24%; z-index: 150; left: 2.4%;">
		<tr>
			<td class="reportname">仪器领域分布图</td>
		</tr>
	</table>
	<div
		style="width: 47.3%; height: 40%; position: absolute; top: 28%; z-index: 150; left: 2.4%;"
		id="leftcenter"></div>
	

	<!-- 左下 -->
	<table
		style="width: 47.3%; height: 3.5%; position: absolute; top: 69%; z-index: 150; left: 2.4%;">
		<tr>
			<td class="reportname">大型仪器年增长情况</td>
		</tr>
	</table>
	<div
		style="width: 47.3%; height: 24%; position: absolute; top: 72.5%; z-index: 150; left: 2.4%;"
		id="zengzhang"></div>
	<!-- 右下 -->
	<table
		style="width: 47.3%; height: 3.5%; position: absolute; top: 60%; z-index: 150; left: 50.4%;">
		<tr>
			<td class="reportname">仪器分类图</td>
		</tr>
	</table>
	<div
		style="width: 47.3%; height: 35.5%; position: absolute; top:65%; z-index: 150; left: 50.4%;"
		id="yiqifenlei"></div>
		</div>
</body>

</html>
