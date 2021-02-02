package com.neu.dao.master;

import java.util.List;



import com.neu.entity.Inquire;

public interface ExpertTalentDao {
    /**专家发布数量*/
	Integer zhuanjiafabu();
	/**专家类型*/
	/**技术创新服务专家*/
	Integer jishuchaungxin();
	/**高端顾问*/
	Integer gaoduanguwen();
	/**需求诊断专家*/
	Integer xuqiuzhenduan();
	/**培训讲师*/
	Integer peixunjiangshi();
	/**问答专家*/
	Integer wendazhuanjia();
	/**信息备案专家*/
	Integer xinxibeian();
	/**专家年增长情况*/
	List<Inquire> nianzengzhang();
	/**专家专业领域分布饼图*/
	List<Inquire> zhuanyelingyu();
}