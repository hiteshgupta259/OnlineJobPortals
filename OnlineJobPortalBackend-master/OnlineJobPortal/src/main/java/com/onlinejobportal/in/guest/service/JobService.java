package com.onlinejobportal.in.guest.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.onlinejobportal.in.guest.model.Jobs;
import com.onlinejobportal.in.guest.repository.JobRepo;

@Service
public class JobService {

	@Autowired
	private JobRepo jobrepo;
	public List<Jobs> getAllJobs() {
		
		List<Jobs> jobs= (List<Jobs>) jobrepo.findAll();
		return jobs;  					
	}
	
	public Optional<Jobs> findById(Long id){
		return jobrepo.findById(id);
	}
	
    
    public List<Jobs> getAllJobsByDesignation(String designation) {
     return jobrepo.findAllByDesignation(designation);
    }
	
    public List<Jobs> getAllJobsByLocation(String location) {
        return jobrepo.findAllByLocation(location);
       }
    
    public List<Jobs> getAllJobsByCompany(String company) {
    	Iterable<Jobs> jobs =  jobrepo.findAllByCompany(company);
        return (List<Jobs>) jobs;
       }
    
    public List<Jobs> getAllJobsByExperience(String experience) {
        return jobrepo.findAllByExperience(experience);
       }

}