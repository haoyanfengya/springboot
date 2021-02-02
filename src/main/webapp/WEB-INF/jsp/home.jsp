<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<c:set var="proPath" value="${pageContext.request.contextPath}"/>
<%@taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width,initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
    <title>条件平台首页</title>
    <script type="text/javascript" src="${proPath}/static/js/jquery.min.js"></script>
    <link rel="stylesheet" href="${proPath}/static/css/bootstrap.css"/>
    <script type="text/javascript" src="${proPath}/static/layui/layui.js"></script>
    <link rel="stylesheet" href="${proPath}/static/layui/css/layui.css"/>
    <script type="text/javascript" src="${proPath}/static/js/echarts.js"></script>

    <!-- 下载 -->
    <script type="text/javascript" src="${proPath}/static/js/html2canvas.js"></script>
    <script type="text/javascript" src="${proPath}/static/js/jspdf.debug.js"></script>
    <script type="text/javascript" src="${proPath}/static/js/down.js"></script>


    <!--这个页面图表制作的js -->
    <script type="text/javascript" src="${proPath}/static/js/echarts/home.js"></script>
</head>
<style>
    html, body, #pdf {
        width: 100%;
        height: 100%;
        margin: 0px;
        border: 0px;
        overflow: hidden;
        color: white;
        font-size: 1rem;
    }

    #topspanleft {
        font-size: 2.5rem;
        left: 6%;
        top: -3%;
        position: relative;

    }

    #topspanright {
        font-size: 2.5rem;
        right: 5%;
        top: -3%;
        position: relative;
    }

    td {
        text-align: center;
        z-index: 500;
        font-size: 1rem;

    }

    #title {
        font-size: 2rem;
        position: absolute;
        top: 2.5rem;

        color: white;
        width: 100%;
        z-index: 500;

        text-align: center;
    }

    #leftpiecharts {


        position: absolute;
        top: 17%;
    }

    #foots {
        position: absolute;
        left: 34%;
        bottom: 5%;
        width: 33%;
        height: 7%;

    }

    #foot {
        position: absolute;
        left: 39.2%;
        bottom: 6.5%;
        width: 22.1%;
        height: 7%;

        text-align: center;
    }

    /*#mapofservice{
        width: 29%;
        height: 65%;
        top: 18%;
        left: 36%;
        position:absolute;

    }*/
    /*#mapofenterprise{
    width: 29%;
        height: 65%;
        top: 18%;
        left: 36%;
        position:absolute;
        border:1px solid red;
    }*/

    a {
        color: white;
        font-size: 1rem;
        text-decoration: none;
    }

    a:hover {
        color: white;
        font-size: 1rem;
        text-decoration: none;
    }

    .value {
        color: #f1d85d;
        font-size: 1.2rem;

        /*display: flex;*/
        /*align-items: center;*/
        /*justify-content: center;*/
    }

    .boder {
    / / opacity: 0.6;
        width: 7%;
    / / height: 14 %;
    }

    .name {
        font-size: 1rem;
    }

    select, option {
        z-index: 500;
        height: 26px;
        color: #00A1E9;
        border-color: #00A1E9;
        border-radius: 5px;
        text-align: center;
        background-color: #012467;
        text-align: center;
        text-align-last: center;
        vertical-align: middle;
    }

    div {
        z-index: 500;
    }

    /*	table td{
            border:1px solid red;
        }*/

</style>

<body>
<a href="javascript:downpdf('沈阳科技条件平台')">
    <img src="${proPath}/static/img/public/exp.png" style="position: absolute;top:4%;right:0.1%;z-index:700;">
</a>
<div id="pdf">
    <!-- 下面这个是页面的背景图 -->

    <img src="${proPath}/static/img/home/background.jpg"
         style="width: 100%;height: 100%;z-index:150;position: absolute;top:0%;">

    <!--中间的文字 -->
    <img src="${proPath}/static/img/home/enterprise.png"
         style="width: 20%;height:auto;z-index:150;position: absolute;top:2.5%; left: 2%">
    <img src="${proPath}/static/img/home/service.png"
         style="width: 20%;height: auto;z-index:150;position: absolute;top:2.5%;right: 2%">


    <div  onclick="location.href='${proPath}/system/ValidOrder'" style="position: absolute;top: 12%;z-index: 200;left: 37%;width: 30%;height:10%;cursor:pointer">
        <img src="${proPath}/static/img/home/orange.png" style="width: 43%;height: 100%;">
        <span id="youxiaodingdan" style="position: absolute;top: 28%;z-index: 200;left: 16.5%;color: #FFB026;font-size: 24px;font-weight: bolder"></span>
        <span  style="position: absolute;top: 60%;z-index: 200;left: 15%;color: #FFB026">有效订单数</span>

        <img src="${proPath}/static/img/home/purple.png" style="width: 43%;height: 100%;margin-left: 10%;cursor:pointer">
        <span id="jine"  style="position: absolute;top: 28%;z-index: 200;left: 68%;color: #D800FF;font-size: 24px;font-weight: bolder"></span>
        <span  style="position: absolute;top: 60%;z-index: 200;left: 67%;color: #D800FF" >有效订单金额</span>
    </div>


    <!-- 中间地图 服务机构的 -->
    <div id="mapofservice" style="position:absolute;top:40px;
		width: 29%;
				height: 65%;
				top: 26%;
				left: 34%;
				lazy:true;"></div>
    <!-- 中间地图 企业的 -->
    <div id="mapofenterprise" style="position: absolute;top:40px;width: 29%;
				height: 65%;
				top: 26%;
				left: 34%;
				lazy:true;"></div>
    <!-- 服务机构按钮 点击将地图切换位服务机构  点击调用change函数(方法) 进入页面时默认显示服务机构-->
    <img src="${proPath}/static/img/home/fuwuchecked.png"
         style="position: absolute;top:74.5%;left:59.6%;width: 5.2%;height:3.5%;z-index:500;cursor: pointer" id="fuwu"
         onclick="change('fuwu')"/>
    <!-- 企业按钮 点击将地图切换位企业  点击调用change函数(方法) -->
    <img src="${proPath}/static/img/home/qiyenochecked.png"
         style="position: absolute;top:78.5%;left:59.6%;width: 5.2%;height:3.5%;z-index:500;cursor: pointer" id="qiye"
         onclick="change('qiye')"/>

    <!--左上角背景-->
    <img src="${proPath}/static/img/home/lefttop.png" style="position: absolute;top: 9%;left: 2%;z-index: 180;width: 24.5%;">

    <!--服务机构数量   -->
    <!--a标签用于在用户点击服务机构数量文字 以及文字旁的浅蓝色圈跳转到 服务机构数的二级界面  -->
    <a href="${proPath}/system/jumptoServiceOrganization">
        <!-- 服务机构数的浅蓝色圈 -->
        <img src="${proPath}/static/img/home/blue.png" style="z-index: 200; position: absolute; top: 10.5%;left: 3%;cursor:pointer"
             class="boder"/>
        <!-- 服务机构数的文字 -->
    </a>
    <!--服务项目数量   -->
    <!--a标签用于在用户点击服务项目数文字 以及文字旁的浅蓝色圈跳转到 服务项目数的二级界面  -->
    <a href="${proPath}/system/jumptoServiceItems">
        <!--服务项目数的浅蓝色圈  -->
        <img src="${proPath}/static/img/home/young.png" style="z-index: 200; position: absolute; top: 10.5%;left: 11%;"
             class="boder"/>
        <!-- 服务项目数的文字 -->
    </a>
    <!--大型仪器数量   -->
    <!--a标签用于在用户点击大型仪器数文字 以及文字旁的浅蓝色圈跳转到 大型仪器数的二级界面  -->
    <a href="${proPath}/system/LargeInstrument">
        <!--大型仪器数的浅蓝色圈  -->
        <img src="${proPath}/static/img/home/lavender.png"
             style="z-index: 200; position: absolute; top: 10.5%;left: 19%;" class="boder"/>
        <!--大型仪器数的文字  -->


    </a>
    <table style="width:27.5%;height: 8%;z-index:150;position: absolute;top:12%;text-align: center;left:3.5%;">
        <tr>
            <!-- 服务机构数的数字-->
            <td style="width: 25%;margin-left: 1rem"><a id="fuwujigou" href="${proPath}/system/jumptoServiceOrganization"
                                       class="value" style="color: #06AAFF;font-size: 2rem;margin-left: -1rem;margin-top: -1rem"></a></td>
            <td style="width: 12.5%;"></td>
            <!-- 服务项目数的数字 -->
            <td style="width: 8%; "><a id="fuwuxiangmu" href="${proPath}/system/jumptoServiceItems" class="value" style="color: #0DDE79;font-size: 2rem;margin-left: -1.3rem;margin-top: -1rem"></a>
            </td>
            <td style="width: 7%;font-size: 2rem"></td>
            <!--大型仪器数的数字  -->
            <td><a id="daxingyiqi" href="${proPath}/system/LargeInstrument" class="value"  style="color:#A219FA;font-size: 2rem;left: -4%;margin-left: -1.7rem;margin-top: -1rem"></a>
            </td>
            <td style="width: 10%;font-size: 2rem"></td>

        </tr>

    </table>
    <!--科技成果数量   -->
    <!--a标签用于在用户点击科技成果数量文字 以及文字旁的浅蓝色圈跳转到 科技成果数量的二级界面  -->
    <a href="${proPath}/system/Technology">
        <!--科技成果数量的浅蓝色圈  -->

        <img src="${proPath}/static/img/home/lightYellow.png"
             style="z-index: 200; position: absolute; top:26%;left: 3%;" class="boder"/>
        <!--科技成果数量的文字  -->


    </a>
    <!--专家人才数量   -->
    <!--a标签用于在用户点击专家人才数量文字 以及文字旁的浅蓝色圈 跳转到专家人才数量的二级界面  -->
    <a href="${proPath }/system/ExpertTalent">
        <img src="${proPath}/static/img/home/deepPurple.png" style="z-index: 200; position: absolute; top:26%;left:11%;"
             class="boder"/>
    </a>

    <!--政策发布数量   -->
    <!--a标签用于在用户点击政策发布数量文字 以及文字旁的浅蓝色圈跳转到 政策发布数量的二级界面  -->
    <a href="${proPath}/system/PolicyNum">
        <!--政策发布数量的浅蓝色圈  -->
        <img src="${proPath}/static/img/home/policy.png" style="z-index: 200; position: absolute; top: 26%;left: 19%;"
             class="boder"/>
        <!-- 政策发布数量的文字 -->
    </a>

    <table style="width:27.5%;height: 9%;z-index:150;position: absolute;top:27%;text-align: center;left:3.5%;">
        <tr>
            <!--科技成果数量的数字  -->
            <td style="width: 25%;margin-left: 1rem">
                <a id="kejichengguo" href="${proPath}/system/Technology" class="value" style="color:#F1D90B;font-size: 2rem;margin-left: -0.5rem"></a>
            </td>
            <td style="width: 12.5%;"></td>
            <!--专家人才数量数字   -->
            <td style="width: 8%; ">
                <a id="zhuanjiarencai" href="${proPath }/system/ExpertTalent" class="value" style="color: #D800FF;font-size: 2rem;margin-left: -0.5rem"></a>
            </td>
            <td style="width: 7%;font-size: 2rem"></td>
            <!--政策发布数量数字   -->
            <td >
                <a id="zhengcefabu" href="${proPath}/system/PolicyNum" class="value" style="color: #0DDE79;font-size: 2rem;margin-left: -1.7rem;"></a>
            </td>
            <td style="width: 10%;font-size: 2rem"></td>
        </tr>

    </table>

    <!--左侧中间的几个数字-->
    <img src="${proPath}/static/img/home/leftCenterBackground.png"
         style="position: absolute;top: 42%;left: 1%;z-index: 200;width: 25.8%;height: 25%">
    <table style="position: absolute;top: 42%;left: 1.2%;z-index: 200;width: 25%;height: 25%;text-align: center;">
        <tr style="height: 45%;">
            <td style="width: 45%;color: #00D0FE;top: 1%;cursor:pointer" onclick="location.href='${proPath}/system/RegisteredBusiness'">
                <span  id="zhuceqiye" style="font-size: 1.5rem;"></span>
                <br>
                注册企业数量
            </td>
            <td style="width: 15%"></td>
            <td style="width: 45%;color: #FFB026;cursor:pointer" onclick="location.href='${proPath}/system/TechnologyNeeds'">
                <span id="kejixuqiu" style="font-size: 1.5rem"></span>
                <br>
                科技需求数量
            </td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
        </tr  >
        <tr style="height: 45%;cursor:pointer" onclick="location.href='${proPath}/system/InnovationVolume'">
            <td style="color:#D800FF;cursor:pointer" onclick="location.href='${proPath}/system/InnovationVolume'" >
                <span id="cxjshenqing" style="font-size: 1.5rem"></span>
                <br>
                创新券申请数量
            </td>
            <td></td>
            <td style="color:#06E87B;cursor:pointer" onclick="location.href='${proPath}/system/InnovationVolume'">
                <span id="cxjtongguo" style="font-size: 1.5rem"></span>
                <br>
                创新券通过审核数量
            </td>
        </tr>
    </table>


    <!-- 沈阳产业创新资源分布-->
    <img src="${proPath}/static/img/home/resources.png"
         style="z-index: 200;position: absolute;top: 12%;right: 0.1%;">
    <div id="bar1" onclick="location.href='${proPath}/system/Resources'" style="width:25%;height: 30%;position: absolute;top:12%;right:0.1%;"></div>

    <!--申请创新券通过审核的企业分布区域-->
    <img src="${proPath}/static/img/home/InnovationVoucher.png"
         style="z-index: 200;position: absolute;top: 41.5%;right: 0.1%;">
    <div id="mixed1" style="width: 33%;height: 30%;position: absolute;top: 42%;right: -3%;"></div>
    <!--服务机构服务排名TOP5-->
    <img src="${proPath}/static/img/home/ServiceOrganizationTOP5.png"
         style="z-index: 200;position: absolute;bottom: 25%;right: 0.1%;">

    <select id="items" onchange="draw('no')" style="position: absolute;bottom: 26%;right: 0.1%;z-index: 500;">
        <option value="">全部</option>
        <option value="gdyx"> 高等院校</option>
        <option value="kyys">科研院所</option>
        <option value="qy">企业(含转制院所)</option>
    </select>
    <div id="mixed" style="width:25%;height: 28%;position: absolute;bottom:0.1%;right:0.1%; z-index: 300"></div>

    <!--服务机构本年度有效订单TOP5-->
    <img src="${proPath}/static/img/home/ValidOrderTOP5.png"
         style="z-index: 200;position: absolute;bottom: 25%;left: 1%;">
    <select id="revenue" onchange="draw('no')" style="position: absolute;bottom: 25.8%;left:18.8%;z-index: 500;">
        <option value="">全部</option>
        <option value="gdyx"> 高等院校</option>
        <option value="kyys">科研院所</option>
        <option value="qy">企业(含转制院所)</option>
    </select>
    <div id="bar" style="width:25%;height: 27%;position: absolute;bottom:1%;left:1%; z-index: 300"></div>
</div>


</body>

</html>
