"use client";
//test

import { useState } from "react";

export default function PTOCalculator() {
  const [salary, setSalary] = useState("");
  const [hoursWorked, setHoursWorked] = useState("80");
  const [currentPTO, setCurrentPTO] = useState("");
  const [ptoAccumulated, setPTOAccumulated] = useState("");
  const [targetDays, setTargetDays] = useState("");
  const [targetDate, setTargetDate] = useState("");
  const [result, setResult] = useState(null);

  const calculatePTO = () => {
    const hourlyRate = (parseFloat(salary) / parseFloat(hoursWorked)).toFixed(2);
    const availablePTO = (parseFloat(currentPTO) / hourlyRate).toFixed(2);
    const availableDays = Math.floor(availablePTO / 8);
    const availableHours = Math.floor(availablePTO % 8);
    const accumulatedPTO = (parseFloat(ptoAccumulated) / hourlyRate).toFixed(2);

    let message = `Hourly Rate: $${hourlyRate}\n`;
    message += `Current PTO Time Available: ${availableDays} days and ${availableHours} hours.\n`;
    message += `PTO hours accumulated per pay period: ${accumulatedPTO}.`;
    
    setResult(message);
  };

  return (
    <div className="p-4 max-w-md mx-auto border rounded-lg shadow-lg bg-white text-gray-700">
      <div className="space-y-4">
        <label className="block font-medium">Gross Salary Per Pay Period</label>
        <input className="w-full p-2 border rounded text-gray-700" value={salary} onChange={(e) => setSalary(e.target.value)} placeholder="e.g. 4635.04" />

        <label className="block font-medium">Hours Worked Per Pay Period (Default: 80)</label>
        <input className="w-full p-2 border rounded text-gray-700" value={hoursWorked} onChange={(e) => setHoursWorked(e.target.value)} placeholder="e.g. 80" />

        <label className="block font-medium">Current Accumulated PTO Dollars</label>
        <input className="w-full p-2 border rounded text-gray-700" value={currentPTO} onChange={(e) => setCurrentPTO(e.target.value)} placeholder="e.g. 4736.42" />

        <label className="block font-medium">PTO Accumulated During Period</label>
        <input className="w-full p-2 border rounded text-gray-700" value={ptoAccumulated} onChange={(e) => setPTOAccumulated(e.target.value)} placeholder="e.g. 278.10" />

        <label className="block font-medium">Target Number of Days (Optional)</label>
        <input className="w-full p-2 border rounded text-gray-700" value={targetDays} onChange={(e) => setTargetDays(e.target.value)} placeholder="e.g. 15" />

        <label className="block font-medium">Target Date (Optional)</label>
        <input className="w-full p-2 border rounded text-gray-700" type="date" value={targetDate} onChange={(e) => setTargetDate(e.target.value)} />

        <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600" onClick={calculatePTO}>Calculate PTO</button>

        {result && <pre className="mt-4 p-2 bg-gray-100 rounded text-gray-700">{result}</pre>}
      </div>
    </div>
  );
}
