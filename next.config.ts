import type { NextConfig } from "next";

const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const isGitHubPagesBuild = process.env.GITHUB_ACTIONS === "true";
const isUserSite = repositoryName.endsWith(".github.io");
const basePath = isGitHubPagesBuild && !isUserSite ? `/${repositoryName}` : "";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? (
  isGitHubPagesBuild
    ? `https://${process.env.GITHUB_REPOSITORY_OWNER}.github.io`
    : "http://localhost:3000"
);

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
    NEXT_PUBLIC_SITE_URL: siteUrl,
  },
};

export default nextConfig;
