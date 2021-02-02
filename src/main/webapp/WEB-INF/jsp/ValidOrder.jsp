<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<c:set var="proPath" value="${pageContext.request.contextPath}" />
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>有效订单数量及金额情况</title>
<script type="text/javascript" src="${proPath}/static/js/jquery.min.js"></script>
<link rel="stylesheet" href="${proPath}/static/css/bootstrap.css" />
<script type="text/javascript" src="${proPath}/static/layui/layui.js"></script>
<link rel="stylesheet" href="${proPath}/static/layui/css/layui.css" />
<script type="text/javascript" src="${proPath}/static/js/echarts.js"></script>

<!-- 下载 -->
<script type="text/javascript" src="${proPath}/static/js/html2canvas.js" ></script>
<script type="text/javascript" src="${proPath}/static/js/jspdf.debug.js" ></script>
<script type="text/javascript" src="${proPath}/static/js/down.js" ></script>


<!--这个页面图表制作的js -->
<script type="text/javascript"
	src="${proPath}/static/js/echarts/ValidOrder.js"></script>
</head>
<style>
html, body,#pdf {
	width: 100%;
	height: 100%;
	margin: 0px;
	border: 0px;
	overflow: hidden;
	color: white;
	font-size: 1.2rem;
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
width: 50%;
text-align: left;
}
.value {
	color: #f1d85d;
	font-size: 1.2rem;
	width: 30%;
}

table {
	text-align: center;
}

/*td {
	border: 1px solid green;
}

div {
	border: 1px solid yellow;
}*/
.lefttable{
left:5.5%;
width: 25.7%;
}

.reportname{
font-size: 1.2rem;
}
</style>
<body>
<a href="javascript:downpdf('有效订单数量及金额情况')">
<img src="${proPath}/static/img/public/exp.png" style="position: absolute;top:6.2%;right:4.5%;z-index:700;" title="点击导出pdf" >
</a>
<a href="${proPath}/system/home"> <img
		src="${proPath}/static/img/public/return.png"
		style="z-index: 200; border-radius: 10px; position: absolute; top: 6%; right: 1.5%; width: 1.5%; height: 3%;"
		title="点击返回主页">
	</a>
	<div id="pdf">
	<img src="${proPath}/static/img/ValidOrder/allback.png"
		style="width: 100%; height: 100%;" />
	<img src="${proPath}/static/img/ValidOrder/background.png"
		style="width: 100%; height: 100%; z-index: 150; position: absolute; top: 0%;">
	
	<table id="title">
		<tr>
			<td>有效订单数量及金额情况</td>
		</tr>

	</table>
	<table style="width:25.7%;height: 84.5%;top:12%;position: absolute;z-index:500;left:5.5%;" >
	<tr style="height:6%;">
	<td colspan="3"></td>
	</tr>
	<tr >
	<td style="width: 5%"></td>
		<td class="name">有效订单数量</td>
		<td id="youxiaodingdannumber" class="value"></td>
	</tr>
	<tr >
	<td style="width: 5%"></td>
		<td class="name">有效订单金额</td>
		<td id="youxiaodingdanmoney" class="value"></td>
	</tr>
	<tr >
	<td style="width: 5%"></td>
		<td class="name">确认完成订单数量</td>
		<td id="carryOutnumber" class="value"></td>
	</tr>
	<tr >
	<td style="width: 5%"></td>
		<td class="name">确认完成订单金额</td>
		<td id="carryOutmoney" class="value"></td>
	</tr>
	<tr >
	<td style="width: 5%"></td>
		<td class="name">以提供服务的机构数量</td>
		<td id="ServiceProvider" class="value"></td>
	</tr>
	<tr >
	<td style="width: 5%"></td>
		<td class="name">确认完成的机构数量</td>
		<td id="CompletedServiceAgency" class="value"></td>
	</tr>
	<tr >
	<td style="width: 5%"></td>
		<td class="name">已下单用户数量</td>
		<td id="NumberOfOrdersPlaced" class="value"></td>
	</tr>
	<tr >
	<td style="width: 5%"></td>
		<td class="name">确认完成用户数量</td>
		<td id="NumberOfCompletedUsers" class="value"></td>
	</tr>
	<tr style="height:15%" >
		<td colspan="3" ></td>
		
	</tr>
	
	</table>
	<!-- tubiao -->
	<table
		style="width: 62.5%; height: 4.5%; position: absolute; top: 12%; left: 31.8%; z-index: 200;"class="reportname">
		<tr>
		<td >有效订单及有效订单金额年增长情况</td>
			
			
		</tr>

	</table>
	<div style="width: 62.5%;height: 36.4%;position: absolute; top:17.5%;left:31.8%;z-index: 200;" id="niandingdan&jine"></div>
	
	
	<table
		style="width: 62.5%; height: 4.5%; position: absolute; top: 55%; left: 31.8%; z-index: 200;"class="reportname">
		<tr>
		<td >有效订单及有效订单金额月增长情况</td>
			
		</tr>
	</table>
	<div style="width: 62.5%;height: 36.4%;position: absolute; top:60%;left:31.8%;z-index: 200;" id="yuedingdan&jine"></div>
	</div>
</body>

</html>
