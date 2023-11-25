package com.algowars.core.evaluator.dtos;

import jakarta.validation.constraints.NotNull;

public class AnonymousEvaluationRequest {

    @NotNull
    String code;

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }
}
