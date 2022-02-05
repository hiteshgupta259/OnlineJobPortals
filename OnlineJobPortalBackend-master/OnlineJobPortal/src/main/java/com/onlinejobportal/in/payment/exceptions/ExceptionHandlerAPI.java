package com.onlinejobportal.in.payment.exceptions;

import java.util.Date;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;

@ControllerAdvice
public class ExceptionHandlerAPI {

	@ExceptionHandler(value = { PaymentNotFoundException.class })
	public ResponseEntity<Object> handleAnyRequest(PaymentNotFoundException ex, WebRequest request) {
		ErrorDetails errorDetails = new ErrorDetails(new Date(), "Error", ex.getLocalizedMessage());
		return new ResponseEntity<>(errorDetails, HttpStatus.BAD_REQUEST);

	}

	@ExceptionHandler(HttpMessageNotReadableException.class)
	public ResponseEntity<?> bodyNotFoundExceptionHandling(HttpMessageNotReadableException exception) {
		ErrorDetails errorDetails = new ErrorDetails(new Date(), "Validation Error",
				"Please Provide data in Valid json Format for Registration.  ");
		return new ResponseEntity<>(errorDetails, HttpStatus.BAD_REQUEST);
	}

}