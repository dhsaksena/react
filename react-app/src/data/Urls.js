import { DataTypes } from "./Types";

const protocol = "http";
const hostname = "localhost";
const port = 3500;

export const RestUrls = {
    [DataTypes.PRODUCTS]: `http://localhost:3500/api/products`,
    [DataTypes.CATEGORIES]: `http://localhost:3500/api/categories`
   
}