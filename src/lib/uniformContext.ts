import {
  Context,
  ManifestV2,
  enableContextDevTools,
} from "@uniformdev/context";
import manifest from "./manifest.json";

export const createUniformContext = () => {
  const context = new Context({
    defaultConsent: true,
    manifest: manifest as ManifestV2,
    plugins: [enableContextDevTools()],
  });

  return context;
}