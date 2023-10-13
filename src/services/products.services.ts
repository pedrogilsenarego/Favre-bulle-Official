import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
} from "firebase/firestore";

import { db } from "../firebase/utils";
import { Product } from "../types/product";
import { DB } from "./constants";
import { deleteStorageFolder, handleAddThumbnail } from "./products.handlers";

export const productsServices = {
  createProduct: async (product: Product) => {
    try {
      const thumbnailUrl = await handleAddThumbnail(
        product.sku,
        product.thumbnail,
        (progress) => console.log(progress)
      );

      const specialThumbnailUrl = await handleAddThumbnail(
        product.sku,
        product.specialThumbnail,
        (progress) => console.log(progress)
      );
      const imagesUrl = await handleAddThumbnail(
        product.sku,
        product.images,
        (progress) => console.log(progress)
      );
      const newProduct: Product = {
        ...product,
        thumbnail: thumbnailUrl,
        specialThumbnail: specialThumbnailUrl,
        images: imagesUrl,
      };

      const docRef = await addDoc(collection(db, DB.PRODUCTS), newProduct);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  },
  getProducts: async () => {
    try {
      const querySnapshot = await getDocs(collection(db, DB.PRODUCTS));
      const productsArray: Product[] = [];

      querySnapshot.forEach((doc) => {
        const data = doc.data() as any;
        const id = doc.id;
        productsArray.push({ id, ...data });
      });

      return productsArray;
    } catch (e) {
      console.error("Error fetching documents: ", e);
    }
  },
  getProduct: async (id: string) => {
    try {
      const productDocRef = doc(db, DB.PRODUCTS, id);
      const productDoc = await getDoc(productDocRef);

      if (productDoc.exists()) {
        const data = productDoc.data() as any;
        return { id, ...data };
      } else {
        // Document with the provided ID doesn't exist
        console.error("Product not found with ID: ", id);
        return null;
      }
    } catch (e) {
      console.error("Error fetching document: ", e);
    }
  },
  deleteProduct: async ({
    productId,
    sku,
  }: {
    productId: string;
    sku: string;
  }) => {
    try {
      await deleteDoc(doc(db, DB.PRODUCTS, productId));
      await deleteStorageFolder(`products/${sku}`);

      console.log(`Product with ID ${productId} and model ${sku} deleted.`);
    } catch (error) {
      console.error("Error deleting product: ", error);
      throw error; // Propagate the error to handle it appropriately in the calling code.
    }
  },
};
