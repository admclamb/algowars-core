package com.algowars.core.problem.repositories;

import com.algowars.core.data.entities.ProblemSetup;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProblemSetupRepository extends JpaRepository<ProblemSetup, Long> {
    List<ProblemSetup> findAllByProblemId(Long problemId);
}
