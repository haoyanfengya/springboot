package com.neu.entity;


import java.util.List;

public  class TechnologyNeedsResult {
	/**需求发布数量*/
	private Integer xuqiufabu;
	/**需求月增长情况*/
	private List<Inquire> yuezengzhang;
	/**科研成果领域分布饼图*/
	private List<Inquire> chengguolingyu;
	public Integer getXuqiufabu() {
		return xuqiufabu;
	}
	public void setXuqiufabu(Integer xuqiufabu) {
		this.xuqiufabu = xuqiufabu;
	}
	public List<Inquire> getYuezengzhang() {
		return yuezengzhang;
	}
	public void setYuezengzhang(List<Inquire> yuezengzhang) {
		this.yuezengzhang = yuezengzhang;
	}
	public List<Inquire> getChengguolingyu() {
		return chengguolingyu;
	}
	public void setChengguolingyu(List<Inquire> chengguolingyu) {
		this.chengguolingyu = chengguolingyu;
	}
	@Override
	public String toString() {
		return "TechnologgyNeedsResult [xuqiufabu=" + xuqiufabu + ", yuezengzhang=" + yuezengzhang + ", chengguolingyu="
				+ chengguolingyu + ", getXuqiufabu()=" + getXuqiufabu() + ", getYuezengzhang()=" + getYuezengzhang()
				+ ", getChengguolingyu()=" + getChengguolingyu() + ", getClass()=" + getClass() + ", hashCode()="
				+ hashCode() + ", toString()=" + super.toString() + "]";
	}
	
}