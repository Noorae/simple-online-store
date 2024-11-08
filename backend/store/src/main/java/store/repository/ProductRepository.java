package store.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import store.model.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {
    Product findByGtinCode(long gtinCode);
}
