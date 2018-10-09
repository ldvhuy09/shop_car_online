package com.shopcar.payload;

public class ApiResponse {
    private int status;
    private Object payload;

    public ApiResponse(int status, Object payload) {
        this.status = status;
        this.payload = payload;
    }

    public ApiResponse(int status, String message) {
        this.status = status;
        this.payload = new MessagePayload(message);
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public Object getPayload() {
        return payload;
    }

    public void setPayload(Object payload) {
        this.payload = payload;
    }
}