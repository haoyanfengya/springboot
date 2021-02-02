package com.neu.dao.master;

import java.util.List;

import com.neu.entity.Inquire;

public interface RegisteredBusinessDao {
		/**总注册用户数*/
			Integer RegisteredUsers();
			/**总激活用户数*/
			Integer ActivateUser();
			/**企业激活用户数*/
			Integer qiyeActivateUser();
			/**创业团队激活用户数*/
			Integer teamActivateUser();
			/**注册用户类型分布*/
			List<Inquire> TypeDistribution();
			/**已激活企业认定情况*/
			List<Inquire> ActivatedEnterprise();
			/**年企业用户情况*/
			List<Inquire> EnterpriseUsers();
			/**月企业用户情况*/
			List<Inquire>CorporateUsers();
			/**年注册用户增长情况*/
			List<Inquire> UserGrowth();
			/**月注册用户增长情况*/
			List<Inquire>yueRegisteredUsers();
			/**已激活企业用户区域分布饼图*/
			List<Inquire> Division();
			/**已激活企业类型饼图*/
			List<Inquire> typesof();
			/**年创业团队情况*/
			List<Inquire> StartupTeam();
			/** 已激活创业团队分布*/
			List<Inquire> StartupTeamDistribution();
			
			
}
