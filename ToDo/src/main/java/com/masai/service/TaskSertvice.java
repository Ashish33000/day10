package com.masai.service;

import java.util.List;

import com.masai.entity.Task;

public interface TaskSertvice  {
	
	public Task createTask(Task task);
	public Task updateTask(Integer Id,Task task);
	public Task deleteTask(Integer Id);
	public List<Task> findAllTask();

}
