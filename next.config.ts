import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    // Flere lockfiler på Desktop gjør at Next ellers gjetter feil rot.
    root: path.resolve(),
  },
};

export default nextConfig;
