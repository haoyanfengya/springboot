package com.neu.entity;

import java.util.List;

public class ServiceItemsResult {
	/**服务类型分布*/
	private List<Inquire> ServiceType;
	/**服务领域分布*/
	private List<Inquire> ServiceArea;
	/**服务项目年增长情况*/
	private List<Inquire>Annualgrowth;
	/**服务项目月增长情况*/
	private List<Inquire>Monthlygrowth;
	/**服务机构已展示数量*/
	private Integer Agencyhasshown;
	public final List<Inquire> getServiceType() {
		return ServiceType;
	}
	public final void setServiceType(List<Inquire> serviceType) {
		ServiceType = serviceType;
	}
	public final List<Inquire> getServiceArea() {
		return ServiceArea;
	}
	public final void setServiceArea(List<Inquire> serviceArea) {
		ServiceArea = serviceArea;
	}
	public final List<Inquire> getAnnualgrowth() {
		return Annualgrowth;
	}
	public final void setAnnualgrowth(List<Inquire> annualgrowth) {
		Annualgrowth = annualgrowth;
	}
	public final List<Inquire> getMonthlygrowth() {
		return Monthlygrowth;
	}
	public final void setMonthlygrowth(List<Inquire> monthlygrowth) {
		Monthlygrowth = monthlygrowth;
	}
	public final Integer getAgencyhasshown() {
		return Agencyhasshown;
	}
	public final void setAgencyhasshown(Integer agencyhasshown) {
		Agencyhasshown = agencyhasshown;
	}
	@Override
	public String toString() {
		return "ServiceItemsResult [ServiceType=" + ServiceType + ", ServiceArea=" + ServiceArea + ", Annualgrowth="
				+ Annualgrowth + ", Monthlygrowth=" + Monthlygrowth + ", Agencyhasshown=" + Agencyhasshown + "]";
	}
	
}
