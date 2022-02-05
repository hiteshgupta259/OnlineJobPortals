package com.onlinejobportal.in.jobprovider.controller;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.onlinejobportal.in.jobprovider.model.JobProvider;
import com.onlinejobportal.in.jobprovider.repository.JobProviderRepository;
import com.onlinejobportal.in.jobprovider.services.JobProviderService;
import com.onlinejobportal.in.jobprovider.util.FieldErrorMessage;
import com.onlinejobportal.in.jobprovider.util.JobProviderNotFoundException;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class JobProviderController implements IJobProviderController 
{
	@Autowired
	private JobProviderService jobProviderService;
	
	@Autowired
	private JobProviderRepository jobProviderRepository;

	@Override
	@GetMapping("/jobProvider")
	public ResponseEntity<List<JobProvider>> getAllJobProviders()
	{
		List<JobProvider> jobProviders = jobProviderService.getAllJobProviders();
		if(!jobProviders.isEmpty()) 
		{
			return new ResponseEntity<List<JobProvider>>(jobProviders, HttpStatus.OK);
		}
		else
		{
			return new ResponseEntity<List<JobProvider>>(HttpStatus.NO_CONTENT);
		}
	}
	
	@Override
	@PostMapping("/jobProvider/registration")
	public @ResponseBody ResponseEntity<JobProvider> saveJobProvider(@Valid @RequestBody JobProvider jobProvider) 
	{
		JobProvider jp = jobProviderService.saveJobProvider(jobProvider);
	    return new ResponseEntity<JobProvider>(jp, HttpStatus.CREATED);
	}
	
	@Override
	@PutMapping("/jobProvider/updateProfile/{jp_id}")
	public ResponseEntity<JobProvider> updateOrSaveJobProvider(@Valid @RequestBody JobProvider jobProvider, @PathVariable Integer jp_id) 
	{
		if(jobProviderRepository.findById(jobProvider.getJp_id()).isPresent())
		{
			JobProvider jp = jobProviderService.updateOrSaveJobProvider(jobProvider, jp_id);
			return new ResponseEntity<JobProvider>(jp, HttpStatus.OK);
		}
		else
		{
			new JobProviderNotFoundException(jp_id);
			return new ResponseEntity<JobProvider>(jobProvider, HttpStatus.BAD_REQUEST);
		}
	}
	
	
	@Override
	@PostMapping("/jobProvider/login")
	public ResponseEntity<String> loginJobProvider(@RequestBody JobProvider jobProvider) 
	{
		if(jobProviderService.jobProviderLogin(jobProvider.getJp_username(), jobProvider.getJp_pwd()))
		{
			return new ResponseEntity<String>("Login Successful...", HttpStatus.OK);
		}
		else 
		{
			return new ResponseEntity<String>("Invalid User Name or Password.....", HttpStatus.BAD_REQUEST);
		}
	}
	 
	@Override
	@PatchMapping("/jobProvider/changePassword/{jp_id}")
	public ResponseEntity<?> updateJobProviderPassword(@Valid @RequestBody Map<String,String> updateJobProvider, @PathVariable Integer jp_id)
	{
		jobProviderRepository.findById(jp_id).orElseThrow(() -> new JobProviderNotFoundException(jp_id));
		jobProviderService.updateJobProviderPassword(updateJobProvider, jp_id);
		return ResponseEntity.ok("Password updated Successfully");
	}
	
	@Override
	@GetMapping("/jobProvider/{jp_id}")
	public JobProvider findJobProviderById(@PathVariable Integer jp_id) 
	{
		return jobProviderRepository.findById(jp_id).orElseThrow(() -> new JobProviderNotFoundException(jp_id));
	}
	
	@ResponseStatus(HttpStatus.BAD_REQUEST)
	@ExceptionHandler(MethodArgumentNotValidException.class)
	List<FieldErrorMessage> exceptionHandler(MethodArgumentNotValidException e)
	{
		List<FieldError> fieldErrors = e.getBindingResult().getFieldErrors();
		List<FieldErrorMessage> fieldErrorMessages = fieldErrors.stream().map(fieldError -> 
		new FieldErrorMessage(fieldError.getField(), fieldError.getDefaultMessage()))
		.collect(Collectors.toList());
		
		return fieldErrorMessages;
	}
}