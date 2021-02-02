package com.neu.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.neu.dao.master.ExpertTalentDao;
import com.neu.entity.ExpertTalentResult;
import com.neu.service.ExpertTalentService;
@Service
public class ExpertTalentServiceimpl implements ExpertTalentService {
	@Autowired
	private  ExpertTalentDao expertTalentDao;
	
	
	@Override
	public ExpertTalentResult ExpertTalentparam() {
		ExpertTalentResult expertTalentResult=new ExpertTalentResult();
		expertTalentResult.setZhuanjiafabu(expertTalentDao.zhuanjiafabu());
		expertTalentResult.setJishuchaungxinnumber(expertTalentDao.jishuchaungxin());
		expertTalentResult.setGaoduanguwen(expertTalentDao.gaoduanguwen());
		expertTalentResult.setXuqiuzhenduan(expertTalentDao.xuqiuzhenduan());
		expertTalentResult.setPeixunjiangshi(expertTalentDao.peixunjiangshi());
		expertTalentResult.setWendazhuanjia(expertTalentDao.wendazhuanjia());
		expertTalentResult.setXinxibeian(expertTalentDao.xinxibeian());
		expertTalentResult.setNianzengzhang(expertTalentDao.nianzengzhang());
		expertTalentResult.setZhuanyelingyu(expertTalentDao.zhuanyelingyu());
		
		return expertTalentResult;
	}

}
