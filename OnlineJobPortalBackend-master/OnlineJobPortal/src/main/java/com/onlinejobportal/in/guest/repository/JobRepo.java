package com.onlinejobportal.in.guest.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.onlinejobportal.in.guest.model.Jobs;

@Repository
public interface JobRepo extends CrudRepository<Jobs, Long> {
	
	
	@Query("select p from Jobs p where lower(p.jdescription) like lower(concat('%', ?1,'%'))")
	public List<Jobs> findAllByDesignation(String designation);
	
	@Query("select p from Jobs p where lower(p.jlocation) like lower(concat('%', ?1,'%'))")
	public List<Jobs> findAllByLocation(String location);

	@Query("select p from Jobs p where lower(p.jcompany) like lower(concat('%', ?1,'%'))")
	public List<Jobs> findAllByCompany(String company);

	@Query("select p from Jobs p where lower(p.jexperience) like lower(concat('%', ?1,'%'))")
	public List<Jobs> findAllByExperience(String experience);

	
	
}