package com.neu.entity;


import java.util.List;

public  class InnovationVolumeResult {
	/**创新券申请数量*/
	private Integer shenqingshuliang;
	/**已通过申请数量*/
	private Integer applicationsnumber;
	/**创新券申请额度*/
	private Integer applyofquota;
	/**创新券发放额度*/
	private Integer credit;
	/**企业购买服务类别*/
	private List<Inquire> servicetype;
	/**申请创新券企业认定情况*/
	private List<Inquire> findings;
	/**创新券申请 通过情况*/
	private List<Inquire> Application;
	
	/**创新券申请额度和发放额度*/
	private List<Inquire> Applyforquota;
	
	/**通过审核企业单位性质分布饼图*/
	private List<Inquire> Unitnature;
	/**通过审核企所属区域分布饼图*/
	private List<Inquire> area;
	/**申请创新券的产业领域*/
	private List<Inquire> industry;
	public final Integer getShenqingshuliang() {
		return shenqingshuliang;
	}
	public final void setShenqingshuliang(Integer shenqingshuliang) {
		this.shenqingshuliang = shenqingshuliang;
	}
	public final Integer getApplicationsnumber() {
		return applicationsnumber;
	}
	public final void setApplicationsnumber(Integer applicationsnumber) {
		this.applicationsnumber = applicationsnumber;
	}
	public final Integer getApplyofquota() {
		return applyofquota;
	}
	public final void setApplyofquota(Integer applyofquota) {
		this.applyofquota = applyofquota;
	}
	public final Integer getCredit() {
		return credit;
	}
	public final void setCredit(Integer credit) {
		this.credit = credit;
	}
	public final List<Inquire> getServicetype() {
		return servicetype;
	}
	public final void setServicetype(List<Inquire> servicetype) {
		this.servicetype = servicetype;
	}
	public final List<Inquire> getFindings() {
		return findings;
	}
	public final void setFindings(List<Inquire> findings) {
		this.findings = findings;
	}
	public final List<Inquire> getApplication() {
		return Application;
	}
	public final void setApplication(List<Inquire> application) {
		Application = application;
	}
	
	public final List<Inquire> getApplyforquota() {
		return Applyforquota;
	}
	public final void setApplyforquota(List<Inquire> applyforquota) {
		Applyforquota = applyforquota;
	}

	public final List<Inquire> getUnitnature() {
		return Unitnature;
	}
	public final void setUnitnature(List<Inquire> unitnature) {
		Unitnature = unitnature;
	}
	public final List<Inquire> getArea() {
		return area;
	}
	public final void setArea(List<Inquire> area) {
		this.area = area;
	}
	public final List<Inquire> getIndustry() {
		return industry;
	}
	public final void setIndustry(List<Inquire> industry) {
		this.industry = industry;
	}
	@Override
	public String toString() {
		return "InnovationVolumeResult [shenqingshuliang=" + shenqingshuliang + ", applicationsnumber="
				+ applicationsnumber + ", applyofquota=" + applyofquota + ", credit=" + credit + ", servicetype="
				+ servicetype + ", findings=" + findings + ", Application=" + Application + ",  Applyforquota=" + Applyforquota + ", Unitnature=" + Unitnature
				+ ", area=" + area + ", industry=" + industry + "]";
	}
	
	
}