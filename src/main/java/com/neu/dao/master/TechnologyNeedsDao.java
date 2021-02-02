package com.neu.dao.master;

import java.util.List;

import com.neu.entity.Inquire;

public interface TechnologyNeedsDao {

	/**需求发布数量*/
	Integer xuqiufabu();
	/**需求月增长情况*/
	List<Inquire> yuezengzhang();
	/**科研成果领域分布饼图*/
	List<Inquire> chengguolingyu();
}
