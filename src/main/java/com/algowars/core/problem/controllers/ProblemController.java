package com.algowars.core.problem.controllers;

import com.algowars.core.common.pagination.dtos.PaginationDTO;
import com.algowars.core.common.pagination.dtos.PaginationResponse;
import com.algowars.core.data.entities.Problem;
import com.algowars.core.problem.services.ProblemService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("api/v1/problem")
@CrossOrigin(origins = "http://localhost:5173")
public class ProblemController {
    private final ProblemService problemService;

    @GetMapping()
    public PaginationResponse<Problem> getProblems(
            @Valid @ModelAttribute PaginationDTO paginationDTO
            ) {
        return problemService.findAllPaginated(paginationDTO);
    }
}
