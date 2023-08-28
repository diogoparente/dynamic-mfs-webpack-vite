import React, { Suspense } from "react";
import script from "scriptjs";
import { Route, Routes, useLocation } from "react-router-dom";

export interface ModuleProps {
  scope: string;
  version: string;
  props?: any;
}

const URL = "http://localhost:3000/remote.umd.js"; // Modify as needed

const ModuleLoader = ({ scope, props }: ModuleProps) => {
  const { pathname } = useLocation();

  const [Module, setModule] = React.useState<any>();
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

  if (error) {
    return <div>{error}</div>;
  }

  if (Module) {
    if (Module.default) {
      const { path, Element } = Module.default.find(
        ({ path }: { Element: any; path: string }) => path === pathname
      );
      const Microfrontend = () => <Element {...props} />;
      return <Microfrontend />;
    }
  }

  return null;
};

const useDynamicComponent = (props: ModuleProps) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ModuleLoader {...props} />
    </Suspense>
  );
};

export default useDynamicComponent;
