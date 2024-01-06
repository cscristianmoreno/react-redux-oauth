import { Button, Link, Stack } from "@mui/joy";
import { FC, FormEvent, ReactElement, useState } from "react";
import SearchComponent from "../../components/search/search.component";
import { ProductDTO } from "../../dto/product.dto";
import { HookModelStruct } from "../../models/hook.model";
import ModalComponent from "../../components/modal/modal.component";
import ProductComponent from "../../components/product/product.component";
import FormComponent from "../../components/form/form.component";
import FieldComponent from "../../components/form/field/field.component";
import { FuncModelStruct } from "../../models/fc.model";
import SnackbarComponent from "../../components/snackbar/snackbar.component";
import { CheckCircleRounded, ErrorRounded, PersonAddRounded, PersonRounded, SyncRounded } from "@mui/icons-material";
import { useGetProductsQuery } from "../../redux/api/products.api";
import { SubmitModelStruct } from "../../models/submit.model";
import { useSubmit } from "../../hooks/useSubmit";
import { useAuthenticationQuery } from "../../redux/api/user.api";

export const IndexComponent: FC = (): ReactElement => {
    
    const products: any = useGetProductsQuery();
    const [loginAccount, setLoginAccount]: HookModelStruct<boolean> = useState<boolean>(false);
    const [createAccount, setCreateAccount]: HookModelStruct<boolean> = useState<boolean>(false);
    
    const { onRegister, registerResult, onLogin, loginResult }: SubmitModelStruct = useSubmit();
    const authentication: any = useAuthenticationQuery();

    const onClickOpenModalCreateAccount: FuncModelStruct<void> = (): void => {
        setCreateAccount(true);
        setLoginAccount(false);
    };

    const onClickOpenModalLoginAccount: FuncModelStruct<void> = (): void => {
        setCreateAccount(false);
        setLoginAccount(true);
    };

    return (
        <Stack direction="column" alignItems="center" width="100vw" height="100vh">
            <div className="class_header_container">

            </div>

            <br />
            <SearchComponent/>
            <br />

            <Stack justifyContent="space-around" direction="row" width="1300px" flexWrap="wrap" className="class_products_container">
                {products.isSuccess && products.data && products.data.map((str: ProductDTO, index: number): ReactElement => {
                    return (
                        <div key={index} style={{ marginTop: "10px" }}>
                            <ProductComponent onClick={(): void => onClickOpenModalLoginAccount()} product={str} />;
                        </div>
                    );
                })}
            </Stack>

            <ModalComponent
                open={loginAccount}
                onClose={(): void => setLoginAccount(false)}
                title="Inicia sesión"
                icon={<PersonRounded/>}
            >
                <FormComponent onSubmit={(ev: FormEvent<HTMLFormElement>): void => onLogin(ev)}>
                    <FieldComponent
                        label="Correo electrónico"
                        type="text"
                        name="email"
                    />

                    <FieldComponent
                        label="Contraseña"
                        type="password"
                        name="password"
                    />

                    <Button type="submit">Ingresar</Button>
                    <small>
                        ¿No tienes una cuenta? 
                        <Link color="primary" onClick={(): void => onClickOpenModalCreateAccount()}>Inicia sesión</Link>
                    </small>
                </FormComponent>
            </ModalComponent>

            <ModalComponent
                open={createAccount}
                onClose={(): void => setCreateAccount(false)}
                title="Crear cuenta"
                icon={<PersonAddRounded/>}
            >
                <FormComponent onSubmit={(ev: FormEvent<HTMLFormElement>): void => onRegister(ev)}>
                    <FieldComponent
                        label="Nombre"
                        type="text"
                        name="name"
                    />

                    <FieldComponent
                        label="Apellido"
                        type="text"
                        name="lastname"
                    />

                    <FieldComponent
                        label="Email"
                        type="text"
                        name="email"
                    />

                    <FieldComponent
                        label="Contraseña"
                        type="password"
                        name="password"
                    />

                    <Button type="submit">Crear cuenta</Button>
                    <small>¿Ya tienes una cuenta? <Link color="primary" onClick={(): void => onClickOpenModalLoginAccount()}>Inicia sesión</Link></small>
                </FormComponent>
            </ModalComponent>
            
            <SnackbarComponent open={products.isError} color="danger" message={products.error?.message} icon={<ErrorRounded/>}/>
            <SnackbarComponent open={products.isLoading} color="warning" message="Cargando productos" icon={<SyncRounded/>}/>
            <SnackbarComponent open={products.isError} color="danger" message={products.error?.message} icon={<ErrorRounded/>}/>
            <SnackbarComponent open={registerResult.isSuccess} color="success" message="El usuario fue creado" icon={<CheckCircleRounded/>}/>
            <SnackbarComponent open={registerResult.isError} color="danger" message={registerResult.error?.message} icon={<ErrorRounded/>}/>
            <SnackbarComponent open={loginResult.isError} color="danger" message={loginResult.error?.message} icon={<ErrorRounded/>}/>
            <SnackbarComponent open={loginResult.isSuccess} color="success" message="Has ingresado con éxito" icon={<SyncRounded/>}/>
            <SnackbarComponent open={authentication.isSuccess} color="success" message="Usuario verificado con exito" icon={<SyncRounded/>}/>
            <SnackbarComponent open={authentication.isError} color="success" message="Tu autenticación ha expirado" icon={<SyncRounded/>}/>
        </Stack>
    );
};