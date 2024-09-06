package com.banquito.banquito.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.logout.SecurityContextLogoutHandler;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.banquito.banquito.dto.LoginRequest;
import com.banquito.banquito.model.MyUserDetails;
import com.banquito.banquito.service.MyUserDetailsService;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private MyUserDetailsService userDetailsService;

@PostMapping("/login")
public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {
    Authentication authentication = authenticationManager.authenticate(
        new UsernamePasswordAuthenticationToken(loginRequest.getCorreoElectronico(), loginRequest.getPassword())
    );
    
    SecurityContextHolder.getContext().setAuthentication(authentication);
    MyUserDetails userDetails = (MyUserDetails) authentication.getPrincipal();

    // Aquí eliminamos el prefijo 'ROLE_' al devolver el rol al frontend
    String userRole = userDetails.getAuthorities().stream()
        .map(GrantedAuthority::getAuthority)
        .map(role -> role.replace("ROLE_", ""))  // Eliminamos el prefijo 'ROLE_'
        .findFirst()
        .orElse("");  // Aseguramos que el rol esté presente
    
    return ResponseEntity.ok(Map.of(
        "message", "Bienvenido " + userDetails.getUsername(),
        "user", userDetails.getUsername(),
        "role", userRole  // Devolvemos el rol sin 'ROLE_'
    ));
}

    

    @PostMapping("/logout")
    public ResponseEntity<?> logout(HttpServletRequest request, HttpServletResponse response) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        if (auth != null) {
            new SecurityContextLogoutHandler().logout(request, response, auth);
        }
        return ResponseEntity.ok(Map.of(
            "message", "Logout exitoso"
        ));
    }
    

}
