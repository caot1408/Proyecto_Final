package com.banquito.banquito.service;


import java.util.List;

import org.springframework.stereotype.Service;

import com.banquito.banquito.model.SolicitudCredito;
import com.banquito.banquito.repository.SolicitudCreditoRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class SolicitudCreditoService {

    private final SolicitudCreditoRepository solicitudCreditoRepository;

    public List<SolicitudCredito> listarSolicitudes() {
        return solicitudCreditoRepository.findAll();
    }

    public SolicitudCredito obtenerSolicitudPorId(Long id) {
        return solicitudCreditoRepository.findById(id).orElse(null);
    }

    public SolicitudCredito crearSolicitud(SolicitudCredito solicitudCredito) {
        return solicitudCreditoRepository.save(solicitudCredito);
    }

    public void eliminarSolicitud(Long id) {
        solicitudCreditoRepository.deleteById(id);
    }

    // Aprobar una solicitud
    public SolicitudCredito aprobarSolicitud(Long id) {
        SolicitudCredito solicitud = obtenerSolicitudPorId(id);
        if (solicitud != null) {
            solicitud.setEstado("Aprobada");
            return solicitudCreditoRepository.save(solicitud);
        }
        return null;
    }

    // Desaprobar una solicitud
    public SolicitudCredito desaprobarSolicitud(Long id) {
        SolicitudCredito solicitud = obtenerSolicitudPorId(id);
        if (solicitud != null) {
            solicitud.setEstado("Desaprobada");
            return solicitudCreditoRepository.save(solicitud);
        }
        return null;
    }

    // Guardar una solicitud
    public SolicitudCredito guardarSolicitud(SolicitudCredito solicitudCredito) {
        return solicitudCreditoRepository.save(solicitudCredito);
    }
}

