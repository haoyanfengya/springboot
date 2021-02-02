package com.neu.service.impl;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.neu.dao.master.ServiceItemsDao;

import com.neu.entity.ServiceItemsResult;
import com.neu.service.ServiceItemsService;
@Service
public class ServiceItemsServiceimpl implements ServiceItemsService{
	@Autowired
	private ServiceItemsDao serviceItemsDao;
	@Override
	public ServiceItemsResult ServiceItemsparam() {
		ServiceItemsResult ServiceItemsresult=new ServiceItemsResult();
		ServiceItemsresult.setServiceType(serviceItemsDao.ServiceType());
		ServiceItemsresult.setServiceArea(serviceItemsDao.ServiceArea());
		ServiceItemsresult.setAnnualgrowth(serviceItemsDao.Annualgrowth());
		
		ServiceItemsresult.setMonthlygrowth(serviceItemsDao.Monthlygrowth());
		ServiceItemsresult.setAgencyhasshown(serviceItemsDao.Agencyhasshown());
		return ServiceItemsresult;
	}

}
