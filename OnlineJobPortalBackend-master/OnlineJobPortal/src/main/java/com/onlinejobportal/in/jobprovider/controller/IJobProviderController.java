package com.onlinejobportal.in.jobprovider.controller;

import java.util.List;
import java.util.Map;
import org.springframework.http.ResponseEntity;

import com.onlinejobportal.in.jobprovider.model.JobProvider;


public interface IJobProviderController 
{
	
	public ResponseEntity<List<JobProvider>> getAllJobProviders();
	
	public ResponseEntity<JobProvider> saveJobProvider(JobProvider jobProvider);
	
	public ResponseEntity<JobProvider> updateOrSaveJobProvider(JobProvider jobProvider, Integer jp_id);
	
	public ResponseEntity<String> loginJobProvider(JobProvider jobProvider);
	
	public ResponseEntity<?> updateJobProviderPassword(Map<String,String> updateJobProvider, Integer jp_id);

	public JobProvider findJobProviderById(Integer jp_id); 

}