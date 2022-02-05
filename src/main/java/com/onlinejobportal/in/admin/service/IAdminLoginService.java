package com.onlinejobportal.in.admin.service;

import java.util.List;
import java.util.Map;

import com.onlinejobportal.in.admin.model.AdminLogin;

public interface IAdminLoginService {
	List<AdminLogin> getAllDetails();

	AdminLogin updateAdminPassword(Map<String, String> updatePassword, Long admin_id);

	AdminLogin save(AdminLogin details);

}