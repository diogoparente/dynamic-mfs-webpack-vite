import { PropsWithChildren } from 'react'

const Wrapper = ({ children }: PropsWithChildren<{}>) => (
  <div id="remote" style={{ border: '2px dashed blue', padding: '1rem' }}>
    {children}
  </div>
)

export default Wrapper
