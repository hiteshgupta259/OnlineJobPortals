package com.onlinejobportal.in.jobdetails.dao;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.onlinejobportal.in.jobdetails.exceptions.JobAlreadyExist;
import com.onlinejobportal.in.jobdetails.exceptions.NoJobFoundByGivenId;
import com.onlinejobportal.in.jobdetails.model.JobDetails;
import com.onlinejobportal.in.jobdetails.repository.JobDetailsRepository;

@Repository
public class IJobDetailsDaoImpl implements IJobDetailsDao {

	@Autowired
	private JobDetailsRepository jobDetailsRepository;

	@Override
	public JobDetails postJobDetails(JobDetails jobDetails) {
		// TODO Auto-generated method stub
		if (jobDetailsRepository.findById(jobDetails.getJobId()).isPresent())
			throw new JobAlreadyExist("Job already exist with given id " + jobDetails.getJobId());
		else
			return jobDetailsRepository.save(jobDetails);
	}

	@Override
	public List<JobDetails> listAllJobs() {
		// TODO Auto-generated method stub
		return (List<JobDetails>) jobDetailsRepository.findAll();
	}

	@Override
	public List<JobDetails> deleteJobByJobId(Long jobId) {
		// TODO Auto-generated method stub
		JobDetails jobDetails = jobDetailsRepository.findById(jobId)
				.orElseThrow(() -> new NoJobFoundByGivenId("No such job with id " + jobId));
		jobDetailsRepository.deleteById(jobDetails.getJobId());
		return (List<JobDetails>) jobDetailsRepository.findAll();
	}

	@Override
	public List<JobDetails> listJobsBySkills(String jobSkills) {
		// TODO Auto-generated method stub
		return jobDetailsRepository.findByJobSkillsContainingIgnoreCase(jobSkills);
	}

	@Override
	public void updateJobDetailsById(Long jobId, String jobLastDate) {
		// TODO Auto-generated method stub
		JobDetails jobDetails = jobDetailsRepository.findById(jobId)
				.orElseThrow(() -> new NoJobFoundByGivenId("No such job with id " + jobId));
		// Updating a job
		jobDetails.setJobLastDate(jobLastDate);
		jobDetailsRepository.save(jobDetails);

	}

	@Override
	public List<JobDetails> listJobsBySalary(Double jobSalary) {
		// TODO Auto-generated method stub
		return jobDetailsRepository.findByJobSalaryGreaterThanEqual(jobSalary);
	}

	@Override
	public List<JobDetails> listJobsByExperience(String jobExperience) {
		// TODO Auto-generated method stub
		return jobDetailsRepository.findByJobExperienceGreaterThanEqual(jobExperience);
	}

	@Override
	public List<JobDetails> listJobsByDesignation(String jobDesignation) {
		// TODO Auto-generated method stub
		return jobDetailsRepository.findByJobDesignationContainingIgnoreCase(jobDesignation);
	}

	@Override
	public JobDetails viewJobById(Long jobId) {
		// TODO Auto-generated method stub
		JobDetails jobDetails = jobDetailsRepository.findById(jobId)
				.orElseThrow(() -> new NoJobFoundByGivenId("No such job with id " + jobId));
		return jobDetailsRepository.findById(jobId).get();
	}

}
