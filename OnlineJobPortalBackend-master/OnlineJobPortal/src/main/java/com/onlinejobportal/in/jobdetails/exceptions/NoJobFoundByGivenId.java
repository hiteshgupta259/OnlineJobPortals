package com.onlinejobportal.in.jobdetails.exceptions;

import lombok.NoArgsConstructor;

@NoArgsConstructor
public class NoJobFoundByGivenId extends RuntimeException {

	public NoJobFoundByGivenId(String msg) {
		// TODO Auto-generated constructor stub
		super(msg);
	}

}