package com.neu.util;

import java.util.ArrayList;
import java.util.List;

import com.neu.entity.Inquire;
/**这个工具类用于清理数据*/
public class Clean {
				
	/**这个方法用于整合同名的区 以及排除不在沈阳的 用于第二列为数字的*/
		public static List<Inquire> cleannumber(List<Inquire> in){
			ArrayList<Inquire> out=new ArrayList<Inquire>();
			//康平
			Integer kangping=0;
			//法库
			Integer faku=0;
			//新民
			Integer xinmin=0;
			//于洪
			Integer yuhong=0;
			//沈北
			Integer shenbei=0;
			//浑南 
			Integer hunnan=0;
			//辽中
			Integer liaozhong=0;
			//苏家屯 
			Integer sujiatun=0;
			//铁西
			Integer tiexi=0;
			//和平
			Integer heping=0;
			//沈河
			Integer shenhe=0;
			//大东
			Integer dadong=0;
			//皇姑
			Integer huanggu=0;
			
			for(int find=0;find<in.size();find++) {
				if(in.get(find).getAreas()!=""&in.get(find).getAreas()!=null) {
					if(in.get(find).getAreas().lastIndexOf("康平")>=0) {
						kangping+=in.get(find).getNumber();
					}
					if(in.get(find).getAreas().lastIndexOf("法库")>=0) {
						faku+=in.get(find).getNumber();
					}
					if(in.get(find).getAreas().lastIndexOf("新民")>=0) {
						xinmin+=in.get(find).getNumber();
					}
					if(in.get(find).getAreas().lastIndexOf("于洪")>=0) {
						yuhong+=in.get(find).getNumber();
					}
					if(in.get(find).getAreas().lastIndexOf("新城子")>=0) {
						shenbei+=in.get(find).getNumber();
					}
					if(in.get(find).getAreas().lastIndexOf("沈北")>=0) {
						shenbei+=in.get(find).getNumber();
					}
					if(in.get(find).getAreas().lastIndexOf("浑南")>=0) {
						hunnan+=in.get(find).getNumber();
					}
					if(in.get(find).getAreas().lastIndexOf("辽中")>=0) {
						liaozhong+=in.get(find).getNumber();
					}
					if(in.get(find).getAreas().lastIndexOf("苏家屯")>=0) {
						sujiatun+=in.get(find).getNumber();
					}
					if(in.get(find).getAreas().lastIndexOf("铁西")>=0) {
						tiexi+=in.get(find).getNumber();
					}
					if(in.get(find).getAreas().lastIndexOf("和平")>=0) {
						heping+=in.get(find).getNumber();
					}
					if(in.get(find).getAreas().lastIndexOf("沈河")>=0) {
						shenhe+=in.get(find).getNumber();
					}
					if(in.get(find).getAreas().lastIndexOf("大东")>=0) {
						dadong+=in.get(find).getNumber();
					}
					if(in.get(find).getAreas().lastIndexOf("皇姑")>=0) {
						huanggu+=in.get(find).getNumber();
					}
				}
			}
			out.add(new Inquire("和平区",heping));
			out.add(new Inquire("皇姑区",huanggu));
			out.add(new Inquire("沈河区",shenhe));
			out.add(new Inquire("大东区",dadong));
			out.add(new Inquire("浑南区",hunnan));
			out.add(new Inquire("铁西区",tiexi));
			out.add(new Inquire("于洪区",yuhong));
			out.add(new Inquire("苏家屯区",sujiatun));
			out.add(new Inquire("辽中区",liaozhong));
			out.add(new Inquire("沈北新区",shenbei));
			out.add(new Inquire("新民市",xinmin));
			out.add(new Inquire("法库县",faku));
			out.add(new Inquire("康平县",kangping));
			
			
			
			
			
			
			
			
			
			
			
			
			
			return out;
			
		}
		/**这个方法用于整合同名的区 以及排除不在沈阳的 用于第二列为数字的*/
		public static List<Inquire> cleandouble(List<Inquire> in){
			ArrayList<Inquire> out=new ArrayList<Inquire>();
			//康平
			double kangping=0;
			//法库
			double faku=0;
			//新民
			double xinmin=0;
			//于洪
			double yuhong=0;
			//沈北
			double shenbei=0;
			//浑南 
			double hunnan=0;
			//辽中
			double liaozhong=0;
			//苏家屯 
			double sujiatun=0;
			//铁西
			double tiexi=0;
			//和平
			double heping=0;
			//沈河
			double shenhe=0;
			//大东
			double dadong=0;
			//皇姑
			double huanggu=0;
			
			for(int find=0;find<in.size();find++) {
				if(in.get(find).getAreas()!=""&in.get(find).getAreas()!=null) {
					if(in.get(find).getAreas().lastIndexOf("康平")>=0) {
						kangping+=in.get(find).getAmount();
					}
					if(in.get(find).getAreas().lastIndexOf("法库")>=0) {
						faku+=in.get(find).getAmount();
					}
					if(in.get(find).getAreas().lastIndexOf("新民")>=0) {
						xinmin+=in.get(find).getAmount();
					}
					if(in.get(find).getAreas().lastIndexOf("于洪")>=0) {
						yuhong+=in.get(find).getAmount();
					}
					if(in.get(find).getAreas().lastIndexOf("新城子")>=0) {
						shenbei+=in.get(find).getAmount();
					}
					if(in.get(find).getAreas().lastIndexOf("沈北")>=0) {
						shenbei+=in.get(find).getAmount();
					}
					if(in.get(find).getAreas().lastIndexOf("浑南")>=0) {
						hunnan+=in.get(find).getAmount();
					}
					if(in.get(find).getAreas().lastIndexOf("辽中")>=0) {
						liaozhong+=in.get(find).getAmount();
					}
					if(in.get(find).getAreas().lastIndexOf("苏家屯")>=0) {
						sujiatun+=in.get(find).getAmount();
					}
					if(in.get(find).getAreas().lastIndexOf("铁西")>=0) {
						tiexi+=in.get(find).getAmount();
					}
					if(in.get(find).getAreas().lastIndexOf("和平")>=0) {
						heping+=in.get(find).getAmount();
					}
					if(in.get(find).getAreas().lastIndexOf("沈河")>=0) {
						shenhe+=in.get(find).getAmount();
					}
					if(in.get(find).getAreas().lastIndexOf("大东")>=0) {
						dadong+=in.get(find).getAmount();
					}
					if(in.get(find).getAreas().lastIndexOf("皇姑")>=0) {
						huanggu+=in.get(find).getAmount();
					}
				}
			}
			out.add(new Inquire("康平县",kangping));
			out.add(new Inquire("法库县",faku));
			out.add(new Inquire("新民市",xinmin));
			out.add(new Inquire("于洪区",yuhong));
			out.add(new Inquire("沈北新区",shenbei));
			out.add(new Inquire("浑南区",hunnan));
			out.add(new Inquire("辽中区",liaozhong));
			out.add(new Inquire("苏家屯区",sujiatun));
			out.add(new Inquire("铁西区",tiexi));
			out.add(new Inquire("和平区",heping));
			out.add(new Inquire("沈河区",shenhe));
			out.add(new Inquire("大东区",dadong));
			out.add(new Inquire("皇姑区",huanggu));
			
			return out;
			
		}
			
	
}
