package com.neu.dao.master;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.neu.entity.Inquire;

public interface HomeDao {
		/**条件平台服务机构数*/
		Integer tjptFuwujigouShu(@Param("condition")String condition);
		/**条件平台服务项目数*/
		Integer tjptFuwuShu(@Param("condition")String condition);
		/** 条件平台 大型仪器数*/
		Integer tjptYiqiShu(@Param("condition")String condition);
		/**条件平台大型成果数*/
		Integer tjptChengguoShu(@Param("condition")String condition);
		/**条件平台专家数*/
		Integer tjptZhuanjiaShu(@Param("condition")String condition);
		/**条件平台政策数*/
		Integer tjptZhengceShu(@Param("condition")String condition);
		/**注册企业数*/
		Integer enterprise(@Param("condition")String condition);
		/**科技需求数*/
		Integer gzXuqiuShu(@Param("condition")String condition);
		/**创新卷申请数量*/
		Integer tjptCxjShenqingShu(@Param("condition")String condition);
		/**创新卷申请通过数量*/
		Integer tjptCxjTongguoShu(@Param("condition")String condition);
		/**有效订单服务*/
		Inquire tjptDingdanfuwu(@Param("condition")String condition);
		/**有效订单企业*/
		Inquire tjptDingdanqiye(@Param("condition")String condition);
		/**服务机构TOP5*/
		List<Inquire> ServiceAgencyTOP5(@Param("items")String items);
		/**通过审核的申请创新卷企业分布区域*/
		List<Inquire>passedcxj();
		/**服务机构本年度有效订单TOP5排名*/
		List<Inquire> ValidOrder(@Param("revenue")String revenue);
		/** 沈阳产业创新资源分布情况*/
		List<Inquire> Deposit();
		/**中间服务机构的数据*/
		List<Inquire> mapofservice();
		/**企业的数据*/
		List<Inquire> mapofenterprise();
	
}
