package com.algowars.core.evaluator.controllers;

import com.algowars.core.evaluator.dtos.AnonymousEvaluationRequest;
import com.algowars.core.evaluator.dtos.EvaluationResponse;
import com.algowars.core.evaluator.services.EvaluatorService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import javax.script.ScriptException;

@RestController
@RequiredArgsConstructor
@RequestMapping("api/v1/evaluator")
@CrossOrigin(origins = "http://localhost:5173")
public class EvaluatorController {

    private final EvaluatorService evaluatorService;

    @PostMapping("evaluate/anonymous")
    public Boolean evaluateAnonymous(@RequestBody @Valid AnonymousEvaluationRequest anonymousEvaluationRequest) {
            System.out.println(anonymousEvaluationRequest.getCode());
            try {
                Object bindingsResult = evaluatorService.runScript(anonymousEvaluationRequest.getCode());
                System.out.println(bindingsResult);
                return true;
            } catch(ScriptException e) {
                return false;
            }
    }
}
