package com.banquito.banquito.service;


import java.util.List;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.banquito.banquito.model.AnalistaCredito;
import com.banquito.banquito.repository.AnalistaCreditoRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AnalistaCreditoService {

    private final AnalistaCreditoRepository analistaCreditoRepository;
    private final PasswordEncoder passwordEncoder;  // Inyecta el PasswordEncoder


    public List<AnalistaCredito> listarAnalistas() {
        return analistaCreditoRepository.findAll();
    }

    public AnalistaCredito obtenerAnalistaPorId(Long id) {
        return analistaCreditoRepository.findById(id).orElse(null);
    }

    public AnalistaCredito obtenerAnalistaPorCorreo(String correoElectronico) {
        return analistaCreditoRepository.findByCorreoElectronico(correoElectronico);
    }

    public AnalistaCredito crearAnalista(AnalistaCredito analistaCredito) {
        analistaCredito.setPassword(passwordEncoder.encode(analistaCredito.getPassword()));
        return analistaCreditoRepository.save(analistaCredito);
    }

    public void eliminarAnalista(Long id) {
        analistaCreditoRepository.deleteById(id);
    }
}

