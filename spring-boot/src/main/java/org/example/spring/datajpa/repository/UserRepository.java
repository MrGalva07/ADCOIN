package org.example.spring.datajpa.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import org.example.spring.datajpa.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
}