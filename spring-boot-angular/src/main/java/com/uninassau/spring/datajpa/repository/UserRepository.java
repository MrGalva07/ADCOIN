package com.uninassau.spring.datajpa.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.uninassau.spring.datajpa.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
}
