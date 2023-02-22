export const validate = (data: { email: string }, type: string) => {
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

    return error
}