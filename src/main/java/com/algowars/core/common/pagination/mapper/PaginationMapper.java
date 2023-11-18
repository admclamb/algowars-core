package com.algowars.core.pagination.mapper;

import org.springframework.data.domain.Page;

import java.util.HashMap;
import java.util.Map;

public class PaginationMapper {

    public static <T> Map<String, Object> map(Page<T> page) {
        Map<String, Object> paginationResponse = new HashMap<>();
        paginationResponse.put("content", page.getContent());
        paginationResponse.put("page", page.getPageable().getPageNumber() + 1);
        paginationResponse.put("totalPages", page.getTotalPages());
        paginationResponse.put("size", page.getSize());
        paginationResponse.put("last", page.isLast());
        return paginationResponse;
    }
}
