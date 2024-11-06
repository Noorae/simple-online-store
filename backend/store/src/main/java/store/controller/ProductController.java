package store.controller;

import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import store.model.Product;
import store.repository.ProductRepository;

import java.util.List;

@RestController
@RequestMapping("/api/products")
@CrossOrigin(origins = "${cors.allowedOrigins}")
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

    @GetMapping("/gtin/{gtinCode}")
    public ResponseEntity<Product> getProductByGtin(@PathVariable("gtinCode") long gtinCode) {
        Product product = productRepository.findByGtinCode(gtinCode);
        if (product != null) {
            return ResponseEntity.ok(product);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

}
