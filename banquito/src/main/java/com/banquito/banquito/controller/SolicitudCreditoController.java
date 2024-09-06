package com.banquito.banquito.controller;

import java.math.BigDecimal;
import java.util.List;

import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.banquito.banquito.model.SolicitudCredito;
import com.banquito.banquito.model.Usuario;
import com.banquito.banquito.service.SolicitudCreditoService;
import com.banquito.banquito.service.UsuarioService;

import lombok.RequiredArgsConstructor;

@RestController
@Controller
@RequestMapping("/api/solicitudes")
@RequiredArgsConstructor
public class SolicitudCreditoController {

    private final SolicitudCreditoService solicitudCreditoService;
    private final UsuarioService usuarioService;

    // MÉTODOS REST

    @GetMapping
    public ResponseEntity<List<SolicitudCredito>> listarSolicitudesREST() {
        return new ResponseEntity<>(solicitudCreditoService.listarSolicitudes(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<SolicitudCredito> obtenerSolicitudPorIdREST(@PathVariable Long id) {
        SolicitudCredito solicitud = solicitudCreditoService.obtenerSolicitudPorId(id);
        return solicitud != null ? ResponseEntity.ok(solicitud) : ResponseEntity.notFound().build();
    }

    @PostMapping
    public ResponseEntity<SolicitudCredito> crearSolicitudREST(@RequestBody SolicitudCredito solicitudCredito) {
        // Obtener el usuario por su ID (asegúrate de que 'solicitudCredito.usuario.id' tenga un valor válido)
        Usuario usuario = usuarioService.obtenerUsuarioPorId(solicitudCredito.getUsuario().getIdUsuario());
        
        if (usuario == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST); // Si el usuario no existe
        }
    
        solicitudCredito.setUsuario(usuario); // Establecer el usuario en la solicitud
        SolicitudCredito nuevaSolicitud = solicitudCreditoService.crearSolicitud(solicitudCredito);
    
        return new ResponseEntity<>(nuevaSolicitud, HttpStatus.CREATED);
    }
    

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminarSolicitudREST(@PathVariable Long id) {
        solicitudCreditoService.eliminarSolicitud(id);
        return ResponseEntity.noContent().build();
    }

    // MÉTODOS GRAPHQL

    @QueryMapping
    public List<SolicitudCredito> listarSolicitudes() {
        return solicitudCreditoService.listarSolicitudes();
    }

    @QueryMapping
    public SolicitudCredito obtenerSolicitudPorId(Long id) {
        return solicitudCreditoService.obtenerSolicitudPorId(id);
    }

    // Método para aprobar la solicitud
    @PutMapping("/{id}/aprobar")
    public ResponseEntity<SolicitudCredito> aprobarSolicitud(@PathVariable Long id) {
        SolicitudCredito solicitud = solicitudCreditoService.obtenerSolicitudPorId(id);
        if (solicitud != null) {
            solicitud.setEstado("Aprobada");
            solicitudCreditoService.guardarSolicitud(solicitud);
            return ResponseEntity.ok(solicitud);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // Método para desaprobar la solicitud
    @PutMapping("/{id}/desaprobar")
    public ResponseEntity<SolicitudCredito> desaprobarSolicitud(@PathVariable Long id) {
        SolicitudCredito solicitud = solicitudCreditoService.obtenerSolicitudPorId(id);
        if (solicitud != null) {
            solicitud.setEstado("Desaprobada");
            solicitudCreditoService.guardarSolicitud(solicitud);
            return ResponseEntity.ok(solicitud);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @MutationMapping
    public SolicitudCredito crearSolicitud(Long usuarioId, Float montoSolicitado, String fechaSolicitud, String estado, Float puntajeCrediticio) {
        SolicitudCredito solicitudCredito = new SolicitudCredito();
        solicitudCredito.setUsuario(usuarioService.obtenerUsuarioPorId(usuarioId));
        solicitudCredito.setMontoSolicitado(BigDecimal.valueOf(montoSolicitado));
        solicitudCredito.setFechaSolicitud(java.time.LocalDateTime.parse(fechaSolicitud));
        solicitudCredito.setEstado(estado);
        solicitudCredito.setPuntajeCrediticio(BigDecimal.valueOf(puntajeCrediticio));
        return solicitudCreditoService.crearSolicitud(solicitudCredito);
    }
}
