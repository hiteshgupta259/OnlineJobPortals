package com.onlinejobportal.in.jobseeker.model;

import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class JobSeekerRegistration {
//	@Id
//	@GeneratedValue(strategy = GenerationType.AUTO)
//	private int id;
//	public String name;
//	private String phoneNo;
//	public String password;
//	public String email;
//	public String address;
//	@OneToMany(mappedBy = "jobseeker")
//	@JsonIgnore
//	Set<Apply> apply;
//
//	public JobSeeker() {
//		super();
//	}
//
//	public int getId() {
//		return id;
//	}
//
//	public void setId(int id) {
//		this.id = id;
//	}
//
//	public String getName() {
//		return name;
//	}
//
//	public void setName(String name) {
//		this.name = name;
//	}
//
//	public String getPhoneNo() {
//		return phoneNo;
//	}
//
//	public void setPhoneNo(String phoneNo) {
//		this.phoneNo = phoneNo;
//	}
//
//	public String getPassword() {
//		return password;
//	}
//
//	public void setPassword(String password) {
//		this.password = password;
//	}
//
//	public String getEmail() {
//		return email;
//	}
//
//	public void setEmail(String email) {
//		this.email = email;
//	}
//
//	public String getAddress() {
//		return address;
//	}
//
//	public void setAddress(String address) {
//		this.address = address;
//	}
//
//	public Set<Apply> getApply() {
//		return apply;
//	}
//
//	public void setApply(Set<Apply> apply) {
//		this.apply = apply;
//	}
	
	@Id
	@GeneratedValue
	private Long srid;
	
	@NotBlank(message="Name is required")
	@Size(min=4, message="Enter Valid name")
	private String srname;
	
	@NotBlank(message="Email is required")
	@Pattern(regexp="^[a-zA-Z0-9+_.-]+@[a-zA-Z]+.[a-zA-Z]+", message="Enter Valid Email address")
	private String sremail; 
	
	@NotNull(message="Phone Number is required")
	private Long srphone;
	
	@NotBlank(message="City is required")
	private String srcity;
	
	@NotBlank(message="Skills are required")
	private String srskills;
	
	@NotBlank(message="Enter password")
	private String password;
	
	@OneToMany(mappedBy = "jobseekerregistration")
	@JsonIgnore
	Set<Apply> apply;
	
	public JobSeekerRegistration() {
		// TODO Auto-generated constructor stub
	}

	public JobSeekerRegistration(Long srid,
			@NotBlank(message = "Name is required") @Size(min = 4, message = "Enter Valid name") String srname,
			@NotBlank(message = "Email is required") @Pattern(regexp = "^[a-zA-Z0-9+_.-]+@[a-zA-Z]+.[a-zA-Z]+", message = "Enter Valid Email address") String sremail,
			@NotNull(message = "Phone Number is required") Long srphone,
			@NotBlank(message = "City is required") String srcity,
			@NotBlank(message = "Skills are required") String srskills,
			@NotBlank(message = "Enter password") String password, Set<Apply> apply) {
		super();
		this.srid = srid;
		this.srname = srname;
		this.sremail = sremail;
		this.srphone = srphone;
		this.srcity = srcity;
		this.srskills = srskills;
		this.password = password;
		this.apply = apply;
	}

	public Long getSrid() {
		return srid;
	}

	public void setSrid(Long srid) {
		this.srid = srid;
	}

	public String getSrname() {
		return srname;
	}

	public void setSrname(String srname) {
		this.srname = srname;
	}

	public String getSremail() {
		return sremail;
	}

	public void setSremail(String sremail) {
		this.sremail = sremail;
	}

	public Long getSrphone() {
		return srphone;
	}

	public void setSrphone(Long srphone) {
		this.srphone = srphone;
	}

	public String getSrcity() {
		return srcity;
	}

	public void setSrcity(String srcity) {
		this.srcity = srcity;
	}

	public String getSrskills() {
		return srskills;
	}

	public void setSrskills(String srskills) {
		this.srskills = srskills;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Set<Apply> getApply() {
		return apply;
	}

	public void setApply(Set<Apply> apply) {
		this.apply = apply;
	}
	
}