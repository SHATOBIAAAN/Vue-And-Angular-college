
function App() {
  return (
    <div className="flex items-center justify-around p-4 bg-header">
      <div className="w-12 h-12 bg-main rounded-[50%]"></div>
      <ul className="text-main flex gap-4">
        <li>Home</li>
        <li>About</li>
        <li>Contacts</li>
      </ul>
    </div>
  );
}

export default App;
