package com.neu.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.neu.dao.master.LargeInstrumentDao;
import com.neu.entity.LargeInstrumentResult;
import com.neu.service.LargeInstrumentService;
@Service
public class LargeInstrumentServiceimpl implements LargeInstrumentService {
	@Autowired
	private LargeInstrumentDao largeInstrumentDao;
	
	@Override
	public LargeInstrumentResult LargeInstrumentparam() {
		LargeInstrumentResult LargeInstrumentResult=new LargeInstrumentResult();
		LargeInstrumentResult.setYiqifabu(largeInstrumentDao.yiqifabu());
		LargeInstrumentResult.setYiqiyuanzhi(largeInstrumentDao.yiqiyuanzhi());
		LargeInstrumentResult.setLingyufenbu(largeInstrumentDao.lingyufenbu());
		LargeInstrumentResult.setYiqifenlei(largeInstrumentDao.yiqifenlei());
		LargeInstrumentResult.setNianzengzhang(largeInstrumentDao.nianzengzhang());
		LargeInstrumentResult.setJigouleixingfenbu(largeInstrumentDao.jigouleixingfenbu());
		LargeInstrumentResult.setLagouzhimudi(largeInstrumentDao.gouzhimudi());
		return LargeInstrumentResult;
	}

}
