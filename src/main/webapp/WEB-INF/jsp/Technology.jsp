<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<c:set var="proPath" value="${pageContext.request.contextPath}" />
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>科研成果统计情况</title>
<script type="text/javascript" src="${proPath}/static/js/jquery.min.js" ></script>
<link rel="stylesheet" href="${proPath}/static/css/bootstrap.css" />
<script type="text/javascript" src="${proPath}/static/layui/layui.js"></script>
<link rel="stylesheet" href="${proPath}/static/layui/css/layui.css" />
<script type="text/javascript" src="${proPath}/static/js/echarts.js" ></script>

<!-- 下载 -->
<script type="text/javascript" src="${proPath}/static/js/html2canvas.js" ></script>
<script type="text/javascript" src="${proPath}/static/js/jspdf.debug.js" ></script>
<script type="text/javascript" src="${proPath}/static/js/down.js" ></script>

<script type="text/javascript"src="${proPath}/static/js/echarts/Technology.js"></script>

</head>
<style>
html, body,#pdf{
	width: 100%;
	height: 100%;
	margin: 0px;
	border: 0px;
	overflow: hidden;
	color: white;
	font-size: 1.2rem;
}

#title{
			font-size: 2rem;
			z-index: 150;
			position: absolute;
			top:3%;
			width:100%;
		
			text-align:center;
			color:white;
			}

.name{
font-size: 1.2rem;
}
.value {
	color: #f1d85d;
	font-size: 1.2rem;
}
table{
text-align: center;
}
/*td {
	border: 1px solid green;
}
div{
border: 1px solid red;
}*/
.reportname{
font-size: 1.2rem}
</style>
<body>
	<a href="javascript:downpdf('科研成果发布数量')">
<img src="${proPath}/static/img/public/exp.png" style="position: absolute;top:6.2%;right:4.5%;z-index:700;" title="点击导出pdf" >
</a>
<a href="${proPath}/system/home"> <img
		src="${proPath}/static/img/public/return.png"
		style="z-index: 200; border-radius: 10px; position: absolute; top: 6%; right: 1.5%; width: 1.5%; height: 3%;"
		title="点击返回主页">
	</a>
	<div id="pdf">
	<img src="${proPath}/static/img/Technology/allback.png"
		style="width: 100%; height: 100%; z-index: 50;" />
	<img src="${proPath}/static/img/Technology/background.png"
		style="width: 100%; height: 100%; z-index: 150; position: absolute; top: 0%;">

	<table
		style="width: 15.5%; z-index: 150; position: absolute; top: 6%; height:6%; left: 3%">
		<tr>
			<td style="width: 75%;" class="name">科研成果发布数量</td>
			<td style="/*color:rgb(76,164,205);*/width: 25%;" id="keyanchengguo" class="value"></td>

		</tr>

	</table>
	<table
		style="width: 94%; z-index: 150; position: absolute; top: 14%; height: 5.5%; left: 3%">
		<tr>
			<td style="width: 49.25%" class="reportname">科研成果年增长情况</td>
			<td style="width: 1.5%"></td>
			<td style="width: 49.25%" class="reportname">科研成果分布图</td>
		</tr>

	</table>
	
	<table id="title"
		>
		<tr>
			<td>科研成果统计情况</td>
		</tr>

	</table>
	<div id="left"
		style="position: absolute; top: 20%; width: 46.3%; height: 74%; z-index: 300; left: 3%; "></div>
	<div id="right"
		style="position: absolute; top: 20%; width: 46.3%; height: 74%; z-index: 300;right: 3%; "></div>

</div>
</body>

</html>
