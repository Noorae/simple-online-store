package store.controller;

import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import store.model.Product;
import store.model.User;
import store.repository.ProductRepository;
import store.repository.UserRepository;

import java.util.List;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:1841")
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




}
