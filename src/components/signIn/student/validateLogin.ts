export const validate = (data: { email: string; password: string | any[]}, type: string) => {
    let error: {
        password?: string;
        email?: string;
      } = {
        password: "",
        email: "",
      };
    if (!data.email) {
        error.email = "Email required"
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
        error.email = "Email address is invalid"
    } else {
        delete error.email
    }

    if (!data.password) {
        error.password = "Password is required"
    } else if (data.password.length < 6) {
        error.password = "Password needs to be 6 character or more"
    } else {
        delete error.password
    }    

    return error
}