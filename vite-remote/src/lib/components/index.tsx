const HelloWorld = ({ message }: { message: string }) => {
  return (
    <div style={{ border: '2px dashed blue' }}>
      Hey, I'm a remote lib, and I was given a message by the host app: <br />
      {message}
    </div>
  )
}

export { HelloWorld }
