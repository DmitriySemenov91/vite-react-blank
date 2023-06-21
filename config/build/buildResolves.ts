import webpack from "webpack";
import {BuildOptions} from "./types/config";

export function buildResolves(options: BuildOptions): webpack.ResolveOptions {
  return {
    extensions: [".ts", ".tsx", ".jsx", ".js"],
    preferAbsolute: true,
    modules: [options.paths.src, "node_modules"],
    mainFiles: ["index"],
    alias: {},
  };
}
