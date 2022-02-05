package com.onlinejobportal.in.admin.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.onlinejobportal.in.admin.model.AdminLogin;

@Repository
public interface AdminLoginRepository extends CrudRepository<AdminLogin, Long> {
	
}