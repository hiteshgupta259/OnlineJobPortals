package com.onlinejobportal.in.jobprovider.util;

public class FieldErrorMessage {

	private String field;
	private String message;
	
	public FieldErrorMessage(String field, String message) 
	{
		super();
		this.field = field;
		this.message = message;
	}

	public String getField() 
	{
		return field;
	}

	public void setFiled(String field) 
	{
		this.field = field;
	}

	public String getMessage() 
	{
		return message;
	}

	public void setMessage(String message) 
	{
		this.message = message;
	}
	
	
}