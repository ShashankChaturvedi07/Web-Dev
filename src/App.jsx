export default function App() {
  let listInfo = [
    { id: 1, name: "Java" },
    { id: 2, name: "Python" },
    { id: 3, name: "Javascript" },
    { id: 4, name: "Mojo" },
    { id: 5, name: "Kotlin" }
  ];

  return (
    <div>
      <h1>Welcome to React JS</h1>

      {listInfo.map((item) => (
        <div key={item.id}>
          ID: {item.id} - Name: {item.name}
        </div>
      ))}
    </div>
  );
}