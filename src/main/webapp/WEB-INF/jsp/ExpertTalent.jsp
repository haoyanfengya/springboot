<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<c:set var="proPath" value="${pageContext.request.contextPath}" />
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>专家人才情况</title>
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
<script type="text/javascript"
	src="${proPath}/static/js/echarts/ExpertTalent.js"></script>
</head>
<style>
html, body,#pdf{
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

.value {
	color: #f1d85d;
	font-size: 1.2rem;
}
table{
text-align: center;
}
/*td{
border: 1px solid green;
}
/*div{
border:1px solid yellow;
}*/


.name{
text-align: left;
}
.reportname{
font-size: 1.2rem;
}
.top{
font-size: 1.2rem;}
</style>
<body>
	<a href="javascript:downpdf('专家人才情况')">
<img src="${proPath}/static/img/public/exp.png" style="position: absolute;top:6.2%;right:4.5%;z-index:700;" title="点击导出pdf" >
</a>
<a href="${proPath}/system/home"> <img
		src="${proPath}/static/img/public/return.png"
		style="z-index: 200; border-radius: 10px; position: absolute; top: 6%; right: 1.5%; width: 1.5%; height: 3%;"
		title="点击返回主页">
	</a>
<div id="pdf">
<img src="${proPath}/static/img/ExpertTalent/allback.png" style="width: 100%;height: 100%;"/>
		<img src="${proPath}/static/img/ExpertTalent/background.png"style="width: 100%;height: 100%;z-index:150;position: absolute;top:0%;"  >
	<table id="title">
		<tr>
			<td >专家人才情况</td>
		</tr>
</table>
		<table style="width:18%;height:6%;left:1.5%;top:12%;position: absolute;z-index:200;" >
		<tr>
		<td style="width:65%;" class="top">专家发布数量</td>
		<td style="font-size: 1.4rem;color:#f1d85d;" id="zhuanjiafabu"></td>
		</tr>
		</table>
	<table style="width:18%;height:70.5%;left:1.5%;top:20%;position: absolute;z-index:200;">
		
		<tr>
		<td colspan="3" style="height:9%;font-size: 1.1rem;" >专家类型</td>
		
		</tr>
		<tr style="height: 7%;">
		<td></td>
		</tr>
		<tr>
		<td style="width: 5%;"></td>
		<td  style="height:7%;"  class="name">技术创新服务专家</td>
		<td  style="height:7%;font-size: 1.4rem;color:rgb(76,164,205);" id="jishuchaungxinnumber"></td>
		</tr>
		<tr>
		<td style="width: 5%;"></td>
		<td  style="height:7%;"  class="name">高端顾问</td>
		<td  style="height:7%;font-size: 1.4rem;color:rgb(76,164,205); " id="gaoduanguwen"></td>
		</tr>
		<tr>
		<td style="width: 5%;"></td>
		<td  style="height:7%;"  class="name">需求诊断专家</td>
		<td  style="height:7%;font-size: 1.4rem;color:rgb(76,164,205);" id="xuqiuzhenduan"></td>
		</tr>
		<tr>
		<td style="width: 5%;"></td>
		<td  style="height:7%;"  class="name">培训讲师</td>
		<td  style="height:7%;font-size: 1.4rem;color:rgb(76,164,205);" id="peixunjiangshi"></td>
		</tr>
		<tr>
		<td style="width: 5%;"></td>
		<td  style="height:7%;"  class="name">问答专家</td>
		<td  style="height:7%;font-size: 1.4rem;color:rgb(76,164,205);" id="wendazhuanjia"></td>
		</tr>
		<tr>
		<td style="width: 5%;"></td>
		<td  style="height:7%;"  class="name">信息备案专家</td>
		<td  style="height:7%;font-size: 1.4rem;color:rgb(76,164,205);" id="xinxibeian"></td>
		</tr>
		<tr>
		<td colspan="3"></td>
		</tr>
	</table>
	<table style="width:76%;height:6%;left:21%;top:12%;position: absolute;z-index:200;">
		<tr>
			<td style="width: 49.2%;" class="reportname">专家年增长数量</td>
			<td style="width: 1.5%;"> </td>
			<td style="width: 49.3%;" class="reportname">专家专业领域分布饼图</td>
			
		</tr>
	
	</table>
	<div style="width:37.5%;height: 71%;left:21%;top:19%;position: absolute;z-index:200;" id="nianzengzhang"></div>
	<div style="width:37.5%;height: 71%;left:59.5%;top:19%;position: absolute;z-index:200;" id="zhuanyelingyu"></div>
	</div>
</body>

</html>
