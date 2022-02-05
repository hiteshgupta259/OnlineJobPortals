package com.onlinejobportal.in.jobprovider.util;

import java.io.IOException;
import java.util.Date;

import javax.servlet.http.HttpServletResponse;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@ControllerAdvice
public class GlobalExceptionsHandler extends ResponseEntityExceptionHandler 
{
	@ExceptionHandler(value = { Exception.class })
	public ResponseEntity<Object> handleAnyRequest(Exception ex, WebRequest request) 
	{
		String errorDescription = ex.getLocalizedMessage();

		if (errorDescription == null) 
		{
			errorDescription = ex.toString();
		}

		ErrorMessage errorMessage = new ErrorMessage(errorDescription, new Date());

		return new ResponseEntity<>(errorMessage, new HttpHeaders(), HttpStatus.INTERNAL_SERVER_ERROR);

	}

	@ExceptionHandler(value = { NullPointerException.class })
	public ResponseEntity<Object> handleNullpointerException(NullPointerException ex, WebRequest request) 
	{
		String errorDescription = ex.getLocalizedMessage();

		if (errorDescription == null) 
		{
			errorDescription = ex.toString();
		}

		ErrorMessage errorMessage = new ErrorMessage(errorDescription, new Date());

		return new ResponseEntity<>(errorMessage, new HttpHeaders(), HttpStatus.INTERNAL_SERVER_ERROR);

	}
	
	@ExceptionHandler(JobProviderNotFoundException.class)
	public void springHandleNotFound(HttpServletResponse response) throws IOException 
	{
		response.sendError(HttpStatus.NOT_FOUND.value());
	}
}