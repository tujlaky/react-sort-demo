import React from "react";

function Controls({ running, onStart, onReset }: { running: boolean, onStart: React.ReactEventHandler, onReset: React.ReactEventHandler}) {
  return (
    <div className="flex flex-col align-item-center p-11 w-full md:w-40 bg-base-200 max-h-full">
      <button onClick={onStart} className="btn btn-primary mb-2">{running ? 'Stop' : 'Start'}</button>
      <button onClick={onReset} className="btn btn-accent">Reset</button>
    </div>
  )
}

export default Controls;