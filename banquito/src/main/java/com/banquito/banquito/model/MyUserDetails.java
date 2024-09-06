package com.banquito.banquito.model;

import java.util.Collection;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

public class MyUserDetails implements UserDetails {

    private final Usuario usuario;
    private final AnalistaCredito analista;

    public MyUserDetails(Usuario usuario) {
        this.usuario = usuario;
        this.analista = null;
    }

    public MyUserDetails(AnalistaCredito analista) {
        this.analista = analista;
        this.usuario = null;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        if (usuario != null) {
            return List.of(() -> "ROLE_USER");  // Nota que debe incluir el prefijo "ROLE_"
        } else if (analista != null) {
            return List.of(() -> "ROLE_ANALYST");  // Nota que debe incluir el prefijo "ROLE_"
        }
        return List.of();
    }
    

    @Override
    public String getPassword() {
        if (usuario != null) {
            return usuario.getPassword();
        } else if (analista != null) {
            return analista.getPassword();
        }
        return null;
    }

    @Override
    public String getUsername() {
        if (usuario != null) {
            return usuario.getIdUsuario().toString();
        } else if (analista != null) {
            return analista.getIdAnalista().toString();
        }
        return null;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
