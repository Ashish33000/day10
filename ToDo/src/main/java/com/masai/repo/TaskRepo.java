package com.masai.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.masai.entity.Task;

public interface TaskRepo extends JpaRepository<Task, Integer> {

}
