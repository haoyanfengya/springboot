package com.neu.dao.master;

import java.util.List;

import com.neu.entity.Inquire;

public interface ServiceItemsDao {
	/**服务类型分布*/
	List<Inquire> ServiceType();
	/**服务领域分布*/
	List<Inquire> ServiceArea();
	/**服务项目年增长情况*/
	List<Inquire>Annualgrowth();
	/**服务项目月增长情况*/
	List<Inquire>Monthlygrowth();
	/**服务机构已展示数量*/
	Integer Agencyhasshown();
}
