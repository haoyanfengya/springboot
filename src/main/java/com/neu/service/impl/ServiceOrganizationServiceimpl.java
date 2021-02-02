package com.neu.service.impl;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.neu.dao.master.ServiceOrganizationDao;

import com.neu.entity.ServiceOrganizationResult;
import com.neu.service.ServiceOrganizationService;
@Service
public class ServiceOrganizationServiceimpl implements ServiceOrganizationService {
	
	@Autowired
	private ServiceOrganizationDao ServiceOrganizationdao;

	@Override
	public ServiceOrganizationResult ServiceOrganizationparam() {
		ServiceOrganizationResult  ServiceOrganization=new ServiceOrganizationResult();
		
		ServiceOrganization.setFwjgyizhanshi(ServiceOrganizationdao.fuwujigouyizhanshi());
		ServiceOrganization.setCMA(ServiceOrganizationdao.CMA());
		ServiceOrganization.setCNAS(ServiceOrganizationdao.CNAS());
		ServiceOrganization.setCMACNAS(ServiceOrganizationdao.CMACNAS());
		ServiceOrganization.setFwjgtype(ServiceOrganizationdao.fwjgTypeDistribution());
		ServiceOrganization.setRegionalDistribution(ServiceOrganizationdao.RegionalDistribution());
		ServiceOrganization.setServiceType(ServiceOrganizationdao.Servicetype());
		ServiceOrganization.setServiceArea(ServiceOrganizationdao.ServiceArea());
		return ServiceOrganization;
	}

}
