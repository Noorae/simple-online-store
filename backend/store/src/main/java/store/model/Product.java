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
    private int gtin_code;


    public Product() {

    }
}
