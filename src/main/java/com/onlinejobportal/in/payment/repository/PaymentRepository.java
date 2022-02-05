package com.onlinejobportal.in.payment.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.onlinejobportal.in.payment.model.Payment;

public interface PaymentRepository extends CrudRepository<Payment, Integer> {

}