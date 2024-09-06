package com.banquito.banquito.service;

import java.util.List;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.banquito.banquito.model.AnalistaCredito;
import com.banquito.banquito.model.Usuario;
import com.banquito.banquito.repository.AnalistaCreditoRepository;
import com.banquito.banquito.repository.UsuarioRepository;

import lombok.RequiredArgsConstructor;


@Service
@RequiredArgsConstructor
public class PasswordMigrationService {

    private final UsuarioRepository usuarioRepository;
    private final AnalistaCreditoRepository analistaCreditoRepository;
    private final PasswordEncoder passwordEncoder;

    // Método para actualizar las contraseñas no hasheadas a contraseñas hasheadas
    public void actualizarContraseñas() {
        List<Usuario> usuarios = usuarioRepository.findAll();
        for (Usuario usuario : usuarios) {
            if (!usuario.getPassword().startsWith("$2a$")) {  // Verifica si la contraseña no está hasheada
                usuario.setPassword(passwordEncoder.encode(usuario.getPassword()));
                usuarioRepository.save(usuario);
            }
        }

        List<AnalistaCredito> analistas = analistaCreditoRepository.findAll();
        for (AnalistaCredito analista : analistas) {
            if (!analista.getPassword().startsWith("$2a$")) {  // Verifica si la contraseña no está hasheada
                analista.setPassword(passwordEncoder.encode(analista.getPassword()));
                analistaCreditoRepository.save(analista);
            }
        }
    }
}
