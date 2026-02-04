package com.portfolio.backend.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.portfolio.backend.entity.Project;
import com.portfolio.backend.repository.ProjectRepository;

import org.springframework.beans.factory.annotation.Autowired;



@Service
public class ProjectService {


    @Autowired
    private ProjectRepository repository;

    public List<Project> getAll() {
        return repository.findAll();
    }

    public Project save(Project project) {
        return repository.save(project);
    }
}
