package com.neu.service.impl;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.neu.dao.master.InnovationVolumeDao;
import com.neu.entity.InnovationVolumeResult;
import com.neu.service.InnovationVolumeService;
@Service
public class InnovationVolumeServiceimpl implements InnovationVolumeService {
	@Autowired
	private  InnovationVolumeDao InnovationVolumeDao;
	@Override
	public InnovationVolumeResult InnovationVolumeparam() {
		InnovationVolumeResult InnovationVolumeResult=new InnovationVolumeResult();
		InnovationVolumeResult.setShenqingshuliang(InnovationVolumeDao.shenqingshuliang());
		InnovationVolumeResult.setApplicationsnumber(InnovationVolumeDao.applicationsnumber());
		InnovationVolumeResult.setApplyofquota(InnovationVolumeDao.applyofquota());
		InnovationVolumeResult.setCredit(InnovationVolumeDao.credit());
		InnovationVolumeResult.setServicetype(InnovationVolumeDao.servicetype());
		InnovationVolumeResult.setFindings(InnovationVolumeDao.findings());
		InnovationVolumeResult.setApplication(InnovationVolumeDao.Application());
		
		InnovationVolumeResult.setApplyforquota(InnovationVolumeDao.Applyforquota());
		
		InnovationVolumeResult.setUnitnature(InnovationVolumeDao.Unitnature());
		InnovationVolumeResult.setArea(InnovationVolumeDao.area());
		InnovationVolumeResult.setIndustry(InnovationVolumeDao.industry());
		return InnovationVolumeResult;
	}

	

}
