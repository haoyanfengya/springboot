package com.neu.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.neu.entity.TechnologyResult;
import com.neu.service.TechnologyService;
import com.neu.dao.master.TechnologyDao;
@Service
public class TechnologyServiceimpl implements TechnologyService {
	@Autowired
	private TechnologyDao TechnologyDao;

	@Override
	public TechnologyResult Technologyparam() {
		TechnologyResult TechnologyResult=new TechnologyResult();
		TechnologyResult.setFabushuliang(TechnologyDao.fabushuliang());
		TechnologyResult.setLingyufenbu(TechnologyDao.lingyufenbu());
		TechnologyResult.setYuezengzhang(TechnologyDao.yuezengzhang());
		return TechnologyResult;
	}

}
