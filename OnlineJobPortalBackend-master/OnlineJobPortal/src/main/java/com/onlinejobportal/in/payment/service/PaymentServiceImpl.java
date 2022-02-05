package com.onlinejobportal.in.payment.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.util.StringUtils;

import com.onlinejobportal.in.payment.exceptions.PaymentNotFoundException;
import com.onlinejobportal.in.payment.exceptions.PaymentUnsupportedFieldPatchException;
import com.onlinejobportal.in.payment.model.Payment;
import com.onlinejobportal.in.payment.repository.PaymentRepository;

@Service
public class PaymentServiceImpl implements PaymentService {

	@Autowired
	private PaymentRepository paymentRepository;

	@Override
	public List<Payment> paymentDetails() {
		return (List<Payment>) paymentRepository.findAll();
	}

	@Override
	public Payment getPaymentById(int pid) {
		return paymentRepository.findById(pid).orElseThrow(() -> new PaymentNotFoundException(pid));

	}

	@Override
	public Payment addPayment(Payment payment) {
		System.out.println(payment);
		return paymentRepository.save(payment);
	}

	@Override
	public Payment updateOrSavePayment(@RequestBody Payment newPayment, @PathVariable int pid) {

		return paymentRepository.findById(pid).map(payment -> {
			payment.setUsername(newPayment.getUsername());
			payment.setPaymentMethod(newPayment.getPaymentMethod());
			payment.setExpDate(newPayment.getExpDate());
			payment.setCardNo(newPayment.getCardNo());
			payment.setCvv(newPayment.getCvv());

			return paymentRepository.save(payment);
		}).orElseGet(() -> {
			return paymentRepository.save(newPayment);
		});

	}

	@SuppressWarnings("deprecation")
	@Override
	public Payment updateUsernameBasedOnId(@RequestBody Map<String, String> updateUsername, @PathVariable int pid) {
		String updatedUsername = updateUsername.get("username");
		System.out.println(updatedUsername);
		return paymentRepository.findById(pid).map(payment -> {
			if (!StringUtils.isEmpty(updatedUsername)) {
				payment.setUsername(updatedUsername);
				return paymentRepository.save(payment);
			} else {
				throw new PaymentUnsupportedFieldPatchException(updateUsername.keySet());
			}

		}).orElseGet(() -> {
			throw new PaymentNotFoundException(pid);
		});
	}

	@Override
	public void deletePaymentById(int pid) {
		paymentRepository.deleteById(pid);
	}

}