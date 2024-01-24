package com.trophybites.backend.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name="user")
@Data
public class User {
    @Id
    Long id;
    String firstName;
    String lastName;
    String fullName;
    String userName;
    String password;
    String email;
    String favouriteTeam;
}
