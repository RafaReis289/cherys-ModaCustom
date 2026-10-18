
package com.example.modacustom.service;

import com.example.modacustom.entity.Vendedor;
import com.example.modacustom.repository.VendedorRepository;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class VendedorService {

    private final VendedorRepository vendedorRepository;

    public VendedorService(VendedorRepository vendedorRepository) {
        this.vendedorRepository = vendedorRepository;
    }

    public Vendedor cadastrar(Vendedor vendedor) {

        if (vendedorRepository.existsByEmail(vendedor.getEmail())) {
            throw new IllegalArgumentException("E-mail já cadastrado.");
        }  return vendedorRepository.save(vendedor);
    }

    public List<Vendedor> listar() {
        return vendedorRepository.findAll();
    }

    public Vendedor buscar(Long id) {

        Optional<Vendedor> resultado = vendedorRepository.findById(id);

        if (resultado.isEmpty()) {
            throw new IllegalArgumentException( "Vendedor não encontrado.");
        } return resultado.get();
    }
}
