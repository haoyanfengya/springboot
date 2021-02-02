package com.neu.dao.master;

import com.neu.entity.Inquire;

import java.util.List;

public interface PolicyNumDao {
    /**政策发布数量*/
    Integer  zhengcefabushuliang();
    /**政策法规发布情况*/
    List<Inquire> zhengcefaguifabu();
    /**政策法规类型分布*/
    List<Inquire> leixingfenbu();
}
