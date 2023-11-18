package com.algowars.core.common.pagination.mapper;

import com.algowars.core.common.pagination.dtos.PaginationResponse;
import org.springframework.data.domain.Page;

import java.util.HashMap;
import java.util.Map;

public class PaginationMapper {

    public static <T> PaginationResponse<T> map(Page<T> page) {
        PaginationResponse<T> response = new PaginationResponse<T>();
        response.setResults(page.getContent());
        response.setPage(page.getPageable().getPageNumber() + 1);
        response.setTotalPages(page.getTotalPages());
        response.setSize(page.getSize());
        response.setLast(page.isLast());
        return response;
    }
}
