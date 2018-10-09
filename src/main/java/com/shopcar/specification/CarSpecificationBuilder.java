package com.shopcar.specification;

import com.shopcar.model.Car;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class CarSpecificationBuilder {
    private List<QueryCriteria> params;

    public CarSpecificationBuilder() {
        params = new ArrayList<QueryCriteria>();
    }

    public CarSpecificationBuilder with(QueryCriteria query) {
        params.add(query);
        return this;
    }

    public CarSpecificationBuilder with(String key, String operation, Object value) {
        params.add(new QueryCriteria(key, operation, value));
        return this;
    }

    public Specification<Car> build() {
        if (params.size() == 0) {
            return null;
        }

        Specification<Car> result = new CarSpecification(params.get(0));

        for (int i = 1; i < params.size(); i++) {
            result = Specification.where(result)
                    .and(new CarSpecification(params.get(i)));
        }

        return result;
    }
}
