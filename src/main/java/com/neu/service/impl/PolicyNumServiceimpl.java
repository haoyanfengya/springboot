package com.neu.service.impl;


import com.neu.dao.master.PolicyNumDao;
import com.neu.service.PolicyNumService;
import com.neu.entity.PolicyNumResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PolicyNumServiceimpl implements PolicyNumService{
    @Autowired
    private PolicyNumDao PolicyNumDao;

    @Override
    public PolicyNumResult PolicyNumparam() {
        PolicyNumResult PolicyNumResult=new PolicyNumResult();
        PolicyNumResult.setZhengcefabushuliang(PolicyNumDao.zhengcefabushuliang());
        PolicyNumResult.setZhengcefaguifabu(PolicyNumDao.zhengcefaguifabu());
        PolicyNumResult.setLeixingfenbu(PolicyNumDao.leixingfenbu());
        return PolicyNumResult;
    }
}
