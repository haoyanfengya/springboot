package com.neu.controller;


import javax.servlet.http.HttpSession;

import com.neu.entity.*;
import com.neu.entity.PolicyNumResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.neu.service.ExpertTalentService;
import com.neu.service.HomeService;
import com.neu.service.InnovationVolumeService;
import com.neu.service.LargeInstrumentService;
import com.neu.service.RegisteredBusinessService;
import com.neu.service.ServiceItemsService;
import com.neu.service.ServiceOrganizationService;
import com.neu.service.TechnologyNeedsService;
import com.neu.service.TechnologyService;
import com.neu.service.PolicyNumService;
import com.neu.service.ValidOrderService;
import com.neu.service.ResourcesService;

@Controller
@RequestMapping("system")
public class Systemcontroller {
		@Autowired
		private HomeService HomeService;
		@Autowired
		private ServiceOrganizationService ServiceOrganizationservice;
		@Autowired
		private ServiceItemsService serviceItemsService;
		@Autowired
		private LargeInstrumentService largeInstrumentService;
		@Autowired
		private TechnologyService technologyService;
		@Autowired
		private ValidOrderService validOrderService;
		@Autowired
		private TechnologyNeedsService technologyNeedsService;
		@Autowired
		private InnovationVolumeService InnovationVolumeService;
		@Autowired
		private ExpertTalentService expertTalentService;
		@Autowired
		private RegisteredBusinessService RegisteredBusinessService;
		@Autowired
		private PolicyNumService policyNumService;
		@Autowired
		private ResourcesService resourcesService;

		
		/**跳转到home.jsp*/
		@RequestMapping("home")
		public String index() {
			return "home";
		}
		/**前端用ajax访问可以获取到主页面所有数据*/
		@ResponseBody
		@RequestMapping("homeresult")
		public HomeResult homeresult(String condition,HttpSession session,String items,String revenue) {
			return HomeService.homeparam(condition,session,items,revenue);
			
		}
		/**跳转到ServiceOrganization.jsp*/
		@RequestMapping("jumptoServiceOrganization")
		public String jumptoserviceOrganization() {
			
			return "ServiceOrganization";
		}
		/**前端用ajax访问可以获取到服务机构数主页面所有数据*/
		@ResponseBody
		@RequestMapping("ServiceOrganizationresult")
		public ServiceOrganizationResult serviceOrganizationresult(){
			return  ServiceOrganizationservice.ServiceOrganizationparam();
		}
		/**跳转到ServiceItems.jsp*/
		@RequestMapping("jumptoServiceItems")
		public String jumptoServiceItems() {
			return "ServiceItems";
		}
		/**前端用ajax访问可以获取到服务项目数主页面所有数据*/
		@ResponseBody
		@RequestMapping("ServiceItemsresult")
		public ServiceItemsResult ServiceItemsresult(){
			return  serviceItemsService.ServiceItemsparam();
		}
		
		
		/**跳转到LargeInstrument.jsp*/
		@RequestMapping("LargeInstrument")
		public String LargeInstrument() {
			
			return "LargeInstrument";
		}
		/**返回大型仪器分布情况页所有数据*/
		@ResponseBody
		@RequestMapping("LargeInstrumentresult")
		public LargeInstrumentResult LargeInstrumentresult() {
			
			return largeInstrumentService.LargeInstrumentparam();
		}
		
		
		/**跳转到Technology.jsp*/
		@RequestMapping("Technology")
		public String Technology() {
			
			return "Technology";
		}
		/**返回科研成果统计情况页所有数据*/
		@ResponseBody
		@RequestMapping("Technologyresult")
		public TechnologyResult Technologyresult() {
			
			return technologyService.Technologyparam();
		}
		
		
		
		
		/**跳转到ExpertTalent.jsp*/
		@RequestMapping("ExpertTalent")
		public String ExpertTalent() {
			return "ExpertTalent";
		}
		/**返回专家人才页数据*/
		@ResponseBody
		@RequestMapping("ExpertTalentresult")
		public ExpertTalentResult ExpertTalentresult() {
			return expertTalentService.ExpertTalentparam();
		}

		/**跳转到PolicyNum.jsp*/
		@RequestMapping("PolicyNum")
		public String PolicyNum() { return "PolicyNum"; }
		/**返回政策发布情况页所有数据*/
		@ResponseBody
		@RequestMapping("PolicyNumresult")
		public PolicyNumResult PolicyNumresult() { return policyNumService.PolicyNumparam(); }
		
		
		/**跳转到RegisteredBusiness.jsp*/
		@RequestMapping("RegisteredBusiness")
		public String RegisteredBusiness() {
			return "RegisteredBusiness";
		}
		/**返回注册企业数所有信息*/
		@ResponseBody
		@RequestMapping("RegisteredBusinessresult")
		public RegisteredBusinessResult RegisteredBusinessresult() {
			return RegisteredBusinessService.RegisteredBusinessparam();
		}
		
		/**跳转到TechnologyNeeds.jsp**/
		@RequestMapping("TechnologyNeeds")
		public String TechnologyNeeds() {
			return "TechnologyNeeds";
		}
		/**返回企业需求数量的所有数据*/
		@ResponseBody
		@RequestMapping("TechnologyNeedsresult")
		public TechnologyNeedsResult TechnologyNeedsresult() {
			return technologyNeedsService.TechnologyNeedsparam();
		}
		
		
		/***跳转到InnovationVolume.jsp*/
		@RequestMapping("InnovationVolume")
		public String InnovationVolume() {
			return "InnovationVolume";
		}
		/**获取创新卷页所有数据*/
		@ResponseBody
		@RequestMapping("InnovationVolumeresult")
		public InnovationVolumeResult InnovationVolumeresult() {
			return InnovationVolumeService.InnovationVolumeparam();
		}
		
		
		
		
		/***跳转到ValidOrder.jsp*/
		@RequestMapping("ValidOrder")
		public String ValidOrder() {
			return "ValidOrder";
		}
		/**获取有效订单数量及金额情况页面数据*/
		@ResponseBody
		@RequestMapping("ValidOrderresult")
		public ValidOrderResult ValidOrderresult() {
			return validOrderService.ValidOrderparam();
		}

		/**跳转到Resources.jsp**/
		@RequestMapping("Resources")
		public String Resources() {
			return "Resources";
		}
		/**返回资源分布的所有数据*/
		@ResponseBody
		@RequestMapping("Resourcesresult")
		public ResourcesResult ResourcesResult() {
			return resourcesService.Resourcesparam();
		}
}
