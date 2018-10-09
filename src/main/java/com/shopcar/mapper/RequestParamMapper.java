package com.shopcar.mapper;

import com.shopcar.specification.QueryCriteria;
import org.springframework.util.StringUtils;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import static com.shopcar.constant.QueryObject.SearchingParam;

public class RequestParamMapper {
    private static char[] specialChars = {'!', '~', '>', '<'};

    public static List<QueryCriteria> getQueryCriteriaFromMultipleParams(Map<String, String> queryMap) {
        List<QueryCriteria> queries = new ArrayList<>();
        for (String key : SearchingParam) {
            if (queryMap.get(key) != null)
                queries.add(getFromParam(key, queryMap.get(key)));
        }
        return queries;
    }

    private static QueryCriteria getFromParam(String key, String value) {
        String operator = "=";
        key = checkKeyInSpecialCase(key);
        if (StringUtils.hasText(value) && isExistOperatorInValue(value)) {
            operator = String.valueOf(value.charAt(0));
            value = value.substring(1);
        }
        return new QueryCriteria(key, operator, value);
    }

    private static String checkKeyInSpecialCase(String key) {
        if (key.equals("fromDate")) key = "storeDate";
        else if (key.equals("toDate")) key = "storeDate";
        return key;
    }

    private static boolean isExistOperatorInValue(String value) {
        char theFirstChar = value.charAt(0);
        for (char specialChar : specialChars) {
            if (theFirstChar == specialChar) return true;
        }
        return false;
    }
}
