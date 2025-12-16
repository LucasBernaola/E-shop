/*
Propósito de este codigo: exponer acceso de solo lectura y consultas comunes sobre el catálogo.

SOLID:

SRP: este módulo sólo resuelve “lectura/consulta de productos”.

DIP: la UI depende de funciones (abstracciones), no del origen de datos.

OCP: podemos cambiar la fuente (array local → API) sin tocar las páginas.
*/

import products from "@/data/products";
import { Product } from "@/models/products";

/*Busca un producto por slug, lo devuelve si lo encuentra, de lo contrario no esta definido */
export function getProductBySlug(slug: string): Product | undefined {
    for (const product of getAllProducts()) {
        if (product.slug === slug) {
            return product
        }
    }
    return undefined;
}

/* Retorna el catalogo completo solo como lectura, no se permiten mutaciones/modificaciones externas */
export function getAllProducts(): readonly Product [] {
    return products as readonly Product[];
}

/* Retorna solo productos destacados (featured === true) */
export function getFeaturedProducts(): Product[] {
    const featured: Product[] = [];

    for (const product of getAllProducts()) {
        if (product.featured === true) {
            featured.push(product)
        }
    }
    return featured;
}

/* Retorna todos los productos que pertenecen a la categoria buscada (mayusculas o minusculas) */
export function getProductsByCategory(category: string): Product[] {
    const normalized = category.trim().toLowerCase();
    const result: Product[] = [];

    for (const product of getAllProducts()) {
        if (product.category.trim().toLowerCase() === normalized) {
            result.push(product);
        }
    }
    return result;
}

/* Busca un producto por su id unico, devuelve el profucto encontrado, de lo contrario no existe */
export function getProductById(id: string): Product | undefined {
    const normalized = id.trim().toLowerCase();

    for (const product of getAllProducts()) {
        if (product.id.trim().toLowerCase() === normalized) {
            return product;
        }
    }
    return undefined;
}


