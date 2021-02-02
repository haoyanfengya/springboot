package com.neu.service.impl;

import com.neu.dao.master.ResourcesDao;
import com.neu.entity.ResourcesResult;
import com.neu.service.ResourcesService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ResourcesServiceimpl implements ResourcesService{
    @Autowired
    private ResourcesDao resourcesDao;
    @Override
    public ResourcesResult Resourcesparam() {
        ResourcesResult ResourcesResult=new ResourcesResult();
        ResourcesResult.setResourceslevel(resourcesDao.resourceslevel());
        ResourcesResult.setResourcestype(resourcesDao.resourcestype());
        ResourcesResult.setResourcesarea(resourcesDao.resourcesarea());
        ResourcesResult.setResourceslab(resourcesDao.resourceslab());
        return ResourcesResult;
    }
}
