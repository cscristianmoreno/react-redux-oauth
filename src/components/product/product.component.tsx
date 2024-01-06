import { FC, MouseEventHandler, ReactElement } from "react";

import "./product.component.css";
import { ProductDTO } from "../../dto/product.dto";
import { Button } from "@mui/joy";

const ProductComponent: FC<{ product: ProductDTO, onClick?: MouseEventHandler }> = ({ product, onClick }: { product: ProductDTO, onClick?: MouseEventHandler }): ReactElement => {

    return (
        <>
            <div className="class_product_container">
                <div className="class_product_image_container">
                    <img src={product.image}/>
                </div>
                <span>{product.title}</span>

                <Button onClick={onClick} color="primary">Añadir</Button>


            </div>
        </>
    );
};

export default ProductComponent;