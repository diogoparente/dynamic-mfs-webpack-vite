import useDynamicComponent from "../hooks/use-dynamic-component";
import { useMicrofrontend } from "../context/micro-frontends.context";

const Microfrontend = ({ microId = "remote" }: { microId: string }) => {
  const microfrontend = useMicrofrontend({ id: microId });
  const scope = microfrontend.scope;
  const version = microfrontend.version;

  const props = { message: "Heyooo from the host" };

  const Component = useDynamicComponent({
    scope,
    version,
    props,
  });

  return Component ? Component : null;
};

export default Microfrontend;
