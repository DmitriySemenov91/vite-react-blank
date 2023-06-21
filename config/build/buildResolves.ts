import webpack from "webpack";

export function buildResolves(): webpack.ResolveOptions {
  return {
    extensions: [".ts", ".tsx", ".jsx", ".js"],
  };
}
