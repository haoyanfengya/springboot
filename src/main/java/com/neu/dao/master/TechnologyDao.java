package com.neu.dao.master;

import java.util.List;

import com.neu.entity.Inquire;

public interface TechnologyDao {
	/**科研成果发布数量*/
	Integer  fabushuliang();
	/**科研成果月增长情况*/
	List<Inquire> yuezengzhang();
	/**科研成果领域分布饼图*/
	List<Inquire> lingyufenbu();
	
}
