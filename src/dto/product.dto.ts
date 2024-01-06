export class ProductDTO {
    id!: number;
    title!: string;
    price!: number;
    image!: string;
    category!: string;

    public get getId(): number {
        return this.id;
    }
    public get getTitle(): string {
        return this.title;
    }
    public get getPrice(): number {
        return this.price;
    }
    public get getImage(): string {
        return this.image;
    }
    public get getCategory(): string {
        return this.category;
    }
    public set setId(id: number) {
        this.id = id;
    }
    public set setTitle(title: string) {
        this.title = title;
    }
    public set setPrice(price: number) {
        this.price = price;
    }
    public set setImage(image: string) {
        this.image = image;
    }
    public set setCategory(category: string) {
        this.category = category;
    }
}