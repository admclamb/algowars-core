package com.algowars.core.pagination.dtos;

import com.aiquizgenerator.backend.common.pagination.labels.PaginationLabels;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDateTime;

public class PaginationDTO {
    @NotNull(message = PaginationLabels.PAGE_NOT_BLANK)
    @Min(value = 1, message = PaginationLabels.PAGE_MIN_SIZE)
    int page;

    @NotNull(message = PaginationLabels.SIZE_NOT_BLANK)
    @Min(value = 10, message = PaginationLabels.SIZE_MIN)
    @Max(value = 100, message = PaginationLabels.SIZE_MAX)
    int size;

    @NotNull(message = PaginationLabels.TIMESTAMP_NOT_BLANK)
    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME)
    LocalDateTime timestamp;

    public int getPage() {
        return page;
    }

    public void setPage(int page) {
        this.page = page;
    }

    public int getSize() {
        return size;
    }

    public void setSize(int size) {
        this.size = size;
    }

    public LocalDateTime getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(LocalDateTime timestamp) {
        this.timestamp = timestamp;
    }
}
