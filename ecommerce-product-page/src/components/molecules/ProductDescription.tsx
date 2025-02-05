/**
 * @file ProductDescription.tsx
 * @description Component for displaying product header information including company name, title, and description.
 */

import { sneakers } from "@/data";

/**
 * ProductDescription component
 * @component
 * @description Renders the product header section with company name, product title and description
 *
 * @example
 * ```tsx
 * <ProductDescription />
 * ```
 *
 * @returns {JSX.Element} A product description section containing:
 * - Company name (as subtitle)
 * - Product title (as main heading)
 * - Product description (as paragraph)
 *
 * @accessibility
 * - Uses semantic heading hierarchy (h1, h2)
 * - Proper text contrast for readability
 */
const ProductDescription = () => {
  const { company, title, description } = sneakers;
  return (
    <>
      <h2 className="text-accent-foreground text-sm font-bold uppercase">
        {company}
      </h2>
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="text-base text-gray-500">{description}</p>
    </>
  );
};

export default ProductDescription;
