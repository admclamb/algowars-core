package com.algowars.core.problem.repositories;

import com.algowars.core.data.entities.Problem;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDateTime;

public interface ProblemRepository extends JpaRepository<Problem, Long> {

    @Query("SELECT p FROM Problem p WHERE p.createdAt <= :timestamp ORDER BY p.createdAt DESC")
    Page<Problem> findAllBeforeTimestamp(Pageable page, LocalDateTime timestamp);

    @Query("SELECT p ps FROM Problem p JOIN FETCH p.problemSetups ps WHERE p.id = :id")
    Problem findByIdAggregated(@Param("id") Long id);
}
