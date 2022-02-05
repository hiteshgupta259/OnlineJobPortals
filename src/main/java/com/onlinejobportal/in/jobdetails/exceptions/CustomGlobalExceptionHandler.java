package com.onlinejobportal.in.jobdetails.exceptions;

import java.io.IOException;
import java.util.Date;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@ControllerAdvice
public class CustomGlobalExceptionHandler extends ResponseEntityExceptionHandler {

	// error handle for no job found with given id
	@ExceptionHandler(NoJobFoundByGivenId.class)
	public ResponseEntity<Object> handleNoJobFoundByGivenId(NoJobFoundByGivenId noJob) throws IOException {
		return new ResponseEntity<>(noJob.getLocalizedMessage(), HttpStatus.NO_CONTENT);
	}

	// error handle for job already exist
	@ExceptionHandler(JobAlreadyExist.class)
	public ResponseEntity<Object> handleJobAlreadyExist(JobAlreadyExist job) throws IOException {
		return new ResponseEntity<>(job.getLocalizedMessage(), HttpStatus.ALREADY_REPORTED);
	}

	@ExceptionHandler(NoJobFoundException.class)
	public ResponseEntity<Object> handleNoJobFoundException(NoJobFoundException noJob) throws IOException {
		return new ResponseEntity<>(noJob.getLocalizedMessage(), HttpStatus.NO_CONTENT);
	}

	// error handle for @Valid
	@Override
	protected ResponseEntity<Object> handleMethodArgumentNotValid(MethodArgumentNotValidException ex,
			HttpHeaders headers, HttpStatus status, WebRequest request) {

		Map<String, Object> body = new LinkedHashMap<>();
		body.put("timestamp", new Date());
		body.put("status", status.value());

		// Get all errors
		List<String> errors = ex.getBindingResult().getFieldErrors().stream().map(x -> x.getDefaultMessage())
				.collect(Collectors.toList());

		body.put("errors", errors);

		return new ResponseEntity<>(body, headers, status);

		// Map<String, String> fieldErrors =
		// ex.getBindingResult().getFieldErrors().stream().collect(
		// Collectors.toMap(FieldError::getField, FieldError::getDefaultMessage));

	}

	@ExceptionHandler(value = { Exception.class })
	public ResponseEntity<Object> handleAnyRequest(Exception ex, WebRequest request) {
		String errorDescription = ex.getLocalizedMessage();

		if (errorDescription == null) {
			errorDescription = ex.toString();
		}

		ErrorMessage errorMessage = new ErrorMessage(errorDescription, new Date());

		return new ResponseEntity<>(errorMessage, new HttpHeaders(), HttpStatus.INTERNAL_SERVER_ERROR);

	}

}