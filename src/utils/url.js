import { parseDomain, fromUrl } from "parse-domain";

export const getHostName = (url) => {
  if (!url) {
    return "";
  }
  const { domain, topLevelDomains } = parseDomain(fromUrl(url));
  return [domain, ...topLevelDomains].join(".");
};
