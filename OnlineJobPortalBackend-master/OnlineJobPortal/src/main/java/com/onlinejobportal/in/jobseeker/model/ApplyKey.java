package com.onlinejobportal.in.jobseeker.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Embeddable;

@Embeddable
public class ApplyKey implements Serializable {

	@Column(name = "job_id")
	Long jobId;

	@Column(name = "jobseeker_id")
	Long jobseekerId;

	public Long getJobId() {
		return jobId;
	}

	public void setJobId(Long jobId) {
		this.jobId = jobId;
	}

	public Long getJobseekerId() {
		return jobseekerId;
	}

	public void setJobseekerId(Long jobseekerId) {
		this.jobseekerId = jobseekerId;
	}

	@Override
	public String toString() {
		return "ApplyKey [jobId=" + jobId + ", jobseekerId=" + jobseekerId + "]";
	}

}
