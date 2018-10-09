package com.shopcar.specification;

import com.shopcar.model.Car;
import org.springframework.data.jpa.domain.Specification;
import static com.shopcar.constant.SeachOperator.*;

import javax.persistence.criteria.*;


public class CarSpecification implements Specification<Car> {
    private QueryCriteria criteria;

    public CarSpecification(QueryCriteria criteria) {
        this.criteria = criteria;
    }

    @Override
    public Predicate toPredicate(Root<Car> root, CriteriaQuery<?> query, CriteriaBuilder builder) {
        String key = criteria.getKey();
        Path<String> expression = root.get(key);
        if (key.equalsIgnoreCase("type")
            || key.equalsIgnoreCase("brand"))
            expression = expression.get("name");
        return buildPredicate(expression, builder);
    }

    private Predicate buildPredicate(Path<String> expression, CriteriaBuilder builder) {
        String value = criteria.getValue().toString();
        switch (criteria.getOperator()) {
            case SEARCH_OPERATOR_EQUAL:
                return builder.equal(expression, value);
            case SEARCH_OPERATOR_NOT:
                return builder.notEqual(expression, value);
            case SEARCH_OPERATOR_GREATER:
                return builder.greaterThanOrEqualTo(expression, value);
            case SEARCH_OPERATOR_LESS:
                return builder.lessThanOrEqualTo(expression, value);
            case SEARCH_OPERATOR_LIKE:
                return builder.like(expression, value);
            default:
                return null;
        }
    }
}
