export interface FormsType {
   
    onSubmit: any;
    errors: any;
    isLoading: boolean;
    register: any;
    handleSubmit: any;

}

export interface RegisterFormFilesType{
    email: string;
    password: string;

};

export interface LoginFormFilesType{
    email: string;
    password: string;

};

export interface ForgetPasswordFormFilesType{
    email: string;
   

};