package com.onlinejobportal.in.jobprovider.services;

import java.util.List;

import java.util.Map;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import com.onlinejobportal.in.jobprovider.model.JobProvider;
import com.onlinejobportal.in.jobprovider.repository.JobProviderRepository;
import com.onlinejobportal.in.jobprovider.util.JobProviderNotFoundException;


@Service
public class JobProviderService implements IJobProviderService 
{
	@Autowired
	private JobProviderRepository jobProviderRepository;
	
	@Override
	public List<JobProvider> getAllJobProviders()
	{
		List<JobProvider> jobProviders = (List<JobProvider>)jobProviderRepository.findAll();
		return  jobProviders;
	}
	
	@Override
	public JobProvider saveJobProvider(JobProvider jobProvider)
	{
		return jobProviderRepository.save(jobProvider);
	}
	
	@Override
	public JobProvider updateOrSaveJobProvider(JobProvider updateJobProvider, Integer jp_id)
	{
		return jobProviderRepository.findById(jp_id).
				map(jobProvider->{
					jobProvider.setJp_username(updateJobProvider.getJp_username());
					jobProvider.setJp_pwd(updateJobProvider.getJp_pwd());
					jobProvider.setCompany_name(updateJobProvider.getCompany_name());
					jobProvider.setFull_name(updateJobProvider.getFull_name());
					jobProvider.setDesignation(updateJobProvider.getDesignation());
					jobProvider.setDepartment(updateJobProvider.getDepartment());
					jobProvider.setEmail(updateJobProvider.getEmail());
					jobProvider.setPhone_no(updateJobProvider.getPhone_no());
					jobProvider.setLocation(updateJobProvider.getLocation());
					
				return jobProviderRepository.save(updateJobProvider);
				}).orElseGet(()->{
					return jobProviderRepository.save(updateJobProvider);
				});
	}
	
	@Override
	public JobProvider updateJobProviderPassword(Map<String,String> updateJobProvider, Integer jp_id)
	{
		String updatedJobProvider=updateJobProvider.get("jp_pwd");
		//System.out.println(updatedJobProvider);
		return jobProviderRepository.findById(jp_id).map(jobProvider->
		{
				if(!StringUtils.isEmpty(updatedJobProvider))
				{
					jobProvider.setJp_pwd(updatedJobProvider);
				}
				
				return jobProviderRepository.save(jobProvider);
				
		}).orElseThrow(() -> new JobProviderNotFoundException(jp_id));	
	}
	
	@Override
	public boolean jobProviderLogin(String user_name, String password)
	{
		boolean status  = false;
		List<JobProvider> jobProviders = (List<JobProvider>)jobProviderRepository.findAll();
		for(JobProvider jobProvider : jobProviders) {
			if(jobProvider.getJp_username().equals(user_name) && jobProvider.getJp_pwd().equals(password))
			{
				status = true;
				break;
			}
		}
		return status;
	}
}