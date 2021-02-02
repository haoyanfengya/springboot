package com.neu.entity;


import java.util.List;

public  class LargeInstrumentResult {
	/**仪器发布*/
	private Integer yiqifabu;
	/**仪器原值*/
	private Double yiqiyuanzhi;
	/**仪器领域分布*/
	private List<Inquire> lingyufenbu;
	/**仪器分类饼图*/
	private List<Inquire> yiqifenlei;
	/**大型仪器年增长情况*/
	private List<Inquire> nianzengzhang;
	/**大型仪器按机构类型分类情况*/
	private List<Inquire> jigouleixingfenbu;

	/**仪器购置目的分布饼图*/
	private List<Inquire> Lagouzhimudi;
	public final Integer getYiqifabu() {
		return yiqifabu;
	}
	public final void setYiqifabu(Integer yiqifabu) {
		this.yiqifabu = yiqifabu;
	}
	public final Double getYiqiyuanzhi() {
		return yiqiyuanzhi;
	}
	public final void setYiqiyuanzhi(Double yiqiyuanzhi) {
		this.yiqiyuanzhi = yiqiyuanzhi;
	}
	public final List<Inquire> getLingyufenbu() {
		return lingyufenbu;
	}
	public final void setLingyufenbu(List<Inquire> lingyufenbu) {
		this.lingyufenbu = lingyufenbu;
	}
	public final List<Inquire> getYiqifenlei() {
		return yiqifenlei;
	}
	public final void setYiqifenlei(List<Inquire> yiqifenlei) {
		this.yiqifenlei = yiqifenlei;
	}
	public final List<Inquire> getNianzengzhang() {
		return nianzengzhang;
	}
	public final void setNianzengzhang(List<Inquire> nianzengzhang) {
		this.nianzengzhang = nianzengzhang;
	}
	public final List<Inquire> getJigouleixingfenbu() {
		return jigouleixingfenbu;
	}
	public final void setJigouleixingfenbu(List<Inquire> jigouleixingfenbu) {
		this.jigouleixingfenbu = jigouleixingfenbu;
	}
	
	public final List<Inquire> getLagouzhimudi() {
		return Lagouzhimudi;
	}
	public final void setLagouzhimudi(List<Inquire> lagouzhimudi) {
		Lagouzhimudi = lagouzhimudi;
	}
	@Override
	public String toString() {
		return "LargeInstrumentResult [yiqifabu=" + yiqifabu + ", yiqiyuanzhi=" + yiqiyuanzhi + ", lingyufenbu="
				+ lingyufenbu + ", yiqifenlei=" + yiqifenlei + ", nianzengzhang=" + nianzengzhang + ", jigouleixingfenbu="
				+ jigouleixingfenbu + ", Lagouzhimudi=" + Lagouzhimudi + "]";
	}
	
}