import React from "react";

interface MicroFrontend {
  version: string;
  scope: string;
}

export interface MicroFrontendStore {
  [microfrontendId: string]: MicroFrontend;
}

interface MicrofrontendContextProps extends MicroFrontendStore {}

const defaultState: MicrofrontendContextProps = {};

const MicrofrontendContext =
  React.createContext<MicrofrontendContextProps>(defaultState);

export const MicrofrontendProvider = ({
  children,
  values,
}: React.PropsWithChildren<{ values: MicroFrontendStore }>) => {
  return (
    <MicrofrontendContext.Provider value={values}>
      {children}
    </MicrofrontendContext.Provider>
  );
};

const useMicrofrontends = () => {
  return React.useContext(MicrofrontendContext);
};

export const useMicrofrontend = ({ id }: { id: string }) => {
  const microfrontend = useMicrofrontends()[id] ?? null;
  return microfrontend;
};
