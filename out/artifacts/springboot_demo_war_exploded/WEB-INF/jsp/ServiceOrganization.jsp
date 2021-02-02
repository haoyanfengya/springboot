<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<c:set var="proPath" value="${pageContext.request.contextPath}" /> 
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>服务机构基本情况</title>
<script type="text/javascript" src="${proPath}/static/js/jquery.min.js" ></script>
<link rel="stylesheet" href="${proPath}/static/css/bootstrap.css" />
<script type="text/javascript" src="${proPath}/static/layui/layui.js"></script>
<link rel="stylesheet" href="${proPath}/static/layui/css/layui.css" />
<script type="text/javascript" src="${proPath}/static/js/echarts.js" ></script>
<script type="text/javascript" src="${proPath}/static/js/echarts-wordcloud.min.js"></script>

<!-- 下载 -->
<script type="text/javascript" src="${proPath}/static/js/html2canvas.js" ></script>
<script type="text/javascript" src="${proPath}/static/js/jspdf.debug.js" ></script>
<script type="text/javascript" src="${proPath}/static/js/down.js" ></script>

<!--这个页面图表制作的js -->
<script type="text/javascript" src="${proPath}/static/js/echarts/ServiceOrganization.js"></script>
</head>
<style>
		html,body,#pdf{
				width: 100%;
				height: 100%;
				margin: 0px;
				border: 0px;
				overflow: hidden;
				color: white;
				font-size: 18px;
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
			.value{
			color:#f1d85d;
			font-size:1.6rem;
			}
			.name{
			font-size:1.6rem;
			}
			.reportname{
			font-size:1.5rem;
			}
			table{
			text-align: center;
			}
			
	</style>
	<body>
	<a href="javascript:downpdf('服务机构基本情况')">
<img src="${proPath}/static/img/public/exp.png" style="position: absolute;top:6.2%;right:4.5%;z-index:700;" title="点击导出pdf" >
</a>
<a href="${proPath}/system/home"> <img
		src="${proPath}/static/img/public/return.png"
		style="z-index: 200; border-radius: 10px; position: absolute; top: 6%; right: 1.5%; width: 1.5%; height: 3%;"
		title="点击返回主页">
	</a>
	<div id="pdf">
		<img src="${proPath}/static/img/ServiceOrganization/service.png" style="width: 100%;height: 100%;"/>
		
		<table id="title">
			<tr>
			<td>服务机构基本情况</td>
			</tr>
			
		</table >
		
		<table style="width: 48.5%;position: absolute;top:11%;height:11%;left:1%;">
		<tr>
		<td style="width: 49.25%;" class="name">服务机构已展示数量</td>
		<td style="width:1.5%;"></td>
		<td   style="width: 49.25%;" class="name">CMA服务机构</td>
		</tr>
		<tr>
		<td class="value" id="zhanshi"></td>
		<td></td>
		<td class="value" id="cma"></td>
		</tr>
		
		</table >
		<table style="width: 48.5%;position: absolute;top:11%;height:11%;left:50.5%;">
		<tr>
		<td style="width: 49.25%;" class="name">CNAS服务机构</td>
		<td style="width:1.5%;"></td>
		<td  style="width: 49.25%;" class="name">CMA&CNAS服务机构</td>
		</tr>
		<tr>
		<td class="value" id="cnas"></td>
		<td></td>
		<td class="value" id="cmacnas"></td>
		</tr>
		
		</table>
		<table style="width: 98%;position: absolute;top:25%;height:5%;left:1.1%;">
		<tr>
		<td style="width: 49.5%;" class="reportname">服务机构区域分布</td>
		<td style="width:1%;"></td>
		<td style="width: 49.5%;"class="reportname">服务机构机构类型分布</td>
		</tr>
		
		</table>
	<table style="width: 98%;position: absolute;top:60%;height:5%;left:1.1%;">
		<tr>
		<td style="width: 49.5%;"class="reportname">服务机构服务类型分布</td>
		<td style="width:1%;"></td>
		<td style="width: 49.5%;"class="reportname">服务机构服务领域分布</td>
		</tr>
		
		</table>
		
		
		<div id="pie1"style="width: 48.4%; height: 28.5%;z-index: 300;position: absolute;top: 30.5%;left: 1.2%;"></div>
		
		<div id="pie2" style="width: 48.4%; height: 28.5%;z-index: 300;position: absolute;top: 30.5%;right: 1.2%;"></div>
		
		<div id="pie3"style="width: 48.4%; height: 28.5%;z-index: 300;position: absolute;bottom:6%;left: 1.1%;"></div>
		
		<div id="pie4"style="width: 48.4%; height: 28.5%;z-index: 300;position: absolute;bottom: 6%;right: 1.1%;"></div>
		</div>
	</body>

</html>
