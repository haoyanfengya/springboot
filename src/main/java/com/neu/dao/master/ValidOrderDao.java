package com.neu.dao.master;
import java.util.List;

import com.neu.entity.Inquire;
public interface ValidOrderDao {
			/**有效订单数量 */
			Integer youxiaodingdannumber();
			/**有效订单金额*/
			Double youxiaodingdanmoney();
			/**确认完成订单数量*/
			Integer carryOutnumber();
			/**确认完成订单金额*/
			Double carryOutmoney();
			/**以提供服务的机构数量*/
			Integer ServiceProvider();
			/**确认完成的机构数量*/
			Integer CompletedServiceAgency();
			/**已下单用户数量*/
			Integer NumberOfOrdersPlaced();
			/**确认完成用户数量*/
			Integer NumberOfCompletedUsers();
			/**有效订单及有效订单金额月增长情况*/
			List<Inquire> yuezengzhangnumberandmoney();
			
			/**有效订单及有效订单金额年增长情况*/
			List<Inquire>nianzengzhangnumberandmoney();
			
			
}
