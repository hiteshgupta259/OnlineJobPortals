package com.onlinejobportal.in.jobdetails.service;

import java.util.List;

import com.onlinejobportal.in.jobdetails.model.JobDetails;

public interface IJobDetailsService {

	public JobDetails postJobDetails(JobDetails jobDetails);

	public List<JobDetails> listAllJobs();

	public List<JobDetails> deleteJobByJobId(Long jobId);

	public List<JobDetails> listJobsBySkills(String jobSkills);

	public void updateJobDetailsById(Long jobId, String jobLastDate);

	public List<JobDetails> listJobsBySalary(Double jobSalary);

	public List<JobDetails> listJobsByExperience(String jobExperience);
	
	public List<JobDetails> listJobsByDesignation(String jobDesignation);
	
	public JobDetails viewJobById(Long jobId);

}