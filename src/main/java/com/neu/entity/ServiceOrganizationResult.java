package com.neu.entity;


import java.util.List;
/**服务机构的返回数据*/
public class ServiceOrganizationResult {
				/**服务机构已展示数量*/
				private Integer fwjgyizhanshi;
				/**CMA服务机构*/
				private Integer CMA;
				/**CNAS服务机构*/
				private Integer CNAS;
				/**CMACNAS*/
				private Integer CMACNAS;
				/**服务机构机构类型*/
				private List<Inquire> fwjgtype;
				/**服务机构区域分布饼图*/
				private List<Inquire> RegionalDistribution;
				/**服务机构服务类型分布饼图*/
				private List<Inquire> ServiceType;
				/**服务机构服务领域分布*/
				private List<Inquire> ServiceArea;
				public final List<Inquire> getServiceArea() {
					return ServiceArea;
				}
				public final void setServiceArea(List<Inquire> serviceArea) {
					ServiceArea = serviceArea;
				}
				public final List<Inquire> getServiceType() {
					return ServiceType;
				}
				public final void setServiceType(List<Inquire> serviceType) {
					ServiceType = serviceType;
				}
				public final List<Inquire> getRegionalDistribution() {
					return RegionalDistribution;
				}
				public final void setRegionalDistribution(List<Inquire> regionalDistribution) {
					RegionalDistribution = regionalDistribution;
				}
				public final List<Inquire> getFwjgtype() {
					return fwjgtype;
				}
				public final void setFwjgtype(List<Inquire> fwjgtype) {
					this.fwjgtype = fwjgtype;
				}
				public final Integer getFwjgyizhanshi() {
					return fwjgyizhanshi;
				}
				public final void setFwjgyizhanshi(Integer fwjgyizhanshi) {
					this.fwjgyizhanshi = fwjgyizhanshi;
				}
				public final Integer getCMA() {
					return CMA;
				}
				public final void setCMA(Integer cMA) {
					CMA = cMA;
				}
				public final Integer getCNAS() {
					return CNAS;
				}
				public final void setCNAS(Integer cNAS) {
					CNAS = cNAS;
				}
				public final Integer getCMACNAS() {
					return CMACNAS;
				}
				public final void setCMACNAS(Integer cMACNAS) {
					CMACNAS = cMACNAS;
				}
				
				
				@Override
				public String toString() {
					return "ServiceOrganizationResult [fwjgyizhanshi=" + fwjgyizhanshi + ", CMA=" + CMA + ", CNAS="
							+ CNAS + ", CMACNAS=" + CMACNAS + ", fwjgtype=" + fwjgtype + ", RegionalDistribution="
							+ RegionalDistribution + ", ServiceType=" + ServiceType + ", ServiceArea=" + ServiceArea
							+ "]";
				}
				
				
}
