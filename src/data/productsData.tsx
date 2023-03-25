type Product = {
     id: number;
     title: string;
     description: string;
     price: number;
     discountPercentage: number;
     rating: number;
     stock: number;
     brand: string;
     category: string;
     thumbnail: string;
     images: string[];
}                                                                                                             
export default async function productsData(): Promise<Product[]>{
   const  data = await fetch('https://dummyjson.com/products')
           try{
                const res = await data.json()
                return res as Product[]
           } catch(err){
                console.log(err)
                throw new Error('Failed to fetch product data');
           }
  }

  export type {Product}
// [
//     {
//         "id": 1,
//         "title": "iPhone 9",
//         "description": "An apple mobile which is nothing like apple",
//         "price": 549,
//         "discountPercentage": 12.96,
//         "rating": 4.69,
//         "stock": 94,
//         "brand": "Apple",
//         "category": "smartphones",
//         "thumbnail": "...",
//         "images": ["...", "...", "..."]
//       },
//       {
//             "id": 2,
//             "title": "iPhone 10",
//             "description": "An apple mobile which is nothing like apple",
//             "price": 649,
//             "discountPercentage": 12.96,
//             "rating": 4.69,
//             "stock": 94,
//             "brand": "Apple",
//             "category": "smartphones",
//             "thumbnail": "...",
//             "images": ["...", "...", "..."]
//         },
//         {
//             "id": 3,
//             "title": "iPhone 11",
//             "description": "An apple mobile which is nothing like apple",
//             "price": 749,
//             "discountPercentage": 12.96,
//             "rating": 4.69,
//             "stock": 94,
//             "brand": "Apple",
//             "category": "smartphones",
//             "thumbnail": "...",
//             "images": ["...", "...", "..."]
//         },
//         {
//             "id": 4,
//             "title": "iPhone 12",
//             "description": "An apple mobile which is nothing like apple",
//             "price": 849,
//             "discountPercentage": 12.96,
//             "rating": 4.69,
//             "stock": 94,
//             "brand": "Apple",
//             "category": "smartphones",
//             "thumbnail": "...",
//             "images": ["...", "...", "..."]
//         },
//         {
//             "id": 5,
//             "title": "iPhone 13",
//             "description": "An apple mobile which is nothing like apple",
//             "price": 949,
//             "discountPercentage": 12.96,
//             "rating": 4.69,
//             "stock": 94,
//             "brand": "Apple",
//             "category": "smartphones",
//             "thumbnail": "...",
//             "images": ["...", "...", "..."]
//         },
//         {
//             "id": 6,
//             "title": "iPhone 14",
//             "description": "An apple mobile which is nothing like apple",
//             "price": 1049,
//             "discountPercentage": 12.96,
//             "rating": 4.69,
//             "stock": 94,
//             "brand": "Apple",
//             "category": "smartphones",
//             "thumbnail": "...",
//             "images": ["...", "...", "..."]
//         }
// ]