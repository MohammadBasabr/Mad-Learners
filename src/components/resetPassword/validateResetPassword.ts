export const validate = (data: { password: string | any[] }, type: string) => {
    let error: {
        password?: string;
      } = {
        password: "",
      };

    if (!data.password) {
        error.password = "Password is required"
    } else if (data.password.length < 6) {
        error.password = "Password needs to be 6 character or more"
    } else {
        delete error.password
    }    

    return error
}