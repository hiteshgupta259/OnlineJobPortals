package com.onlinejobportal.in.admin.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.onlinejobportal.in.admin.model.AdminLogin;
import com.onlinejobportal.in.admin.repository.AdminLoginRepository;

@Service
public class AdminLoginServiceImpl implements IAdminLoginService {

	@Autowired
	private AdminLoginRepository adminLoginRepository;

	public List<AdminLogin> getAllDetails() {
		return (List<AdminLogin>) adminLoginRepository.findAll();

	}

	public AdminLogin updateAdminPassword(Map<String, String> updatePassword, Long admin_id) {
		String updatedPassword = updatePassword.get("admin_password");
		AdminLogin admin = adminLoginRepository.findById(admin_id).get();
		admin.setAdmin_password(updatedPassword);
		adminLoginRepository.save(admin);
		return admin;
	}

	public AdminLogin save(AdminLogin details) {
		return adminLoginRepository.save(details);

	}

}