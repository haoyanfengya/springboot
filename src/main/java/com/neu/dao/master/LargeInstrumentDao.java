package com.neu.dao.master;

import java.util.List;

import com.neu.entity.Inquire;

public interface LargeInstrumentDao {
     /**仪器发布*/
	Integer yiqifabu();
	/**仪器原值*/
	Double yiqiyuanzhi();
	/**仪器领域分布*/
	List<Inquire> lingyufenbu();
	/**仪器分类饼图*/
	List<Inquire> yiqifenlei();
	/**大型仪器年增长情况*/
	List<Inquire> nianzengzhang();
	/**大型仪器月增长情况*/
	List<Inquire> jigouleixingfenbu();
	/**仪器来源分布饼图*/
	List<Inquire> laiyuanfenbu();
	/**仪器购置目的分布饼图*/
	List<Inquire> gouzhimudi();
	
}