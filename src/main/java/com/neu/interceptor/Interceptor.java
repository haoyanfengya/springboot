package com.neu.interceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;



@Component
public class Interceptor implements HandlerInterceptor {
		/**拦截器固有方法不需要修改*/
	@Override
	public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object arg2, Exception arg3)
			throws Exception {
		
		
	}
	/**拦截器固有方法不需要修改*/
	@Override
	public void postHandle(HttpServletRequest arg0, HttpServletResponse arg1, Object arg2, ModelAndView arg3)
			throws Exception {
		 
		
	}
	/**用于进行逻辑判断的方法  返回true表示放行 false表示拦截*/
	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object arg2) throws Exception {
		
		String path = request.getServletPath();
		
		//判断访问的控制器路径是否是以下路径  如果不是清空下面的session(首页的筛选数据)
	
		
		if(path.indexOf("system")>0) {
			if(path.indexOf("/system/home")<0) {
				HttpSession session = request.getSession();
				session.removeAttribute("condition");
				session.removeAttribute("items");
				session.removeAttribute("revenue");
			}
		}
		return true;
		
	}

	

}
