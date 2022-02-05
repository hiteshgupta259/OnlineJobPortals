package com.onlinejobportal.in.jobseeker.model;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;

import javax.persistence.JoinColumn;

import javax.persistence.ManyToOne;
import javax.persistence.MapsId;

import org.springframework.beans.factory.annotation.Autowired;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.onlinejobportal.in.jobdetails.model.JobDetails;

@Entity
public class Apply {

	@EmbeddedId
	ApplyKey id;
	@ManyToOne
	@JsonIgnore
	@MapsId("jobId")
	@JoinColumn(name = "job_id")
	JobDetails jobs;

	@ManyToOne
	@JsonIgnore
	@MapsId("jobseekerId")
	@JoinColumn(name = "jobseeker_id")
	JobSeekerRegistration jobseekerregistration;

	String status;
	String collegeName;
	String universityName;
	String UGPercentage;

	public String getCollegeName() {
		return collegeName;
	}

	public void setCollegeName(String collegeName) {
		this.collegeName = collegeName;
	}

	public String getUniversityName() {
		return universityName;
	}

	public void setUniversityName(String universityName) {
		this.universityName = universityName;
	}

	public String getUGPercentage() {
		return UGPercentage;
	}

	public void setUGPercentage(String uGPercentage) {
		UGPercentage = uGPercentage;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public ApplyKey getId() {
		return id;
	}

	public void setId(ApplyKey id) {
		this.id = id;
	}

	public void setJobs(JobDetails jobs) {
		this.jobs = jobs;
	}

	public void setJobseeker(JobSeekerRegistration jobseekerregistration) {
		this.jobseekerregistration = jobseekerregistration;
	}

	@Override
	public String toString() {
		return "Apply [id=" + id + ", jobs=" + jobs + ", jobseeker=" + jobseekerregistration + ", status=" + status + "]";
	}

}