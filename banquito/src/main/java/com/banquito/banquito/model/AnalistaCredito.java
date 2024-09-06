package com.banquito.banquito.model;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class AnalistaCredito {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idAnalista;

    @Column(nullable = false)
    private String nombre;

    @Column(nullable = false, unique = true)
    private String correoElectronico;

    @Column(nullable = false)
    private String password;

    @Column(nullable = false)
    private String role = "ANALYST"; // Puede ser 'USER' o 'ANALYST'

    // constructor, getters and setters

    public AnalistaCredito() {
    }

    public AnalistaCredito(Long idAnalista, String nombre, String correoElectronico, String password, String role) {
        this.idAnalista = idAnalista;
        this.nombre = nombre;
        this.correoElectronico = correoElectronico;
        this.password = password;
        this.role = role;
    }

    public Long getIdAnalista() {
        return this.idAnalista;
    }

    public void setIdAnalista(Long idAnalista) {
        this.idAnalista = idAnalista;
    }

    public String getNombre() {
        return this.nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getCorreoElectronico() {
        return this.correoElectronico;
    }

    public void setCorreoElectronico(String correoElectronico) {
        this.correoElectronico = correoElectronico;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getRole() {
        return this.role;
    }

    public void setRole(String role) {
        this.role = role;
    }


    @Override
    public String toString() {
        return "AnalistaCredito(idAnalista=" + this.getIdAnalista() + ", nombre=" + this.getNombre() + ", correoElectronico=" + this.getCorreoElectronico() + ")";
    }


}
