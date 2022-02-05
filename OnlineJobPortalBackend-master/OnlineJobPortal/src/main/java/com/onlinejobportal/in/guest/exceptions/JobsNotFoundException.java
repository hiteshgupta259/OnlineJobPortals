package com.onlinejobportal.in.guest.exceptions;

public class JobsNotFoundException extends RuntimeException
{
	private static final long serialVersionUID = 1L;
	public JobsNotFoundException(String msg)
	{
		super(msg);	
	}
}