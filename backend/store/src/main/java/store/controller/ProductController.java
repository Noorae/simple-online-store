package store.controller;

import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import store.model.Product;
import store.repository.ProductRepository;

import java.util.List;

@RestController
public class ProductController {

    private final ProductRepository productRepository;

    @Autowired
    public ProductController(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @PostConstruct
    public void init() {
        System.out.println(productRepository.findAll());

    }

    @GetMapping
    public List<Product> getAllItems() {
        return productRepository.findAll();
    }

    @PostMapping
    public Product createItem(@RequestBody Product product) {
        return productRepository.save(product);
    }

}
