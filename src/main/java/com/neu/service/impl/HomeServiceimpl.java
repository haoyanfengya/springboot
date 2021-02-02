package com.neu.service.impl;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.neu.dao.master.HomeDao;
import com.neu.entity.HomeResult;
import com.neu.entity.Inquire;

import com.neu.service.HomeService;
import com.neu.util.Clean;

/** HomeServiceimpl实现了HomeService接口 **/
@Service
public class HomeServiceimpl implements HomeService {
	/** 把homedao注入进来 */
	@Autowired
	private HomeDao HomeDao;

	/**
	 * 重写了HomeService接口的homeparam方法 调用dao查询主页所需参数
	 */
	@Override
	public HomeResult homeparam(String condition, HttpSession session, String items, String revenue) {
		boolean a = false;
		if (((String) session.getAttribute("condition")) != null & ((String) session.getAttribute("condition")) != "") {
			if (condition.equals((String) session.getAttribute("condition"))) {
				session.removeAttribute("condition");
			} else {
				a = true;
			}

		} else {
			a = true;
		}
		if (a) {
			if (!condition.equals("no")) {
				session.setAttribute("condition", condition);
			}
		}
		HomeResult home = new HomeResult();
		if (((String) session.getAttribute("condition")) != null) {
			
			condition = "%" + ((String) session.getAttribute("condition")).substring(0,2) + "%";
		} else {
			condition = (String) session.getAttribute("condition");
		}
			//赋值
		home.setTjptFuwujigouShu(HomeDao.tjptFuwujigouShu(condition));
		home.setTjptFuwuShu(HomeDao.tjptFuwuShu(condition));
		home.setTjptYiqiShu(HomeDao.tjptYiqiShu(condition));
		home.setTjptChengguoShu(HomeDao.tjptChengguoShu(condition));
		home.setTjptZhuanjiaShu(HomeDao.tjptZhuanjiaShu(condition));
		home.setTjptZhengceShu(HomeDao.tjptZhengceShu(condition));
		home.setEnterprise(HomeDao.enterprise(condition));
		home.setGzXuqiuShu(HomeDao.gzXuqiuShu(condition));
		home.setTjptCxjShenqingShu(HomeDao.tjptCxjShenqingShu(condition));
		home.setTjptCxjTongguoShu(HomeDao.tjptCxjTongguoShu(condition));
		home.setTjptDingdanfuwu(HomeDao.tjptDingdanfuwu(condition));
		home.setTjptDingdanqiye(HomeDao.tjptDingdanqiye(condition));
		home.setServiceAgencyTOP5(HomeDao.ServiceAgencyTOP5(items));
		home.setPassedcxj(HomeDao.passedcxj());
		home.setValidOrder(HomeDao.ValidOrder(revenue));
		home.setDeposit(HomeDao.Deposit());
		/**中间地图的选中的数据*/
		String attribute = (String)session.getAttribute("condition");
		//服务机构的
		List<Inquire> mapofservice = Clean.cleannumber(HomeDao.mapofservice());
		if(attribute!=null&&attribute.trim()!="") {
		for(int now=0;now<mapofservice.size();now++) {
			if(mapofservice.get(now).getAreas().lastIndexOf(attribute)>=0) {
				mapofservice.get(now).setSelected(true);
			}
		}}
		home.setMapofservice(mapofservice);
		
		
		
		//企业的
		List<Inquire> mapofenterprise = Clean.cleannumber(HomeDao.mapofenterprise());
		if(attribute!=null&&attribute.trim()!="") {
		for(int now=0;now<mapofenterprise.size();now++) {
			if(mapofenterprise.get(now).getAreas().lastIndexOf(attribute)>=0) {
				mapofenterprise.get(now).setSelected(true);
			}
		}}
		home.setMapofenterprise(mapofenterprise);
		
		
		
		
		home.setMaxmapofservice((Clean.cleannumber(HomeDao.mapofservice()).get(0).getNumber()/50+1)*50);
		home.setMaxmapofqiye((Clean.cleannumber(HomeDao.mapofenterprise()).get(0).getNumber()/50+1)*50);
		return home;
	}

}
