package com.example.modacustom.service;

import com.example.modacustom.entity.Cliente;
import com.example.modacustom.repository.ClienteRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ClienteService {

    private final ClienteRepository repository;

    public ClienteService(ClienteRepository repository) {
        this.repository = repository;
    }

    public Cliente cadastrar(Cliente cliente) {
        if (repository.existsByEmail(cliente.getEmail())) {
            throw new IllegalArgumentException(
                "Este e-mail já está cadastrado."
            );
        }
        return repository.save(cliente);
    }

    public List<Cliente> listar() {
        return repository.findAll();
    }

    public Cliente buscar(Long id) {
        return repository.findById(id).orElseThrow(() ->
                new IllegalArgumentException("Cliente não encontrado."));
    }

    public Cliente atualizar(Long id, Cliente dados) {
        Cliente cliente = buscar(id);

        cliente.setNome(dados.getNome());
        cliente.setTelefone(dados.getTelefone());
        cliente.setEndereco(dados.getEndereco());

        if (!cliente.getEmail().equals(dados.getEmail())) {
            if (repository.existsByEmail(dados.getEmail())) {
                throw new IllegalArgumentException(
                    "E-mail já cadastrado."
                );
            }
            cliente.setEmail(dados.getEmail());
        }

        return repository.save(cliente);
    }

    public void excluir(Long id) {
        repository.delete(buscar(id));
    }
}