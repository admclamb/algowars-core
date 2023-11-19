package com.algowars.core.problem.services;

import com.algowars.core.data.entities.ProblemSetup;
import com.algowars.core.problem.repositories.ProblemSetupRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class ProblemSetupService {
    private final ProblemSetupRepository problemSetupRepository;

    public List<ProblemSetup> findAllByProblemId(Long problemId) {
        return problemSetupRepository.findAllByProblemId(problemId);
    }
}
