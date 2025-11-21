import React from 'react';

function App() {
  return (
    <div>
      <h1>test</h1>
      {/* font */}
      <div className="text-xs text-red-500">text-xs</div>
      <div className="text-sm text-[rgb(100,30,5)]">text-sm</div>
      <div className="text-lg font-bold">text-lg</div>
      <div className="text-xl font-extrabold">text-xl</div>
      <div className="text-2xl font-extrabold">text-xl</div>
      {/* background */}
      <div className="bg-amber-300">test</div>
      <div className="w-20 h-20 bg-blue-300">box</div>
      <div className="w-[300px] h-[300px] bg-red-300">box</div>

      {/* padding */}
      <div className="bg-gray-400 py-5 flex flex-wrap gap-5">
        <div className="bg-amber-300 w-1/2 h-full sm:w-1/2 lg:w-full mx-5 p-5">inner</div>
        <div className="bg-amber-300 w-1/2 h-full sm:w-1/2 lg:w-full mx-5 p-5">inner</div>
      </div>

      {/* border */}
      <div className="border-1 p-5 rounded text-xl mb-5">test</div>

      {/* flex */}
      <div className="flex gap-4 flex-col items-center justify-center">
        <div className="h-10 w-10 border">1</div>
        <div className="h-20 w-10 border flex-1">1</div>
        <div className="h-30 w-10 border">1</div>
        <div className="h-40 w-10 border">1</div>
      </div>

      <div style={{ height: '300px' }}></div>
    </div>
  );
}

export default App;
