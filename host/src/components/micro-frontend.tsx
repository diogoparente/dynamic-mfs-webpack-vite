import React from "react";
import script from "scriptjs";
import { useMicrofrontend } from "../context/micro-frontends.context";

import { useLocation } from "react-router-dom";

export interface ModuleProps {
  scope: string;
  version: string;
  props?: any;
}

const URL = "http://localhost:3000/remote.umd.js"; // Modify as needed

const useModule = ({ scope }: Pick<ModuleProps, "scope">) => {
  const [module, setModule] = React.useState<any>();
  const [error, setError] = React.useState<string | null>("");

  React.useEffect(() => {
    script(URL, () => {
      const target = window[scope];
      if (target) {
        setModule(target);
        setError(null);
      } else {
        setError(`Cannot load module ${scope} at ${URL}`);
        setModule(null);
      }
    });
  }, [scope]);

  return { module, error };
};

const MicroFrontend = ({ module, props }: { module: any; props: any }) => {
  const { pathname } = useLocation();

  const remoteRoutes = module.default;

  const { Element } = remoteRoutes.find(
    ({ path }: { Element: any; path: string }) => path === pathname
  );
  const TargetMicroFrontend = () => <Element {...props} />;
  return <TargetMicroFrontend />;
};

const ModuleLoader = ({ scope, props }: ModuleProps) => {
  const { module, error } = useModule({ scope });

  if (error) {
    return <div>{error}</div>;
  }

  return module?.default ? (
    <MicroFrontend module={module} props={props} />
  ) : null;
};

const useDynamicComponent = (props: ModuleProps) => {
  return (
    <React.Suspense fallback={""}>
      <ModuleLoader {...props} />
    </React.Suspense>
  );
};

const Microfrontend = ({ microId = "remote" }: { microId: string }) => {
  const microfrontend = useMicrofrontend({ id: microId });
  if (!microfrontend) {
    return null;
  }
  const { version, scope } = microfrontend;

  const props = { message: "Heyooo from the host" };

  const Component = useDynamicComponent({
    scope,
    version,
    props,
  });

  return Component ?? null;
};

export default Microfrontend;
