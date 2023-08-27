import { useMicrofrontend } from "../context/micro-frontends.context";
import useDynamicComponent from "../hooks/use-dynamic-component";

const Microfrontend = ({ microId = "remote" }: { microId: string }) => {
  const microfrontend = useMicrofrontend({ id: microId });
  const scope = microfrontend.scope;
  const version = microfrontend.version;

  const Component = useDynamicComponent({
    scope,
    version,
  });

  return Component ? Component : null;
};

export default Microfrontend;
