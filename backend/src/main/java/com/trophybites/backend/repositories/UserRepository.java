package com.trophybites.backend.repositories;

import com.trophybites.backend.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

}
