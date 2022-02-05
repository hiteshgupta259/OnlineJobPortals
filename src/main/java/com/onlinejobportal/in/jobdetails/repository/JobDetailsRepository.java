package com.onlinejobportal.in.jobdetails.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.onlinejobportal.in.jobdetails.model.JobDetails;

public interface JobDetailsRepository extends CrudRepository<JobDetails, Long> {
	
	List<JobDetails> findByJobSkillsContainingIgnoreCase(String jobSkills);
	List<JobDetails> findByJobSalaryGreaterThanEqual(Double jobSalary);
	List<JobDetails> findByJobExperienceGreaterThanEqual(String jobExperience);
	List<JobDetails> findByJobDesignationContainingIgnoreCase(String jobDesignation);
	
}
