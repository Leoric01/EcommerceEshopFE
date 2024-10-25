import { Product } from "../Api";
import { Wishlist } from "../Api";
export function isWishlisted(wishlist: Wishlist, product: Product) {
  return Array.from(wishlist?.products ?? []).some((p) => p.id === product.id);
}
