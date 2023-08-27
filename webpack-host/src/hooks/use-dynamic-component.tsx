import React from "react";
import script from "scriptjs";

export interface ModuleProps {
  scope: string;
  version: string;
  props?: any;
}

const URL = "http://localhost:3000/remote.umd.js";

const ModuleLoader = ({ version, scope, props }: ModuleProps) => {
  const [Component, setComponent] = React.useState<any>();
  const [error, setError] = React.useState<string | null>("");

  // const URL => use version, and scope to mount the new url where the UMD is
  // Created a local bundle just for sake of simplicity

  React.useEffect(() => {
    script(URL, () => {
      const target = window[scope];
      if (target) {
        // loaded OK
        setComponent(target);
        setError(null);
      } else {
        // loaded fail
        setError(`Cannot load component ${scope} at ${URL}`);
        setComponent(null);
      }
    });
  }, [scope]);

  if (error) {
    return <div>{error}</div>;
  } else {
    if (Component?.default) {
      const DynamicRemote = Component.default;
      const someProps = { message: "I'm a custom message" };
      return <DynamicRemote {...someProps} />;
    } else return null;
  }
};

const useDynamicComponent = (remote: ModuleProps) => (
  <ModuleLoader {...remote} />
);

export default useDynamicComponent;
