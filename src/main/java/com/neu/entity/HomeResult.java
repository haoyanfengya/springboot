package com.neu.entity;

import java.util.List;


/** 主页的返回数据 */
public class HomeResult {
	/** 条件平台服务机构数 */
	private Integer tjptFuwujigouShu;
	/** 条件平台服务项目数 */
	private Integer tjptFuwuShu;
	/** 条件平台 大型仪器数 */
	private Integer tjptYiqiShu;
	/** 条件平台大型成果数 */
	private Integer tjptChengguoShu;
	/** 条件平台专家数 */
	private Integer tjptZhuanjiaShu;
	/** 条件平台政策数 */
	private Integer tjptZhengceShu;
	/** 注册企业数 */
	private Integer enterprise;
	/** 科技需求数 */
	private Integer gzXuqiuShu;
	/** 创新卷申请数量 */
	private Integer tjptCxjShenqingShu;
	/** 创新卷申请通过数量 */
	private Integer tjptCxjTongguoShu;
	/** 有效订单服务 */
	private Inquire tjptDingdanfuwu;
	/** 有效订单企业 */
	private Inquire tjptDingdanqiye;
	/** 服务机构服务项目TOP5 */
	private List<Inquire> ServiceAgencyTOP5;
	/** 通过审核的申请创新卷企业分布区域 */
	private List<Inquire> passedcxj;
	/** 服务机构本年度有效订单TOP5排名 */
	private List<Inquire> ValidOrder;
	/** 沈阳产业创新资源分布情况 */
	private List<Inquire> Deposit;
	/** 中间服务机构的数据 */
	private List<Inquire> mapofservice;
	/** 企业的数据 */
	private List<Inquire> mapofenterprise;
	/** 中间地图里服务机构页的最大值 **/
	private Integer maxmapofservice;
	/** 中间地图里企业页的最大值 */
	private Integer maxmapofqiye;
	public final Integer getTjptFuwujigouShu() {
		return tjptFuwujigouShu;
	}
	public final void setTjptFuwujigouShu(Integer tjptFuwujigouShu) {
		this.tjptFuwujigouShu = tjptFuwujigouShu;
	}
	public final Integer getTjptFuwuShu() {
		return tjptFuwuShu;
	}
	public final void setTjptFuwuShu(Integer tjptFuwuShu) {
		this.tjptFuwuShu = tjptFuwuShu;
	}
	public final Integer getTjptYiqiShu() {
		return tjptYiqiShu;
	}
	public final void setTjptYiqiShu(Integer tjptYiqiShu) {
		this.tjptYiqiShu = tjptYiqiShu;
	}
	public final Integer getTjptChengguoShu() {
		return tjptChengguoShu;
	}
	public final void setTjptChengguoShu(Integer tjptChengguoShu) {
		this.tjptChengguoShu = tjptChengguoShu;
	}
	public final Integer getTjptZhuanjiaShu() {
		return tjptZhuanjiaShu;
	}
	public final void setTjptZhuanjiaShu(Integer tjptZhuanjiaShu) {
		this.tjptZhuanjiaShu = tjptZhuanjiaShu;
	}
	public final Integer getTjptZhengceShu() {
		return tjptZhengceShu;
	}
	public final void setTjptZhengceShu(Integer tjptZhengceShu) {
		this.tjptZhengceShu = tjptZhengceShu;
	}
	public final Integer getEnterprise() {
		return enterprise;
	}
	public final void setEnterprise(Integer enterprise) {
		this.enterprise = enterprise;
	}
	public final Integer getGzXuqiuShu() {
		return gzXuqiuShu;
	}
	public final void setGzXuqiuShu(Integer gzXuqiuShu) {
		this.gzXuqiuShu = gzXuqiuShu;
	}
	public final Integer getTjptCxjShenqingShu() {
		return tjptCxjShenqingShu;
	}
	public final void setTjptCxjShenqingShu(Integer tjptCxjShenqingShu) {
		this.tjptCxjShenqingShu = tjptCxjShenqingShu;
	}
	public final Integer getTjptCxjTongguoShu() {
		return tjptCxjTongguoShu;
	}
	public final void setTjptCxjTongguoShu(Integer tjptCxjTongguoShu) {
		this.tjptCxjTongguoShu = tjptCxjTongguoShu;
	}
	public final Inquire getTjptDingdanfuwu() {
		return tjptDingdanfuwu;
	}
	public final void setTjptDingdanfuwu(Inquire tjptDingdanfuwu) {
		this.tjptDingdanfuwu = tjptDingdanfuwu;
	}
	public final Inquire getTjptDingdanqiye() {
		return tjptDingdanqiye;
	}
	public final void setTjptDingdanqiye(Inquire tjptDingdanqiye) {
		this.tjptDingdanqiye = tjptDingdanqiye;
	}
	public final List<Inquire> getServiceAgencyTOP5() {
		return ServiceAgencyTOP5;
	}
	public final void setServiceAgencyTOP5(List<Inquire> serviceAgencyTOP5) {
		ServiceAgencyTOP5 = serviceAgencyTOP5;
	}
	public final List<Inquire> getPassedcxj() {
		return passedcxj;
	}
	public final void setPassedcxj(List<Inquire> passedcxj) {
		this.passedcxj = passedcxj;
	}
	public final List<Inquire> getValidOrder() {
		return ValidOrder;
	}
	public final void setValidOrder(List<Inquire> validOrder) {
		ValidOrder = validOrder;
	}
	public final List<Inquire> getDeposit() {
		return Deposit;
	}
	public final void setDeposit(List<Inquire> deposit) {
		Deposit = deposit;
	}
	public final List<Inquire> getMapofservice() {
		return mapofservice;
	}
	public final void setMapofservice(List<Inquire> mapofservice) {
		this.mapofservice = mapofservice;
	}
	public final List<Inquire> getMapofenterprise() {
		return mapofenterprise;
	}
	public final void setMapofenterprise(List<Inquire> mapofenterprise) {
		this.mapofenterprise = mapofenterprise;
	}
	public final Integer getMaxmapofservice() {
		return maxmapofservice;
	}
	public final void setMaxmapofservice(Integer maxmapofservice) {
		this.maxmapofservice = maxmapofservice;
	}
	public final Integer getMaxmapofqiye() {
		return maxmapofqiye;
	}
	public final void setMaxmapofqiye(Integer maxmapofqiye) {
		this.maxmapofqiye = maxmapofqiye;
	}
	@Override
	public String toString() {
		return "HomeResult [tjptFuwujigouShu=" + tjptFuwujigouShu + ", tjptFuwuShu=" + tjptFuwuShu + ", tjptYiqiShu="
				+ tjptYiqiShu + ", tjptChengguoShu=" + tjptChengguoShu + ", tjptZhuanjiaShu=" + tjptZhuanjiaShu
				+", tjptZhengceShu=" + tjptZhengceShu +  ", enterprise=" + enterprise + ", gzXuqiuShu=" + gzXuqiuShu + ", tjptCxjShenqingShu="
				+ tjptCxjShenqingShu + ", tjptCxjTongguoShu=" + tjptCxjTongguoShu + ", tjptDingdanfuwu="
				+ tjptDingdanfuwu + ", tjptDingdanqiye=" + tjptDingdanqiye + ", ServiceAgencyTOP5=" + ServiceAgencyTOP5
				+ ", passedcxj=" + passedcxj + ", ValidOrder=" + ValidOrder + ", Deposit=" + Deposit + ", mapofservice="
				+ mapofservice + ", mapofenterprise=" + mapofenterprise + ", maxmapofservice=" + maxmapofservice
				+ ", maxmapofqiye=" + maxmapofqiye + "]";
	}

}
