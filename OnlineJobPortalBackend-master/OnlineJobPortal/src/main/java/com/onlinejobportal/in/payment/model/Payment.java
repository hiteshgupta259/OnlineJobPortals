package com.onlinejobportal.in.payment.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "Payment")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Payment {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	public Integer pid;

	@NotBlank(message = "Please give username")
	@Email
	public String username;

	@NotBlank(message = "Please give paymentMethod")
	public String paymentMethod;

	@JsonFormat(pattern = "MM/YY")
	@NotBlank(message = "Please give paymentDate")
	private String expDate;

	@NotBlank(message = "Please give cardNo")
	@Pattern(regexp = "^4[0-9]{12}(?:[0-9]{3})?$")
	public String cardNo;

	@NotNull(message = "Please give cvv")
	@Pattern(regexp = "[0-9]{3,4}")
	public String cvv;

	@Override
	public String toString() {
		return "Payment [pid=" + pid + ", username=" + username + ", paymentMethod=" + paymentMethod + ", expDate="
				+ expDate + ", cardNo=" + cardNo + ", cvv=" + cvv + "]";
	}
	
	public Payment() {
		// TODO Auto-generated constructor stub
	}

	public Payment(Integer pid, @NotBlank(message = "Please give username") @Email String username,
			@NotBlank(message = "Please give paymentMethod") String paymentMethod,
			@NotBlank(message = "Please give paymentDate") String expDate,
			@NotBlank(message = "Please give cardNo") @Pattern(regexp = "^4[0-9]{12}(?:[0-9]{3})?$") String cardNo,
			@NotNull(message = "Please give cvv") @Pattern(regexp = "[0-9]{3,4}") String cvv) {
		super();
		this.pid = pid;
		this.username = username;
		this.paymentMethod = paymentMethod;
		this.expDate = expDate;
		this.cardNo = cardNo;
		this.cvv = cvv;
	}

	public Integer getPid() {
		return pid;
	}

	public void setPid(Integer pid) {
		this.pid = pid;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPaymentMethod() {
		return paymentMethod;
	}

	public void setPaymentMethod(String paymentMethod) {
		this.paymentMethod = paymentMethod;
	}

	public String getExpDate() {
		return expDate;
	}

	public void setExpDate(String expDate) {
		this.expDate = expDate;
	}

	public String getCardNo() {
		return cardNo;
	}

	public void setCardNo(String cardNo) {
		this.cardNo = cardNo;
	}

	public String getCvv() {
		return cvv;
	}

	public void setCvv(String cvv) {
		this.cvv = cvv;
	}
}