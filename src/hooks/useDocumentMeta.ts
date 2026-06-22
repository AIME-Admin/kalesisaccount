import { useEffect } from "react";
import { SITE_URL } from "../config";

function setMetaByName(name: string, content: string) {
  let el = document.querySelector(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("name", name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setCanonical(href: string) {
  let el = document.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

/** Keep <title>, meta description and canonical in sync per page (SPA). */
export function useDocumentMeta(opts: {
  title: string;
  description?: string;
  path?: string;
}) {
  const { title, description, path } = opts;
  useEffect(() => {
    if (title) document.title = title;
    if (description) setMetaByName("description", description);
    if (path) setCanonical(`${SITE_URL}${path}`);
  }, [title, description, path]);
}
