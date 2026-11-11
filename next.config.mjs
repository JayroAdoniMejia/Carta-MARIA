// En GitHub Actions toma el nombre del repo para el basePath. En tu PC queda vacío.
// Si tu repo se llama usuario.github.io, cambia repo a "".
const repo = process.env.GITHUB_ACTIONS ? "/" + process.env.GITHUB_REPOSITORY.split("/")[1] : "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: repo,
  images: { unoptimized: true },
  trailingSlash: true,
  env: { NEXT_PUBLIC_BASE_PATH: repo },
};

export default nextConfig;