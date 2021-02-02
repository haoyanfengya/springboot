<%--
  Created by IntelliJ IDEA.
  User: hao_y
  Date: 2021/1/17
  Time: 12:57
  To change this template use File | Settings | File Templates.
--%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<c:set var="proPath" value="${pageContext.request.contextPath}" />
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>沈阳产业创新资源分布情况</title>
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
    <script type="text/javascript" src="${proPath}/static/js/echarts/Resources.js"></script>
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
        font-size:1.2rem;
    }
    .name{
        font-size:1.2rem;
    }
    table{
        text-align: center;
    }
    .reportname{

        font-size: 1.5rem;}
    /*td{
    border: 1px solid yellow;
    }
    /*#lefttop,#lefttop1,#leftbottom,#leftbottom1{
    border: 1px solid red; }*/
</style>
<body>
<a href="javascript:downpdf('沈阳产业创新资源分布情况')">
    <img src="${proPath}/static/img/public/exp.png" style="position: absolute;top:6.2%;right:4.5%;z-index:700;" title="点击导出pdf" >
</a>
<a href="${proPath}/system/home"> <img
        src="${proPath}/static/img/public/return.png"
        style="z-index: 200; border-radius: 10px; position: absolute; top: 6%; right: 1.5%; width: 1.5%; height: 3%;"
        title="点击返回主页">
</a>
<div id="pdf">
    <img src="${proPath}/static/img/Resources/allback.png" style="width: 100%;height: 100%;z-index:50;"/>
    <img src="${proPath}/static/img/Resources/background.png"style="width: 100%;height: 100%;z-index:150;position: absolute;top:0%;"  >
    <table style="width:15.5%;height: 6.5%;position: absolute;top:5.8%;left:2.4%;z-index: 150;">
        <tr style="height: 30%;width: 100%;">
            <td></td>
        </tr>
        <tr style="height: 33%;width: 100%;">
<%--            <td style="width:70%;" class="name">服务项目发布数量</td>--%>
<%--            <td style="width:30%;" id="toptext" class="value"></td>--%>
        </tr>
        <tr style="height: 33%;width: 100%;">
            <td></td>
        </tr>
    </table>

    <table style="width:100%;height: 9%; z-index:150;position: absolute;top:0%;">
        <tr>
            <td style="font-size: 2rem;">沈阳产业创新资源分布情况</td>
        </tr>
    </table>
    <table style="width: 100%;z-index:150;position: absolute; top:13.5%;height:6%;">
        <tr>
            <td style="width:2.5%;"></td>
            <td style="width:46.5%;" class="reportname">机构级别分布图</td>
            <td style="width:1%;"></td>
            <td style="width:46.6%;" class="reportname">机构类型分布图</td>
            <td></td>

        </tr>
    </table>
    <div style="width:46.5%;height:35%;left:2.5%;z-index: 150;position: absolute;top:18.4%;" id="lefttop"></div>
    <div style="width:46.5%;height:35%;z-index: 150;left:50%;position: absolute;top:18.4%;" id="righttop"></div>

    <table style="width: 100%;z-index:150;position: absolute; top:56%;height:6%;">
        <tr>
            <td style="width:2.5%;"></td>
            <td style="width:46.5%;" class="reportname">机构领域分布图</td>
            <td style="width:1%;"></td>
            <td style="width:46.6%;"class="reportname">机构重点实验室分布图</td>
            <td></td>

        </tr>
    </table>
    <div style="width:46.5%;height:36%;left:2.5%;z-index: 150;position: absolute;top:60.5%;" id="leftbottom"></div>
    <div style="width:46.5%;height:36%;left:50%;z-index:150;position: absolute;top:60.5%;" id="rightbottom"></div>
</div>
</body>

</html>

