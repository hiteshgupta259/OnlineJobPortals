package com.onlinejobportal.in.jobprovider.util;

public class JobProviderNotFoundException extends RuntimeException
{
	public JobProviderNotFoundException(Integer jp_id) 
	{
        super("JobProvider id not found : " + jp_id);
	}
}