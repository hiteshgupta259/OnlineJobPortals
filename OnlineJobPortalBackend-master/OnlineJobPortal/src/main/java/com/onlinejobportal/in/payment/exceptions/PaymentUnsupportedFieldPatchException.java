package com.onlinejobportal.in.payment.exceptions;

import java.util.Set;

public class PaymentUnsupportedFieldPatchException extends RuntimeException {

	private static final long serialVersionUID = 1L;

	public PaymentUnsupportedFieldPatchException(Set<String> keys) {
		super("Field " + keys.toString() + " update is not allow.");
	}

}