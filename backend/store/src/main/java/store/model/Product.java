package store.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
@Entity
public class Product {

    @Id
    @GeneratedValue
    private Long id;
    private String product_name;
    private String product_description;
    private float product_weight;
    private String product_kcal;
    private Long gtin_code;


    public Product() {

    }

    public Product(String product_name,
                   String product_description,
                   float product_weight,
                   String product_kcal,
                   Long gtin_code) {
        setProduct_name(product_name);
        setProduct_description(product_description);
        setProduct_weight(product_weight);
        setProduct_kcal(product_kcal);
        setGtin_code(gtin_code);
    }
}
