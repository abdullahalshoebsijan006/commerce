import { AddToCart } from "components/cart/add-to-cart";
import Price from "components/price";

import { VariantSelector } from "./variant-selector";

export function ProductDescription({ product }: { product: Product }) {
  return (
    <>
      <div className="mb-6 flex flex-col border-b pb-6 dark:border-neutral-700">
        <h1 className="mb-2 text-5xl font-medium">{product.title}</h1>
        <div className="mr-auto w-auto rounded-full bg-blue-600 p-2 text-sm text-white">
          <Price
            amount={product.priceRange.maxVariantPrice.amount}
            currencyCode={product.priceRange.maxVariantPrice.currencyCode}
          />
        </div>
      </div>
      
      {product.descriptionHtml ? (
        <Prose
          className="mb-6 text-sm leading-tight dark:text-white/[60%]"
          html={product.descriptionHtml}
        />
      ) : null}
      <AddToCart product={product} />
      <!DOCTYPE html>
<html>
<head>
<title>Checkout</title>
<style>
body{
    font-family: Arial, sans-serif;
    max-width: 600px;
    margin: 20px auto;
}
input, select, button{
    width: 100%;
    padding: 10px;
    margin: 8px 0;
}
button{
    background: #000;
    color: white;
    border: none;
    cursor: pointer;
}
</style>
</head>
<body>

<h2>Checkout</h2>
  <h2<buy</body>

<form action="/process-order" method="POST">

    <h3>Shipping Address</h3>

    <input type="text" name="fullname" placeholder="Full Name" required>

    <input type="text" name="address" placeholder="Address" required>

    <input type="text" name="city" placeholder="City" required>

    <input type="text" name="zipcode" placeholder="ZIP Code" required>

    <input type="tel" name="phone" placeholder="Phone Number" required>

    <h3>Payment Method</h3>

    <select name="payment" required>
        <option value="">Select Payment Method</option>
        <option value="visa">Visa</option>
        <option value="mastercard">MasterCard</option>
        <option value="googlepay">Google Pay</option>
        <option value="paypal">PayPal</option>
    </select>

    <button type="submit">Buy Now</button>

</form>

</body>
</html>
    </>
  );
}
