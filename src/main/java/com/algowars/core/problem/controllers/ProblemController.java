package com.algowars.core.problem.controllers;

import com.algowars.core.common.pagination.dtos.PaginationDTO;
import com.algowars.core.common.pagination.dtos.PaginationResponse;
import com.algowars.core.data.entities.Problem;
import com.algowars.core.data.entities.ProblemSetup;
import com.algowars.core.problem.services.ProblemService;
import com.algowars.core.problem.services.ProblemSetupService;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("api/v1/problem")
@CrossOrigin(origins = "http://localhost:5173")
public class ProblemController {
    private final ProblemService problemService;
    private final ProblemSetupService problemSetupService;

    @GetMapping()
    public PaginationResponse<Problem> getProblems(
            @Valid @ModelAttribute PaginationDTO paginationDTO
            ) {
        return problemService.findAllPaginated(paginationDTO);
    }

    @GetMapping("find")
    public Problem findProblem(@RequestParam @NotBlank Long id) {
        return problemService.findById(id);
    }

}
