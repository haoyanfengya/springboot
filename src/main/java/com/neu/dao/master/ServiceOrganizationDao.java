package com.neu.dao.master;

import java.util.List;

import com.neu.entity.Inquire;

public interface ServiceOrganizationDao {
	/** 服务机构已展示数量 */
	Integer fuwujigouyizhanshi();

	/** CMA服务机构 */
	Integer CMA();

	/** CNAS服务机构 */
	Integer CNAS();

	/** CMACNAS */
	Integer CMACNAS();
	/**服务机构机构类型分布*/
	List<Inquire> fwjgTypeDistribution();
	/**服务机构区域分布*/
	List<Inquire> RegionalDistribution();
	/**服务机构服务类型分布饼图*/
	List<Inquire> Servicetype();
	/**服务机构服务领域分布*/
	List<Inquire> ServiceArea();
}
