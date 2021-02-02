package com.neu.entity;


import java.util.List;

public  class TechnologyResult {
	/**科研成果发布数量*/
	private Integer  fabushuliang;
	/**科研成果月增长情况*/
	private List<Inquire> yuezengzhang;
	/**科研成果领域分布饼图*/
	private List<Inquire> lingyufenbu;
	public Integer getFabushuliang() {
		return fabushuliang;
	}
	public void setFabushuliang(Integer fabushuliang) {
		this.fabushuliang = fabushuliang;
	}
	public List<Inquire> getYuezengzhang() {
		return yuezengzhang;
	}
	public void setYuezengzhang(List<Inquire> yuezengzhang) {
		this.yuezengzhang = yuezengzhang;
	}
	public List<Inquire> getLingyufenbu() {
		return lingyufenbu;
	}
	public void setLingyufenbu(List<Inquire> lingyufenbu) {
		this.lingyufenbu = lingyufenbu;
	}
	@Override
	public String toString() {
		return "TechnologyResult [fabushuliang=" + fabushuliang + ", yuezengzhang=" + yuezengzhang + ", lingyufenbu="
				+ lingyufenbu + "]";
	}
	
	
}