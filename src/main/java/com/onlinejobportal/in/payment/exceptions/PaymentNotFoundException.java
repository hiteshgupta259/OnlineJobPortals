package com.onlinejobportal.in.payment.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class PaymentNotFoundException extends RuntimeException {

	private static final long serialVersionUID = 1L;

	public PaymentNotFoundException(int pid) {
		super("Payment id not found : " + pid);
	}
}