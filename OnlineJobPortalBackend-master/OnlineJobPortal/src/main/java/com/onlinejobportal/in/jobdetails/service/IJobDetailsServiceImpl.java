package com.onlinejobportal.in.jobdetails.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.onlinejobportal.in.jobdetails.dao.IJobDetailsDao;
import com.onlinejobportal.in.jobdetails.exceptions.NoJobFoundException;
import com.onlinejobportal.in.jobdetails.model.JobDetails;

@Service
public class IJobDetailsServiceImpl implements IJobDetailsService {
	
	@Autowired
	private IJobDetailsDao jobDetailsDao;

	@Override
	public JobDetails postJobDetails(JobDetails jobDetails) {
		// TODO Auto-generated method stub
		return jobDetailsDao.postJobDetails(jobDetails);
	}

	@Override
	public List<JobDetails> listAllJobs() {
		// TODO Auto-generated method stub
		List<JobDetails> allJobs = jobDetailsDao.listAllJobs();
		if(!allJobs.isEmpty())
			return jobDetailsDao.listAllJobs();
		else
			throw new NoJobFoundException("No jobs found.");
	}

	@Override
	public List<JobDetails> deleteJobByJobId(Long jobId) {
		// TODO Auto-generated method stub
		return jobDetailsDao.deleteJobByJobId(jobId);
	}

	@Override
	public List<JobDetails> listJobsBySkills(String jobSkills) {
		// TODO Auto-generated method stub
		String[] skills = jobSkills.split(",");
		List<JobDetails> jobListBySkills = new ArrayList<JobDetails>();
		List<JobDetails> l = new ArrayList<>();
		for(int i = 0; i < skills.length; i++) {
			l = jobDetailsDao.listJobsBySkills(skills[i]);
			if(!(jobListBySkills.contains(l))) {
				jobListBySkills.addAll(l);
			}
		}
		if(!jobListBySkills.isEmpty())
			return jobListBySkills;
		else
			throw new NoJobFoundException("No job found as per your search provided.");
	}

	@Override
	public void updateJobDetailsById(Long jobId, String jobLastDate) {
		// TODO Auto-generated method stub
		jobDetailsDao.updateJobDetailsById(jobId, jobLastDate);
	}

	@Override
	public List<JobDetails> listJobsBySalary(Double jobSalary) {
		// TODO Auto-generated method stub
		List<JobDetails> jobListBySalary = jobDetailsDao.listJobsBySalary(jobSalary);
		if(!jobListBySalary.isEmpty())
			return jobListBySalary;
		else
			throw new NoJobFoundException("No job found as per your search provided.");
		
	}

	@Override
	public List<JobDetails> listJobsByExperience(String jobExperience) {
		// TODO Auto-generated method stub
		List<JobDetails> jobListByExperience = jobDetailsDao.listJobsByExperience(jobExperience);
		if(!jobListByExperience.isEmpty())
			return jobListByExperience;
		else
			throw new NoJobFoundException("No job found as per your search provided.");
		
	}

	@Override
	public List<JobDetails> listJobsByDesignation(String jobDesignation) {
		// TODO Auto-generated method stub
		List<JobDetails> jobListByDesignation = jobDetailsDao.listJobsByDesignation(jobDesignation);
		if(!jobListByDesignation.isEmpty())
			return jobListByDesignation;
		else
			throw new NoJobFoundException("No job found as per your search provided.");
	}

	@Override
	public JobDetails viewJobById(Long jobId) {
		// TODO Auto-generated method stub
		return jobDetailsDao.viewJobById(jobId);
	}

}