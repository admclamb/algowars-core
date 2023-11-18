package com.algowars.core.common.pagination.dtos;

import java.util.List;

public class PaginationResponse<T> {
    private List<T> results;
    private int page;
    private int totalPages;
    private int size;
    private boolean isLast;

    public List<T> getResults() {
        return results;
    }

    public void setResults(List<T> content) {
        this.results = content;
    }

    public int getPage() {
        return page;
    }

    public void setPage(int page) {
        this.page = page;
    }

    public int getTotalPages() {
        return totalPages;
    }

    public void setTotalPages(int totalPages) {
        this.totalPages = totalPages;
    }

    public int getSize() {
        return size;
    }

    public void setSize(int size) {
        this.size = size;
    }

    public boolean isLast() {
        return isLast;
    }

    public void setLast(boolean last) {
        isLast = last;
    }
}
