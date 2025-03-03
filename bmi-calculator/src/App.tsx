const App = () => {
  return (
    <div className="min-h-screen bg-white p-8 md:p-16">
      <h1 className="text-preset-1 mb-8 text-blue-900">Esempio di Preset 1</h1>
      <h2 className="text-preset-2 mb-6 text-blue-500">Esempio di Preset 2</h2>
      <h3 className="text-preset-3 text-grey-500 mb-4">Esempio di Preset 3</h3>
      <p className="text-preset-4 mb-2">
        Esempio di Preset 4 per testi di paragrafo più grandi
      </p>
      <p className="text-preset-5">
        Esempio di Preset 5 per testo normale nei paragrafi
      </p>
      <p className="text-preset-6-semibold">
        Esempio di Preset 6 per testo semibold
      </p>
      <p className="text-preset-7-bold">Esempio di Preset 7 per testo bold</p>
      <p className="text-preset-7-regular">
        Esempio di Preset 7 per testo regular
      </p>
    </div>
  );
};

export default App;
