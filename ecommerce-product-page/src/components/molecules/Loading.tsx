/**
 * @file Loading.tsx
 * @description Generic loading component with customizable message
 */

import Layout from "../layout/Layout";

/**
 * @interface LoadingProps
 */
interface LoadingProps {
  loadingName?: string;
}

/**
 * Loading component
 * @component
 * @description Displays a loading message within the main layout. Can be customized with specific loading context.
 *
 * @example
 * ```tsx
 * <Loading loadingName="documentation" /> // Shows "Loading documentation..."
 * <Loading /> // Shows "Loading..."
 * ```
 *
 * @param {LoadingProps} props - Component props
 * @param {string} [props.loadingName] - Optional text to append to "Loading" message
 * @returns {JSX.Element} A loading message within the main layout
 */
const Loading = ({ loadingName }: LoadingProps) => {
  return (
    <Layout>
      <p className="p-4">Loading{loadingName ? ` ${loadingName}` : ""}...</p>
    </Layout>
  );
};

export default Loading;
