package com.algowars.core.evaluator.services;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import javax.script.ScriptException;

@RequiredArgsConstructor
@Service
public class EvaluatorService {

    private ScriptEngine jsEngine;

    EvaluatorService(ScriptEngineManager manager) {
        jsEngine = manager.getEngineByName("graal.js");
    }
    public Object runScript(String code) throws ScriptException {
        try {
            return jsEngine.eval(code);
        } catch (ScriptException e) {
            e.printStackTrace();
            throw e;
        }
    }
}