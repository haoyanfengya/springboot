package com.neu.entity;

import java.util.List;

public class PolicyNumResult {
    /**政策发布数量*/
    private Integer  zhengcefabushuliang;
    /**政策法规发布情况*/
    private List<Inquire> zhengcefaguifabu;
    /**政策法规类型分布*/
    private List<Inquire> leixingfenbu;

    public Integer getZhengcefabushuliang() { return zhengcefabushuliang; }
    public void setZhengcefabushuliang(Integer zhengcefabushuliang) {
        this.zhengcefabushuliang = zhengcefabushuliang;
    }
    public List<Inquire> getZhengcefaguifabu() {
        return zhengcefaguifabu;
    }
    public void setZhengcefaguifabu(List<Inquire> zhengcefaguifabu) {
        this.zhengcefaguifabu = zhengcefaguifabu;
    }
    public List<Inquire> getLeixingfenbu() {
        return leixingfenbu;
    }
    public void setLeixingfenbu(List<Inquire> leixingfenbu) {
        this.leixingfenbu = leixingfenbu;
    }
    @Override
    public String toString() {
        return "PolicyNumResult [zhengcefabushuliang=" + zhengcefabushuliang + ", zhengcefaguifabu=" + zhengcefaguifabu + ", leixingfenbu="
                + leixingfenbu + "]";
    }
}
