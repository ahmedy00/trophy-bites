package com.trophybites.backend.controllers;

import com.trophybites.backend.entities.User;
import com.trophybites.backend.repositories.UserRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("users")
public class UserController {
    private final UserRepository userRepository;

    public UserController(UserRepository userRepository)  {
        this.userRepository = userRepository;
    }

    @GetMapping
    @CrossOrigin(origins = "http://localhost:3000")
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @PostMapping
    @CrossOrigin(origins = "http://localhost:3000")
    public User createUser(@RequestBody User newUser) {
        return userRepository.save(newUser);
    }

    @GetMapping("/{userId}")
    public User getUser(@PathVariable Long userId) {
        // Add custom exception
        return userRepository.findById(userId).orElse(null);
    }

    @PutMapping("/{userId}")
    public User updateUser (@PathVariable Long userId, @RequestBody User newUser) {
        Optional<User> user = userRepository.findById(userId);
        if (user.isPresent()) {
            User foundUser = user.get();
            foundUser.setUserName(newUser.getUserName());
            foundUser.setPassword(newUser.getPassword());
            userRepository.save(foundUser);
            return foundUser;
        }
        // Add custom exception
        return null;
    }

    @DeleteMapping("/{userId}")
    public void deleteUser(@PathVariable Long userId) {
        userRepository.deleteById(userId);
    }
}
