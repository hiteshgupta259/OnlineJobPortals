package com.onlinejobportal.in.jobprovider.services;

import java.util.List;
import java.util.Map;

import com.onlinejobportal.in.jobprovider.model.JobProvider;

public interface IJobProviderService 
{
	public List<JobProvider> getAllJobProviders();
	
	public JobProvider saveJobProvider(JobProvider jobProvider);
	
	public JobProvider updateOrSaveJobProvider(JobProvider updateJobProvider, Integer jp_id);
	
	public JobProvider updateJobProviderPassword(Map<String,String> updateJobProvider, Integer jp_id);
	
	public boolean jobProviderLogin(String user_name, String password);
}
