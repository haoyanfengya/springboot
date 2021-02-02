<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<c:set var="proPath" value="${pageContext.request.contextPath}" />
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>企业用户注册情况</title>
<script type="text/javascript" src="${proPath}/static/js/jquery.min.js" ></script>
<link rel="stylesheet" href="${proPath}/static/css/bootstrap.css" />
<script type="text/javascript" src="${proPath}/static/layui/layui.js"></script>
<link rel="stylesheet" href="${proPath}/static/layui/css/layui.css" />
<script type="text/javascript" src="${proPath}/static/js/echarts.js" ></script>

<!-- 下载 -->
<script type="text/javascript" src="${proPath}/static/js/html2canvas.js" ></script>
<script type="text/javascript" src="${proPath}/static/js/jspdf.debug.js" ></script>
<script type="text/javascript" src="${proPath}/static/js/down.js" ></script>

<script type="text/javascript" src="${proPath}/static/js/echarts/RegisteredBusiness.js"></script>
</head>
<style>
html, body,#pdf {
	width: 100%;
	height: 100%;
	margin: 0px;
	border: 0px;
	overflow: hidden;
	color: white;
	font-size:1.2rem;
}

#title {
	font-size: 1.5rem;
	z-index: 150;
	position: absolute;
	top: 3%;
	width: 100%;
	text-align: center;
	color: white;
}

.value {
	color: #f1d85d;
	font-size: 1.2rem;
}

table {
	text-align: center;
}
/*td{
border: 1px solid green;
}
div{
border: 1px solid red;

}*/
/*#test td{
border: 1px solid green;
}*/
.tdleft{
width:70%;
font-size: 1rem;
text-align: left;
}
.tdright{
width:30%;
font-size: 1rem;
color:rgb(76,164,205);
}

</style>
<body>
	<a href="javascript:downpdf('企业用户注册情况')">
<img src="${proPath}/static/img/public/exp.png" style="position: absolute;top:6.2%;right:4.5%;z-index:700;" title="点击导出pdf" >
</a>
<a href="${proPath}/system/home"> <img
		src="${proPath}/static/img/public/return.png"
		style="z-index: 200; border-radius: 10px; position: absolute; top: 6%; right: 1.5%; width: 1.5%; height: 3%;"
		title="点击返回主页">
	</a>
	<div id="pdf">
	<img src="${proPath}/static/img/RegisteredBusiness/allback.png"
		style="width: 100%; height: 100%; z-index: 50;" />
	<img src="${proPath}/static/img/RegisteredBusiness/background.png"
		style="width: 100%; height: 100%; z-index: 150; position: absolute; top: 0%;">
	

<table id="title">
	<tr>
		<td>企业用户注册情况</td>
	</tr>

</table>
<!-- 左侧表格 -->
<table  style="width:18%;height: 78%; position: absolute;top: 19%;left:1.5%;z-index:500;" >

<tr style="height: 10%;">

<td colspan="3" >注册用户类型分布</td>
</tr>
<tr style="height: 5%;">
<td colspan="3"></td>
</tr>
<tr style="height: 5%;">
<td style="width: 5%;"></td>
<td class="tdleft">企业</td>
<td id="qiye" class="tdright"></td>
</tr>
<tr style="height: 5%;">
<td style="width: 5%;"></td>
<td class="tdleft">创业团队</td>
<td id="chaungye" class="tdright"></td>
</tr>
<tr style="height: 5%;">
<td style="width: 5%;"></td>
<td class="tdleft">未补全信息用户</td>
<td id="weibuquan" class="tdright"></td>
</tr>
<tr style="height: 5%;">
<td style="width: 5%;"></td>
<td class="tdleft">总和</td>
<td id="count" class="tdright"></td>
</tr>
<tr style="height: 10%;">
<td ></td>
<td></td>
</tr>
<tr style="height: 10%;">
<td colspan="3">已激活企业认定情况</td>

</tr>
<tr style="height: 5%;">
<td colspan="3"></td>
</tr>
<tr style="height: 5%;">
<td style="width: 5%;"></td>
<td class="tdleft">高新技术产业</td>
<td id="gaoxin" class="tdright"></td>
</tr>
<tr style="height: 5%;">
<td style="width: 5%;"></td>
<td class="tdleft">市科技型企业</td>
<td id="shikeji" class="tdright"></td>
</tr>
<tr style="height: 5%;">
<td style="width: 5%;"></td>
<td class="tdleft">市小巨人企业</td>
<td id="shixiaojuren" class="tdright"></td>
</tr>
<tr style="height: 5%;">
<td style="width: 5%;"></td>
<td class="tdleft">市小巨人培育企业</td>
<td id="shipeiyu" class="tdright"></td>
</tr>
<tr style="height: 5%;">
<td style="width: 5%;"></td>
<td class="tdleft">市高新技术培育企业</td>
<td id="shigaoxin" class="tdright"></td>
</tr >
<tr style="height: 5%;" >
<td style="width: 5%;"></td>
<td class="tdleft">区小巨人企业</td>
<td id="quxiaojuren" class="tdright"></td>
</tr>
<tr style="height: 5%;" >
<td style="width: 5%;"></td>
<td class="tdleft" class="tdright">以上都不是</td>
<td id="qita" class="tdright"></td>
</tr>
<tr>
<td colspan="3"></td>
</tr>
</table>
<table
	style="width: 49%; z-index: 150; position: absolute; top: 10%; height: 7.5%; left: 1.5%">
	<tr>
		<td style="width: 28.5%">总注册用户数</td>
		<td style="color: #f1d85d; font-size: 1.5rem;width: 20%;" id="zongzhuce"></td>
		<td style="width: 1%"></td>
		<td style="width: 29.25%">总激活用户数</td>
		<td style="color: #f1d85d; font-size: 1.5rem;width: 20%;" id="zongjihuo"></td>
	</tr>
</table>
<table
	style="width: 47.5%; z-index: 150; position: absolute; top: 10%; height: 7.5%; right: 1.5%">
	<tr>
		<td style="width: 30%">企业激活用户数</td>
		<td style="width:20%;color: #f1d85d; font-size: 1.5rem;" id="qiyejihuo"></td>
		<td style="width: 1%;"></td>
		<td style="width: 29.25%">创业团队激活用户数</td>
		<td style="width:20%;color: #f1d85d; font-size: 1.5rem;" id="chuangye"></td>
	</tr>
</table>

<table
	style="width: 38.6%; z-index: 150; position: absolute; top: 19%; height: 4%; left: 20.8%">
	<tr>
		<td >已激活企业用户区域分布图</td>
		
	</tr>
</table>
<table
	style="width: 38.3%; z-index: 150; position: absolute; top: 58.5%; height: 4%; left: 21%">
	<tr>
		<td>年企业用户情况</td>
		
	</tr>
</table>
<table
	style="width: 38.6%; z-index: 150; position: absolute; top: 19%; height: 4%; right: 1.5%">
	<tr>
		
		<td >已激活企业类型图</td>
	</tr>
</table>
<table
	style="width: 38.6%; z-index: 150; position: absolute; top: 58.5%; height: 4%; right: 1.5%">
	<tr>
		<td >月企业用户情况</td>
		
	</tr>                                           
</table>
<!-- 年企业用户情况 -->
<div id="lefttop"
	style="position: absolute; top: 63%; width: 38.2%; height: 34.5%; z-index: 300; left: 21%; "></div>
	<!-- 月企业用户情况 -->
<div id="centertop1"
	style="position: absolute; top: 63%; width: 38.2%; height: 34.5%; z-index: 300; left: 60%; "></div>
	<!-- 已激活企业用户区域分布图 -->
<div id="centertop2"
	style="position: absolute; top:23.5%; width: 38.2%; height: 34.5%; z-index: 300; left: 21%; "></div>
	<!-- 已激活企业类型图 -->
<div id="righttop"
	style="position: absolute; top: 23.5%; width: 38.2%; height: 34.5%; z-index: 300; left: 60%; "></div>
</div>
</body>
</html>
