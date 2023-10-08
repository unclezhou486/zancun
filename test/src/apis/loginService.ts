import request from "./request"

export default class loginService {
    static async login(data: {
        name: string,
        password: string
    }) {
        return request({
            "headers" : {
                "Content-Type" : "application/json",
            },
            method : "post",
            url: "/api/login",
            data: data
        });
    }

    static async sign(data: {
        name: string
        password: string
        check_password: string
        star_sign: string
    }) {
        return request( {

            "headers": {
                "Content-Type" : "application/json",
            },
            method : "post",
            url: "/api/sign",
            data: data
        });
    };

}