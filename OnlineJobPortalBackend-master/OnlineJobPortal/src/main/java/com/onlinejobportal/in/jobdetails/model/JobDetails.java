package com.onlinejobportal.in.jobdetails.model;

import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.onlinejobportal.in.jobseeker.model.Apply;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "PostedJobs")
public class JobDetails {

	@Id
	@NotNull(message = "Please provide job id")
	private Long jobId;

	@NotBlank
	@Pattern(regexp = "([a-zA-Z]+[-. ]*){3,25}", message = "Please provide valid job designation")
	private String jobDesignation;

	@Pattern(regexp = "([a-zA-Z]+[-. ]*){3,}", message = "Please provide valid job loation")
	private String jobLocation;

	@NotBlank
	@Pattern(regexp = "([0-9]+){1,2}", message = "Please provide valid job experience")
	private String jobExperience;

	@NotBlank
	@Pattern(regexp = "([a-zA-Z]+[a-zA-Z ,+.]*){1,50}", message = "Please provide valid job skills")
	private String jobSkills;

	@NotBlank
	private String jobLastDate;

	@NotBlank(message = "Please provide some description")
	private String jobDescription;

	@NotNull(message = "Please specify salary")
	private Double jobSalary;
	
	@OneToMany(mappedBy = "jobs")
	@JsonIgnore
	Set<Apply> apply;
	
	public JobDetails() {
		// TODO Auto-generated constructor stub
	}

	public JobDetails(@NotNull(message = "Please provide job id") Long jobId,
			@NotBlank @Pattern(regexp = "([a-zA-Z]+[-. ]*){3,25}", message = "Please provide valid job designation") String jobDesignation,
			@Pattern(regexp = "([a-zA-Z]+[-. ]*){3,}", message = "Please provide valid job loation") String jobLocation,
			@NotBlank @Pattern(regexp = "([0-9]+){1,2}", message = "Please provide valid job experience") String jobExperience,
			@NotBlank @Pattern(regexp = "([a-zA-Z]+[a-zA-Z ,+.]*){1,50}", message = "Please provide valid job skills") String jobSkills,
			@NotBlank String jobLastDate, @NotBlank(message = "Please provide some description") String jobDescription,
			@NotNull(message = "Please specify salary") Double jobSalary, Set<Apply> apply) {
		super();
		this.jobId = jobId;
		this.jobDesignation = jobDesignation;
		this.jobLocation = jobLocation;
		this.jobExperience = jobExperience;
		this.jobSkills = jobSkills;
		this.jobLastDate = jobLastDate;
		this.jobDescription = jobDescription;
		this.jobSalary = jobSalary;
		this.apply = apply;
	}

	public Long getJobId() {
		return jobId;
	}

	public void setJobId(Long jobId) {
		this.jobId = jobId;
	}

	public String getJobDesignation() {
		return jobDesignation;
	}

	public void setJobDesignation(String jobDesignation) {
		this.jobDesignation = jobDesignation;
	}

	public String getJobLocation() {
		return jobLocation;
	}

	public void setJobLocation(String jobLocation) {
		this.jobLocation = jobLocation;
	}

	public String getJobExperience() {
		return jobExperience;
	}

	public void setJobExperience(String jobExperience) {
		this.jobExperience = jobExperience;
	}

	public String getJobSkills() {
		return jobSkills;
	}

	public void setJobSkills(String jobSkills) {
		this.jobSkills = jobSkills;
	}

	public String getJobLastDate() {
		return jobLastDate;
	}

	public void setJobLastDate(String jobLastDate) {
		this.jobLastDate = jobLastDate;
	}

	public String getJobDescription() {
		return jobDescription;
	}

	public void setJobDescription(String jobDescription) {
		this.jobDescription = jobDescription;
	}

	public Double getJobSalary() {
		return jobSalary;
	}

	public void setJobSalary(Double jobSalary) {
		this.jobSalary = jobSalary;
	}

	public Set<Apply> getApply() {
		return apply;
	}

	public void setApply(Set<Apply> apply) {
		this.apply = apply;
	}
	
	
	

}
