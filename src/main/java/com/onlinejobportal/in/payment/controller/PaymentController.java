package com.onlinejobportal.in.payment.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.onlinejobportal.in.payment.model.Payment;
import com.onlinejobportal.in.payment.service.PaymentService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/payment")
public class PaymentController {

	@Autowired
	private PaymentService paymentService;

	@GetMapping
	public ResponseEntity<List<Payment>> getAllPayment() {
		try {
			return new ResponseEntity<List<Payment>>(paymentService.paymentDetails(), HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<List<Payment>>(HttpStatus.BAD_REQUEST);
		}
	}

	@GetMapping(value = "/{pid}")
	public Payment getPaymentDetailsById(@PathVariable int pid) {
		return paymentService.getPaymentById(pid);
	}

	@PostMapping
	public Payment createPayment(@RequestBody Payment payment) {
		return paymentService.addPayment(payment);
	}

	@PutMapping(value = "/{pid}")
	public Payment updateOrSavePaymentDetails(@RequestBody Payment newPayment, @PathVariable int pid) {
		return paymentService.updateOrSavePayment(newPayment, pid);
	}

	@PatchMapping(value = "/{pid}")
	public Payment updatePaymentUsernameBasedOnId(@RequestBody Map<String, String> updateUsername,
			@PathVariable int pid) {
		return paymentService.updateUsernameBasedOnId(updateUsername, pid);
	}

	@DeleteMapping(value = "/{pid}")
	public void deletePaymentDetailsById(@PathVariable int pid) {
		paymentService.deletePaymentById(pid);
	}

}