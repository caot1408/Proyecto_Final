package com.banquito.banquito.service;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.banquito.banquito.model.AnalistaCredito;
import com.banquito.banquito.model.MyUserDetails;
import com.banquito.banquito.model.Usuario;

@Service
public class MyUserDetailsService implements UserDetailsService {

    private final UsuarioService usuarioService;
    private final AnalistaCreditoService analistaCreditoService;

    public MyUserDetailsService(UsuarioService usuarioService, AnalistaCreditoService analistaCreditoService) {
        this.usuarioService = usuarioService;
        this.analistaCreditoService = analistaCreditoService;
    }

    @Override
    public UserDetails loadUserByUsername(String correoElectronico) throws UsernameNotFoundException {
        // Intenta encontrar al usuario por correo
        Usuario usuario = usuarioService.obtenerUsuarioPorCorreo(correoElectronico);
        if (usuario != null) {
            return new MyUserDetails(usuario);
        }
    
        // Si no encuentra un usuario, intenta con el analista
        AnalistaCredito analista = analistaCreditoService.obtenerAnalistaPorCorreo(correoElectronico);
        if (analista != null) {
            return new MyUserDetails(analista);
        }
    
        throw new UsernameNotFoundException("Usuario o Analista no encontrado con el correo: " + correoElectronico);
    }
    
}
