package com.neu.service;

import javax.servlet.http.HttpSession;

import com.neu.entity.HomeResult;

public interface HomeService {
	/**HomeResult 是一个类用于存放首页的所有数据*/
		HomeResult homeparam(String condition,HttpSession session,String items,String revenue);
}
