<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<c:set var="proPath" value="${pageContext.request.contextPath}" />
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>科技需求数量</title>
<script type="text/javascript" src="${proPath}/static/js/jquery.min.js" ></script>
<link rel="stylesheet" href="${proPath}/static/css/bootstrap.css" />
<script type="text/javascript" src="${proPath}/static/layui/layui.js"></script>
<link rel="stylesheet" href="${proPath}/static/layui/css/layui.css" />
<script type="text/javascript" src="${proPath}/static/js/echarts.js" ></script>

<!-- 下载 -->
<script type="text/javascript" src="${proPath}/static/js/html2canvas.js" ></script>
<script type="text/javascript" src="${proPath}/static/js/jspdf.debug.js" ></script>
<script type="text/javascript" src="${proPath}/static/js/down.js" ></script>

<!--这个页面图表制作的js -->
<script type="text/javascript" src="${proPath}/static/js/echarts/TechnologyNeeds.js"></script>
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
.name{
font-size: 1.2rem;
}
.value {
	color: #f1d85d;
	font-size: 1.2rem;
}

/*td {
	border: 1px solid green;
}
div{
border: 1px solid yellow;
}*/
table {
	text-align: center;
}
.reportname{
font-size:1.4rem;
}
</style>
<body>
	<a href="javascript:downpdf('科技需求数量')">
<img src="${proPath}/static/img/public/exp.png" style="position: absolute;top:6.2%;right:4.5%;z-index:700;" title="点击导出pdf" >
</a>
<a href="${proPath}/system/home"> <img
		src="${proPath}/static/img/public/return.png"
		style="z-index: 200; border-radius: 10px; position: absolute; top: 6%; right: 1.5%; width: 1.5%; height: 3%;"
		title="点击返回主页">
	</a>
	<div id="pdf">
	<img src="${proPath}/static/img/TechnologyNeeds/allback.png" style="width: 100%;height: 100%;"/>
		<img src="${proPath}/static/img/TechnologyNeeds/background.png"style="width: 100%;height: 100%;z-index:150;position: absolute;top:0%;"  >
		
	<table id="title">
		<tr>
			<td>科技需求数量</td>
		</tr>
	</table>
		<table style="width:15.5%;height:6%;left:3%;top:6%;position: absolute;z-index:200;">
		<tr>
		<td style="width:70%;" class="name">需求专家发布数量</td>
		<td  id="xuqiufabu" class="value"></td>
		</tr>
		</table>
		<table style="width:93.8%;height: 5.5%;left:3%;top:14%;position: absolute;z-index: 200;">
			<tr>
			<td style="width:49.25%;" class="reportname">需求年增长情况</td>
			<td style="width:1.5%;"></td>
			<td style="width:49.25%;"class="reportname">需求领域图</td>
			</tr>
		</table>
		<div style="width:46.3%;height:74%;left:3%;top:20%;position: absolute;z-index: 200;" id="yuezengzhang"></div>
		<div style="width:46.1%;height:74%;left:50.6%;top:20%;position: absolute;z-index: 200;" id="lingyu"></div>
		</div>
</body>

</html>
