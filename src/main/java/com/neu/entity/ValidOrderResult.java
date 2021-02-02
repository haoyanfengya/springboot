package com.neu.entity;

import java.util.List;

public class ValidOrderResult {
	/**有效订单数量 */
	private Integer youxiaodingdannumber;
	/**有效订单金额*/
	private Double youxiaodingdanmoney;
	/**确认完成订单数量*/
	private Integer carryOutnumber;
	/**确认完成订单金额*/
	private Double carryOutmoney;
	/**以提供服务的机构数量*/
	private Integer ServiceProvider;
	/**确认完成的机构数量*/
	private Integer CompletedServiceAgency;
	/**已下单用户数量*/
	private Integer NumberOfOrdersPlaced;
	/**确认完成用户数量*/
	private Integer NumberOfCompletedUsers;
	/**有效订单月增长情况*/
	List<Inquire> yuezengzhangnumberandmoney;
	
	/**有效订单年增长情况*/
	List<Inquire>nianzengzhangnumberandmoney;
	
	public final Integer getYouxiaodingdannumber() {
		return youxiaodingdannumber;
	}
	public final void setYouxiaodingdannumber(Integer youxiaodingdannumber) {
		this.youxiaodingdannumber = youxiaodingdannumber;
	}
	public final Double getYouxiaodingdanmoney() {
		return youxiaodingdanmoney;
	}
	public final void setYouxiaodingdanmoney(Double youxiaodingdanmoney) {
		this.youxiaodingdanmoney = youxiaodingdanmoney;
	}
	public final Integer getCarryOutnumber() {
		return carryOutnumber;
	}
	public final void setCarryOutnumber(Integer carryOutnumber) {
		this.carryOutnumber = carryOutnumber;
	}
	public final Double getCarryOutmoney() {
		return carryOutmoney;
	}
	public final void setCarryOutmoney(Double carryOutmoney) {
		this.carryOutmoney = carryOutmoney;
	}
	public final Integer getServiceProvider() {
		return ServiceProvider;
	}
	public final void setServiceProvider(Integer serviceProvider) {
		ServiceProvider = serviceProvider;
	}
	public final Integer getCompletedServiceAgency() {
		return CompletedServiceAgency;
	}
	public final void setCompletedServiceAgency(Integer completedServiceAgency) {
		CompletedServiceAgency = completedServiceAgency;
	}
	public final Integer getNumberOfOrdersPlaced() {
		return NumberOfOrdersPlaced;
	}
	public final void setNumberOfOrdersPlaced(Integer numberOfOrdersPlaced) {
		NumberOfOrdersPlaced = numberOfOrdersPlaced;
	}
	public final Integer getNumberOfCompletedUsers() {
		return NumberOfCompletedUsers;
	}
	public final void setNumberOfCompletedUsers(Integer numberOfCompletedUsers) {
		NumberOfCompletedUsers = numberOfCompletedUsers;
	}

	public final List<Inquire> getYuezengzhangnumberandmoney() {
		return yuezengzhangnumberandmoney;
	}
	public final void setYuezengzhangnumberandmoney(List<Inquire> yuezengzhangnumberandmoney) {
		this.yuezengzhangnumberandmoney = yuezengzhangnumberandmoney;
	}
	public final List<Inquire> getNianzengzhangnumberandmoney() {
		return nianzengzhangnumberandmoney;
	}
	public final void setNianzengzhangnumberandmoney(List<Inquire> nianzengzhangnumberandmoney) {
		this.nianzengzhangnumberandmoney = nianzengzhangnumberandmoney;
	}
	@Override
	public String toString() {
		return "ValidOrderResult [youxiaodingdannumber=" + youxiaodingdannumber + ", youxiaodingdanmoney="
				+ youxiaodingdanmoney + ", carryOutnumber=" + carryOutnumber + ", carryOutmoney=" + carryOutmoney
				+ ", ServiceProvider=" + ServiceProvider + ", CompletedServiceAgency=" + CompletedServiceAgency
				+ ", NumberOfOrdersPlaced=" + NumberOfOrdersPlaced + ", NumberOfCompletedUsers="
				+ NumberOfCompletedUsers + ", yuezengzhangnumberandmoney=" + yuezengzhangnumberandmoney
				+ ", nianzengzhangnumberandmoney=" + nianzengzhangnumberandmoney + "]";
	}

	
	
	
	
}
