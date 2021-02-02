package com.neu.dao.master;

import java.util.List;

import com.neu.entity.Inquire;

public interface InnovationVolumeDao {
	/**创新券申请数量*/
	Integer shenqingshuliang();
	/**已通过申请数量*/
	Integer applicationsnumber();
	/**创新券申请额度*/
	Integer applyofquota();
	/**创新券发放额度*/
	Integer credit();
	/**企业购买服务类别*/
	List<Inquire> servicetype();
	/**申请创新券企业认定情况*/
	List<Inquire> findings();
	/**创新券申请 通过情况*/
	List<Inquire> Application();
	

	/**创新券申请额度和发放额度*/
	List<Inquire> Applyforquota();

	
	/**通过审核企业单位性质分布饼图*/
	List<Inquire> Unitnature();
	/**通过审核企所属区域分布饼图*/
	List<Inquire> area();
	/**申请创新券的产业领域*/
	List<Inquire> industry();
}
