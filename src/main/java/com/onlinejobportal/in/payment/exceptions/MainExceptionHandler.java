package com.onlinejobportal.in.payment.exceptions;

import java.io.IOException;

import javax.servlet.http.HttpServletResponse;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

public class MainExceptionHandler {

	@ControllerAdvice
	public class CustomGlobalExceptionHandler extends ResponseEntityExceptionHandler {

		@ExceptionHandler
		public void springHandleNotFound(HttpServletResponse response) throws IOException {
			response.sendError(HttpStatus.NOT_FOUND.value());
		}

		@ExceptionHandler(PaymentUnsupportedFieldPatchException.class)
		public void springUnSupportedFieldPatch(HttpServletResponse response) throws IOException {
			response.sendError(HttpStatus.METHOD_NOT_ALLOWED.value());
		}

	}

}