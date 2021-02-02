package com.neu.entity;

import java.util.List;

public class RegisteredBusinessResult {
	/**总注册用户数*/
	private Integer RegisteredUsers;
	/**总激活用户数*/
	private Integer ActivateUser;
	/**企业激活用户数*/
	private Integer qiyeActivateUser;
	/**创业团队激活用户数*/
	private Integer teamActivateUser;
	/**注册用户类型分布*/
	private List<Inquire> TypeDistribution;
	/**已激活企业认定情况*/
	private List<Inquire> ActivatedEnterprise;
	/**年企业用户情况*/
	private List<Inquire> EnterpriseUsers;
	/**月企业用户情况*/
	private List<Inquire>CorporateUsers;
	/**年注册用户增长情况*/
	private List<Inquire> UserGrowth;
	/**月注册用户增长情况*/
	private List<Inquire>yueRegisteredUsers;
	/**已激活企业用户区域分布饼图*/
	private List<Inquire> Division;
	/**已激活企业类型饼图*/
	private List<Inquire> typesof;
	/**年创业团队情况*/
	private List<Inquire> StartupTeam;
	/** 已激活创业团队分布*/
	private List<Inquire> StartupTeamDistribution;
	public final Integer getRegisteredUsers() {
		return RegisteredUsers;
	}
	public final void setRegisteredUsers(Integer registeredUsers) {
		RegisteredUsers = registeredUsers;
	}
	public final Integer getActivateUser() {
		return ActivateUser;
	}
	public final void setActivateUser(Integer activateUser) {
		ActivateUser = activateUser;
	}
	public final Integer getQiyeActivateUser() {
		return qiyeActivateUser;
	}
	public final void setQiyeActivateUser(Integer qiyeActivateUser) {
		this.qiyeActivateUser = qiyeActivateUser;
	}
	public final Integer getTeamActivateUser() {
		return teamActivateUser;
	}
	public final void setTeamActivateUser(Integer teamActivateUser) {
		this.teamActivateUser = teamActivateUser;
	}
	public final List<Inquire> getTypeDistribution() {
		return TypeDistribution;
	}
	public final void setTypeDistribution(List<Inquire> typeDistribution) {
		TypeDistribution = typeDistribution;
	}
	public final List<Inquire> getActivatedEnterprise() {
		return ActivatedEnterprise;
	}
	public final void setActivatedEnterprise(List<Inquire> activatedEnterprise) {
		ActivatedEnterprise = activatedEnterprise;
	}
	public final List<Inquire> getEnterpriseUsers() {
		return EnterpriseUsers;
	}
	public final void setEnterpriseUsers(List<Inquire> enterpriseUsers) {
		EnterpriseUsers = enterpriseUsers;
	}
	public final List<Inquire> getCorporateUsers() {
		return CorporateUsers;
	}
	public final void setCorporateUsers(List<Inquire> corporateUsers) {
		CorporateUsers = corporateUsers;
	}
	public final List<Inquire> getUserGrowth() {
		return UserGrowth;
	}
	public final void setUserGrowth(List<Inquire> userGrowth) {
		UserGrowth = userGrowth;
	}
	public final List<Inquire> getYueRegisteredUsers() {
		return yueRegisteredUsers;
	}
	public final void setYueRegisteredUsers(List<Inquire> yueRegisteredUsers) {
		this.yueRegisteredUsers = yueRegisteredUsers;
	}
	public final List<Inquire> getDivision() {
		return Division;
	}
	public final void setDivision(List<Inquire> division) {
		Division = division;
	}
	public final List<Inquire> getTypesof() {
		return typesof;
	}
	public final void setTypesof(List<Inquire> typesof) {
		this.typesof = typesof;
	}
	public final List<Inquire> getStartupTeam() {
		return StartupTeam;
	}
	public final void setStartupTeam(List<Inquire> startupTeam) {
		StartupTeam = startupTeam;
	}
	public final List<Inquire> getStartupTeamDistribution() {
		return StartupTeamDistribution;
	}
	public final void setStartupTeamDistribution(List<Inquire> startupTeamDistribution) {
		StartupTeamDistribution = startupTeamDistribution;
	}
	@Override
	public String toString() {
		return "RegisteredBusinessResult [RegisteredUsers=" + RegisteredUsers + ", ActivateUser=" + ActivateUser
				+ ", qiyeActivateUser=" + qiyeActivateUser + ", teamActivateUser=" + teamActivateUser
				+ ", TypeDistribution=" + TypeDistribution + ", ActivatedEnterprise=" + ActivatedEnterprise
				+ ", EnterpriseUsers=" + EnterpriseUsers + ", CorporateUsers=" + CorporateUsers + ", UserGrowth="
				+ UserGrowth + ", yueRegisteredUsers=" + yueRegisteredUsers + ", Division=" + Division + ", typesof="
				+ typesof + ", StartupTeam=" + StartupTeam + ", StartupTeamDistribution=" + StartupTeamDistribution
				+ "]";
	}
	
}
