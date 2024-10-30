package store.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
@Entity
public class User {
    @Id
    @GeneratedValue
    private int id;
    private String email;
    private String first_name;
    private String last_name;
    private String password;

    public User() {

    }

    public User(String email, String first_name, String last_name, String password) {
        setEmail(email);
        setFirst_name(first_name);
        setLast_name(last_name);
        setPassword(password);
    }
}
