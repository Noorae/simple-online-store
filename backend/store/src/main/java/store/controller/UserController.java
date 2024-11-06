package store.controller;

import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import store.model.Product;
import store.model.User;
import store.repository.ProductRepository;
import store.repository.UserRepository;

import java.util.List;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "${cors.allowedOrigins}")
public class UserController {

    private final UserRepository userRepository;

    @Autowired
    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @PostConstruct
    public void init() {

    }

    @GetMapping
    public List<User> getAllItems() {
        return userRepository.findAll();
    }

    @PostMapping
    public User createItem(@RequestBody User user) {
        return userRepository.save(user);
    }

    @PostMapping("/login")
    public ResponseEntity<String> loginUser(@RequestBody User loginUser) {
        User user = userRepository.findByEmailAndPassword(loginUser.getEmail(), loginUser.getPassword());

        if (user != null) {
            return ResponseEntity.ok("Login was successful!");
        } else {
            return ResponseEntity.status(401).body("Invalid email or password");
        }
    }




}
