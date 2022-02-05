package com.onlinejobportal.in.guest.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Jobs {
	
	public Jobs(Long jid, String jcompany, String jdescription, String jlocation, String jexperience) {
		super();
		this.jid = jid;
		this.jcompany = jcompany;
		this.jdescription = jdescription;
		this.jlocation = jlocation;
		this.jexperience = jexperience;
	}
	
	public Jobs() {
		super();
	}
	@Id
	private Long jid;
	private String jcompany;
	private String jdescription;
	private String jlocation;
	private String jexperience;
	
	public String getExperience() {
		return jexperience;
	}
	public void setExperience(String experience) {
		this.jexperience = experience;
	}
	public String getJcompany() {
		return jcompany;
	}
	public void setJcompany(String jcompany) {
		this.jcompany = jcompany;
	}
	public Long getJid() {
		return jid;
	}
	public void setJid(Long jid) {
		this.jid = jid;
	}
	public String getJdescription() {
		return jdescription;
	}
	public void setJdescription(String jdescription) {
		this.jdescription = jdescription;
	}
	public String getJlocation() {
		return jlocation;
	}
	public void setJlocation(String jlocation) {
		this.jlocation = jlocation;
	}
	
	

	
}