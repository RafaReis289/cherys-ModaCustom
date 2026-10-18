package com.example.modacustom.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "vendedores")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Vendedor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String nome;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String senha;

    private String nomeLoja;

    private String descricao;
}