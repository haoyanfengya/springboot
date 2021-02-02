package com.neu.dao.master;

import com.neu.entity.Inquire;

import java.util.List;

public interface ResourcesDao {
    /**机构级别分布*/
    List<Inquire> resourceslevel();
    /**机构类型分布*/
    List<Inquire> resourcestype();
    /**机构领域分布*/
    List<Inquire> resourcesarea();
    /**机构重点实验室分布*/
    List<Inquire> resourceslab();
}
