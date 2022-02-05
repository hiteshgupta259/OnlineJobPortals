package com.onlinejobportal.in.jobprovider.repository;

import org.springframework.data.repository.CrudRepository;

import com.onlinejobportal.in.jobprovider.model.JobProvider;

public interface JobProviderRepository extends CrudRepository<JobProvider, Integer> 
{
	/*
	 * public Optional<JobProvider> findByJp_username(String jp_username);
	 * 
	 * public Optional<JobProvider> findByJp_pwd(String jp_pwd);
	 */
}
