package com.neu.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.neu.dao.master.RegisteredBusinessDao;
import com.neu.entity.RegisteredBusinessResult;
import com.neu.service.RegisteredBusinessService;
@Service
public class RegisteredBusinessServiceimpl implements RegisteredBusinessService {
	@Autowired
	private RegisteredBusinessDao RegisteredBusinessDao;
	@Override
	public RegisteredBusinessResult RegisteredBusinessparam() {
		RegisteredBusinessResult registeredBusinessResult=new RegisteredBusinessResult();
		registeredBusinessResult.setRegisteredUsers(RegisteredBusinessDao.RegisteredUsers());
		registeredBusinessResult.setActivateUser(RegisteredBusinessDao.ActivateUser());
		registeredBusinessResult.setQiyeActivateUser(RegisteredBusinessDao.qiyeActivateUser());
		registeredBusinessResult.setTeamActivateUser(RegisteredBusinessDao.teamActivateUser());
		registeredBusinessResult.setTypeDistribution(RegisteredBusinessDao.TypeDistribution());
		registeredBusinessResult.setActivatedEnterprise(RegisteredBusinessDao.ActivatedEnterprise());
		registeredBusinessResult.setEnterpriseUsers(RegisteredBusinessDao.EnterpriseUsers());
		registeredBusinessResult.setCorporateUsers(RegisteredBusinessDao.CorporateUsers());
		registeredBusinessResult.setUserGrowth(RegisteredBusinessDao.UserGrowth());
		registeredBusinessResult.setYueRegisteredUsers(RegisteredBusinessDao.yueRegisteredUsers());
		registeredBusinessResult.setDivision(RegisteredBusinessDao.Division());
		registeredBusinessResult.setTypesof(RegisteredBusinessDao.typesof());
		registeredBusinessResult.setStartupTeam(RegisteredBusinessDao.StartupTeam());
		registeredBusinessResult.setStartupTeamDistribution(RegisteredBusinessDao.StartupTeamDistribution());
		return registeredBusinessResult;
	}

}
