package com.algowars.core.evaluator.services;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import javax.script.ScriptException;

@RequiredArgsConstructor
@Service
public class EvaluatorService {
    public Object runScript(String code) throws ScriptException {
        ScriptEngineManager manager = new ScriptEngineManager();
        ScriptEngine engine = manager.getEngineByName("graal.js"); // or "graal.js" for GraalVM
        try {
            return engine.eval(code);
        } catch (ScriptException e) {
            e.printStackTrace();
            throw e;
        }
    }
}