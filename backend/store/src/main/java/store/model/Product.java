package store.model;

import jakarta.persistence.Column;
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

    @Column(name = "product_name")
    private String productName;

    @Column(name = "product_description")
    private String productDescription;

    private float product_weight;
    @Column(name = "product_kcal")
    private String productKcal;

    @Column(name = "gtin_code")
    private Long gtinCode;

    @Column(name = "product_image")
    private String productImage;


    public Product() {

    }

    public Product(String product_name,
                   String product_description,
                   float product_weight,
                   String product_kcal,
                   Long gtin_code,
                   String product_image) {
        setProductName(product_name);
        setProductDescription(product_description);
        setProduct_weight(product_weight);
        setProductKcal(product_kcal);
        setGtinCode(gtin_code);
        setProductImage(product_image);
    }
}
