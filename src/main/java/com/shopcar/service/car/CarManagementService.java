package com.shopcar.service.car;

import com.shopcar.model.CarInfor.CarDetailInfor;
import com.shopcar.model.CarInfor.CarGeneralInfor;
import com.shopcar.specification.QueryCriteria;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface CarManagementService {
    CarDetailInfor getById(long id);

    Page<CarGeneralInfor> getAll(Pageable pageable);

    Page<CarGeneralInfor> search(String search, Pageable pageable);
    Page<CarGeneralInfor> search(List<QueryCriteria> queries, Pageable pageable);
}
