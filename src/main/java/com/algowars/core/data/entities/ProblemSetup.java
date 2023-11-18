package com.algowars.core.data.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;

@Entity
@Table(name = "problem_setup")
public class ProblemSetup {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @ManyToOne(cascade = CascadeType.DETACH)
    private Problem problem;

    @ManyToOne(fetch = FetchType.EAGER)
    private Language language;

    @Column(nullable = false)
    private String codeSetup;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Problem getProblem() {
        return problem;
    }

    public void setProblem(Problem problem) {
        this.problem = problem;
    }

    public Language getLanguage() {
        return language;
    }

    public void setLanguage(Language language) {
        this.language = language;
    }

    public String getCodeSetup() {
        return codeSetup;
    }

    public void setCodeSetup(String codeSetup) {
        this.codeSetup = codeSetup;
    }
}
