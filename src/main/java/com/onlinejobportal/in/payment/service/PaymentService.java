package com.onlinejobportal.in.payment.service;

import java.util.List;
import java.util.Map;

import com.onlinejobportal.in.payment.model.Payment;

public interface PaymentService {
	public List<Payment> paymentDetails();

	public Payment getPaymentById(int pid);

	public Payment addPayment(Payment payment);

	public Payment updateOrSavePayment(Payment newPayment, int pid);

	public Payment updateUsernameBasedOnId(Map<String, String> updateUsername, int pid);

	public void deletePaymentById(int pid);

}