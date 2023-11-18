package com.algowars.core.problem.services;

import com.algowars.core.common.pagination.dtos.PaginationDTO;
import com.algowars.core.common.pagination.dtos.PaginationResponse;
import com.algowars.core.common.pagination.mapper.PaginationMapper;
import com.algowars.core.data.entities.Problem;
import com.algowars.core.problem.repositories.ProblemRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class ProblemService {
    private final ProblemRepository problemRepository;

    public PaginationResponse<Problem> findAllPaginated(PaginationDTO paginationDTO) {
        Pageable paging = PageRequest.of(paginationDTO.getPage() - 1, paginationDTO.getSize());
        Page<Problem> problems = problemRepository.findAllBeforeTimestamp(paging, paginationDTO.getTimestamp());
        return PaginationMapper.map(problems);
    }
}
