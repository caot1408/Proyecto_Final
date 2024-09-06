package com.banquito.banquito.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.banquito.banquito.service.PasswordMigrationService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/migracion")
@RequiredArgsConstructor
public class PasswordMigrationController {

    private final PasswordMigrationService passwordMigrationService;

    @PostMapping("/migrar")
    public ResponseEntity<String> migrarContraseñas() {
        passwordMigrationService.actualizarContraseñas();
        return ResponseEntity.ok("Migración de contraseñas completada");
    }
}

