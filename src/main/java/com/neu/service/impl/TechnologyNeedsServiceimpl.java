package com.neu.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.neu.dao.master.TechnologyNeedsDao;
import com.neu.service.TechnologyNeedsService;
import com.neu.entity.TechnologyNeedsResult;
@Service
public class TechnologyNeedsServiceimpl implements TechnologyNeedsService {
	@Autowired
	private TechnologyNeedsDao TechnologgyNeedsDao;
	@Override
	public TechnologyNeedsResult TechnologyNeedsparam() {
		TechnologyNeedsResult TechnologyNeedsResult=new TechnologyNeedsResult();
		TechnologyNeedsResult.setXuqiufabu(TechnologgyNeedsDao.xuqiufabu());
		TechnologyNeedsResult.setChengguolingyu(TechnologgyNeedsDao.chengguolingyu());
		TechnologyNeedsResult.setYuezengzhang(TechnologgyNeedsDao.yuezengzhang());
		return TechnologyNeedsResult;
	}

}
