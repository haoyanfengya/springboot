package com.neu.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.neu.dao.master.ValidOrderDao;
import com.neu.entity.ValidOrderResult;
import com.neu.service.ValidOrderService;
@Service
public class ValidOrderServiceimpl implements ValidOrderService {
	@Autowired
	private ValidOrderDao validOrderDao;
	@Override
	public ValidOrderResult ValidOrderparam() {
		ValidOrderResult validOrderResult=new ValidOrderResult();
		validOrderResult.setYouxiaodingdannumber(validOrderDao.youxiaodingdannumber());
		validOrderResult.setYouxiaodingdanmoney(validOrderDao.youxiaodingdanmoney());
		validOrderResult.setCarryOutnumber(validOrderDao.carryOutnumber());
		validOrderResult.setCarryOutmoney(validOrderDao.carryOutmoney());
		validOrderResult.setServiceProvider(validOrderDao.ServiceProvider());
		validOrderResult.setCompletedServiceAgency(validOrderDao.CompletedServiceAgency());
		validOrderResult.setNumberOfOrdersPlaced(validOrderDao.NumberOfOrdersPlaced());
		validOrderResult.setNumberOfCompletedUsers(validOrderDao.NumberOfCompletedUsers());
		validOrderResult.setYuezengzhangnumberandmoney(validOrderDao.yuezengzhangnumberandmoney());
		
		validOrderResult.setNianzengzhangnumberandmoney(validOrderDao.nianzengzhangnumberandmoney());
		
		return validOrderResult;
	}

	

}
