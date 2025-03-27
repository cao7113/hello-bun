// bun install react

function AComponent(props: {message: string}) {
  return (
    <div>
      <h1 style={{color: 'red'}}>{props.message}</h1>
    </div>
  );
}

console.log(<AComponent message="Hello world!" />);