package com.neu.entity;

import java.util.List;

public class ResourcesResult {
    /**机构级别分布*/
    private List<Inquire> resourceslevel;
    /**机构类型分布*/
    private List<Inquire> resourcestype;
    /**机构领域分布*/
    private List<Inquire> resourcesarea;
    /**机构重点实验室分布*/
    private List<Inquire> resourceslab;


    public List<Inquire> getResourceslevel() { return resourceslevel; }
    public void setResourceslevel(List<Inquire> resourceslevel) {
        this.resourceslevel = resourceslevel;
    }
    public List<Inquire> getResourcestype() {
        return resourcestype;
    }
    public void setResourcestype(List<Inquire> resourcestype) {
        this.resourcestype = resourcestype;
    }
    public List<Inquire> getResourcesarea() {
        return resourcesarea;
    }
    public void setResourcesarea(List<Inquire> resourcesarea) {
        this.resourcesarea = resourcesarea;
    }
    public List<Inquire> getResourceslab() {
        return resourceslab;
    }
    public void setResourceslab(List<Inquire> resourceslab) {
        this.resourceslab = resourceslab;
    }




    @Override
    public String toString() {
        return "ResourcesResult [resourceslevel=" + resourceslevel + ", resourcestype=" + resourcestype + ", resourcesarea="
                + resourcesarea + ", resourceslab=" + resourceslab + "]";
    }


}
