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

}
