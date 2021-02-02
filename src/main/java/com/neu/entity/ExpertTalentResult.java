package com.neu.entity;


import java.util.List;
/**主页的返回数据*/
public  class ExpertTalentResult {
	 /**专家发布数量*/
	private Integer zhuanjiafabu;
	/**专家类型*/
	/**技术创新服务专家*/
	private Integer jishuchaungxinnumber;
	/**高端顾问*/
	private Integer gaoduanguwen;
	/**需求诊断专家*/
	private Integer xuqiuzhenduan;
	/**培训讲师*/
	private Integer peixunjiangshi;
	/**问答专家*/
	private Integer wendazhuanjia;
	/**信息备案专家*/
	private Integer xinxibeian;
	/**专家年增长情况*/
	private List<Inquire> nianzengzhang;
	/**专家专业领域分布饼图*/
	private List<Inquire> zhuanyelingyu;
	public final Integer getZhuanjiafabu() {
		return zhuanjiafabu;
	}
	public final void setZhuanjiafabu(Integer zhuanjiafabu) {
		this.zhuanjiafabu = zhuanjiafabu;
	}
	
	public final Integer getJishuchaungxinnumber() {
		return jishuchaungxinnumber;
	}
	public final void setJishuchaungxinnumber(Integer jishuchaungxinnumber) {
		this.jishuchaungxinnumber = jishuchaungxinnumber;
	}
	public final Integer getGaoduanguwen() {
		return gaoduanguwen;
	}
	public final void setGaoduanguwen(Integer gaoduanguwen) {
		this.gaoduanguwen = gaoduanguwen;
	}
	public final Integer getXuqiuzhenduan() {
		return xuqiuzhenduan;
	}
	public final void setXuqiuzhenduan(Integer xuqiuzhenduan) {
		this.xuqiuzhenduan = xuqiuzhenduan;
	}
	public final Integer getPeixunjiangshi() {
		return peixunjiangshi;
	}
	public final void setPeixunjiangshi(Integer peixunjiangshi) {
		this.peixunjiangshi = peixunjiangshi;
	}
	public final Integer getWendazhuanjia() {
		return wendazhuanjia;
	}
	public final void setWendazhuanjia(Integer wendazhuanjia) {
		this.wendazhuanjia = wendazhuanjia;
	}
	public final Integer getXinxibeian() {
		return xinxibeian;
	}
	public final void setXinxibeian(Integer xinxibeian) {
		this.xinxibeian = xinxibeian;
	}
	public final List<Inquire> getNianzengzhang() {
		return nianzengzhang;
	}
	public final void setNianzengzhang(List<Inquire> nianzengzhang) {
		this.nianzengzhang = nianzengzhang;
	}
	public final List<Inquire> getZhuanyelingyu() {
		return zhuanyelingyu;
	}
	public final void setZhuanyelingyu(List<Inquire> zhuanyelingyu) {
		this.zhuanyelingyu = zhuanyelingyu;
	}
	@Override
	public String toString() {
		return "ExpertTalentResult [zhuanjiafabu=" + zhuanjiafabu + ", jishuchaungxinnumber=" + jishuchaungxinnumber
				+ ", gaoduanguwen=" + gaoduanguwen + ", xuqiuzhenduan=" + xuqiuzhenduan + ", peixunjiangshi="
				+ peixunjiangshi + ", wendazhuanjia=" + wendazhuanjia + ", xinxibeian=" + xinxibeian
				+ ", nianzengzhang=" + nianzengzhang + ", zhuanyelingyu=" + zhuanyelingyu + "]";
	}
	
	
}
