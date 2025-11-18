'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaClipboardList, FaCheck, FaWhatsapp, FaDownload, FaCalendar, FaMoneyBillWave } from 'react-icons/fa';
import { useToast } from './Toast';

interface Room {
  name: string;
  length: number;
  width: number;
  height: number;
  paintType: string;
  coats: number;
}

export default function ProjectPlanner() {
  const [rooms, setRooms] = useState<Room[]>([]);
  const [currentRoom, setCurrentRoom] = useState<Room>({
    name: '',
    length: 0,
    width: 0,
    height: 0,
    paintType: 'emulsion',
    coats: 2,
  });
  const { showToast } = useToast();

  const paintPrices: { [key: string]: number } = {
    emulsion: 2500,
    satin: 3000,
    matt: 2200,
    gloss: 3500,
    silk: 3200,
  };

  const calculateRoomRequirements = (room: Room) => {
    const wallArea = 2 * (room.length + room.width) * room.height;
    const coverage = 11; // sqm per liter
    const litersNeeded = Math.ceil((wallArea * room.coats) / coverage);
    const cost = litersNeeded * paintPrices[room.paintType];

    return { wallArea, litersNeeded, cost };
  };

  const addRoom = () => {
    if (!currentRoom.name || currentRoom.length <= 0 || currentRoom.width <= 0 || currentRoom.height <= 0) {
      showToast('Please fill in all room details', 'error');
      return;
    }

    setRooms([...rooms, currentRoom]);
    setCurrentRoom({
      name: '',
      length: 0,
      width: 0,
      height: 0,
      paintType: 'emulsion',
      coats: 2,
    });
    showToast('Room added to plan!', 'success');
  };

  const removeRoom = (index: number) => {
    setRooms(rooms.filter((_, i) => i !== index));
    showToast('Room removed', 'info');
  };

  const calculateTotals = () => {
    return rooms.reduce(
      (acc, room) => {
        const { litersNeeded, cost } = calculateRoomRequirements(room);
        return {
          totalLiters: acc.totalLiters + litersNeeded,
          totalCost: acc.totalCost + cost,
        };
      },
      { totalLiters: 0, totalCost: 0 }
    );
  };

  const getMaterialsList = () => {
    const totals = calculateTotals();
    return [
      `Paint: ${totals.totalLiters} liters`,
      `Brushes: ${Math.ceil(rooms.length / 2)} sets`,
      `Rollers: ${rooms.length} rollers`,
      `Masking tape: ${Math.ceil(rooms.length / 2)} rolls`,
      `Drop cloths: ${rooms.length} pieces`,
      `Sandpaper: 1 pack`,
      `Paint trays: ${Math.ceil(rooms.length / 2)} trays`,
    ];
  };

  const getTimeline = () => {
    const daysNeeded = Math.ceil(rooms.length * 1.5); // 1.5 days per room average
    return [
      { task: 'Surface Preparation', days: Math.ceil(daysNeeded * 0.3) },
      { task: 'Priming', days: 1 },
      { task: 'First Coat', days: Math.ceil(daysNeeded * 0.3) },
      { task: 'Second Coat', days: Math.ceil(daysNeeded * 0.3) },
      { task: 'Drying & Touch-ups', days: 1 },
    ];
  };

  const downloadPlan = () => {
    const totals = calculateTotals();
    const materials = getMaterialsList();
    const timeline = getTimeline();

    let content = '=== SUKO PAINT PROJECT PLAN ===\n\n';
    content += 'ROOMS:\n';
    rooms.forEach((room, i) => {
      const { wallArea, litersNeeded, cost } = calculateRoomRequirements(room);
      content += `${i + 1}. ${room.name}\n`;
      content += `   Dimensions: ${room.length}m × ${room.width}m × ${room.height}m\n`;
      content += `   Wall Area: ${wallArea.toFixed(1)} sqm\n`;
      content += `   Paint: ${room.paintType.charAt(0).toUpperCase() + room.paintType.slice(1)}\n`;
      content += `   Coats: ${room.coats}\n`;
      content += `   Paint Needed: ${litersNeeded}L\n`;
      content += `   Estimated Cost: ₦${cost.toLocaleString()}\n\n`;
    });

    content += '\nMATERIALS CHECKLIST:\n';
    materials.forEach((item) => {
      content += `☐ ${item}\n`;
    });

    content += '\nTIMELINE:\n';
    let totalDays = 0;
    timeline.forEach((item) => {
      content += `• ${item.task}: ${item.days} day(s)\n`;
      totalDays += item.days;
    });
    content += `\nTotal Project Duration: ${totalDays} days\n`;

    content += `\nTOTAL BUDGET: ₦${totals.totalCost.toLocaleString()}\n`;
    content += `\n---\nContact Suko Paint: 0808 882 8606\ninfo@sukopaint.com`;

    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'suko-paint-project-plan.txt';
    a.click();
    URL.revokeObjectURL(url);

    showToast('Project plan downloaded!', 'success');
  };

  const orderViaWhatsApp = () => {
    const totals = calculateTotals();
    const materials = getMaterialsList();

    let message = '*SUKO PAINT PROJECT REQUEST*\n\n';
    message += `*Rooms (${rooms.length}):*\n`;
    rooms.forEach((room, i) => {
      const { litersNeeded } = calculateRoomRequirements(room);
      message += `${i + 1}. ${room.name}: ${litersNeeded}L ${room.paintType}\n`;
    });
    message += `\n*Materials Needed:*\n${materials.join('\n')}\n`;
    message += `\n*Total Paint:* ${totals.totalLiters}L`;
    message += `\n*Estimated Budget:* ₦${totals.totalCost.toLocaleString()}`;
    message += `\n\nPlease send me a detailed quote.`;

    window.open(`https://wa.me/23488828606?text=${encodeURIComponent(message)}`, '_blank');
  };

  const totals = calculateTotals();
  const materials = getMaterialsList();
  const timeline = getTimeline();

  return (
    <section id="project-planner" className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <FaClipboardList className="text-6xl text-[#F49C00] mx-auto mb-4" />
          <h2 className="text-4xl md:text-5xl font-bold text-[#001F5B] mb-4">
            Project Planner
          </h2>
          <p className="text-lg text-gray-600">
            Plan your entire painting project room by room
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left: Add Room Form */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-[#001F5B] mb-6">Add Room</h3>

              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Room Name (e.g., Master Bedroom)"
                  value={currentRoom.name}
                  onChange={(e) => setCurrentRoom({ ...currentRoom, name: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#F49C00] outline-none"
                />

                <div className="grid grid-cols-3 gap-3">
                  <input
                    type="number"
                    placeholder="Length (m)"
                    value={currentRoom.length || ''}
                    onChange={(e) => setCurrentRoom({ ...currentRoom, length: Number(e.target.value) })}
                    className="px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#F49C00] outline-none"
                  />
                  <input
                    type="number"
                    placeholder="Width (m)"
                    value={currentRoom.width || ''}
                    onChange={(e) => setCurrentRoom({ ...currentRoom, width: Number(e.target.value) })}
                    className="px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#F49C00] outline-none"
                  />
                  <input
                    type="number"
                    placeholder="Height (m)"
                    value={currentRoom.height || ''}
                    onChange={(e) => setCurrentRoom({ ...currentRoom, height: Number(e.target.value) })}
                    className="px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#F49C00] outline-none"
                  />
                </div>

                <select
                  value={currentRoom.paintType}
                  onChange={(e) => setCurrentRoom({ ...currentRoom, paintType: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#F49C00] outline-none"
                >
                  <option value="emulsion">Emulsion</option>
                  <option value="satin">Satin</option>
                  <option value="matt">Matt</option>
                  <option value="gloss">Gloss</option>
                  <option value="silk">Silk</option>
                </select>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Number of Coats: {currentRoom.coats}
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="3"
                    value={currentRoom.coats}
                    onChange={(e) => setCurrentRoom({ ...currentRoom, coats: Number(e.target.value) })}
                    className="w-full"
                  />
                </div>

                <motion.button
                  onClick={addRoom}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-[#F49C00] text-white py-3 rounded-xl font-bold hover:bg-[#FF8C00] transition"
                >
                  Add Room to Plan
                </motion.button>
              </div>
            </div>

            {/* Added Rooms List */}
            {rooms.length > 0 && (
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <h3 className="text-xl font-bold text-[#001F5B] mb-4">Rooms Added ({rooms.length})</h3>
                <div className="space-y-3">
                  {rooms.map((room, index) => {
                    const { litersNeeded, cost } = calculateRoomRequirements(room);
                    return (
                      <div key={index} className="p-4 bg-gray-50 rounded-xl flex items-center justify-between">
                        <div className="flex-1">
                          <div className="font-bold text-[#001F5B]">{room.name}</div>
                          <div className="text-sm text-gray-600">
                            {litersNeeded}L {room.paintType} • ₦{cost.toLocaleString()}
                          </div>
                        </div>
                        <button
                          onClick={() => removeRoom(index)}
                          className="text-red-500 hover:text-red-700 font-bold"
                        >
                          Remove
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Right: Project Summary */}
          <div className="space-y-6">
            {/* Budget Summary */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <FaMoneyBillWave className="text-3xl text-[#F49C00]" />
                <h3 className="text-2xl font-bold text-[#001F5B]">Budget Estimate</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Total Paint</span>
                  <span className="font-bold text-lg">{totals.totalLiters}L</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Total Rooms</span>
                  <span className="font-bold text-lg">{rooms.length}</span>
                </div>
                <div className="border-t pt-3 mt-3">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-lg">Estimated Cost</span>
                    <span className="font-bold text-2xl text-[#F49C00]">
                      ₦{totals.totalCost.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Materials Checklist */}
            {rooms.length > 0 && (
              <>
                <div className="bg-white rounded-2xl p-8 shadow-xl">
                  <h3 className="text-xl font-bold text-[#001F5B] mb-4">Materials Checklist</h3>
                  <div className="space-y-2">
                    {materials.map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <FaCheck className="text-green-500" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Timeline */}
                <div className="bg-white rounded-2xl p-8 shadow-xl">
                  <div className="flex items-center gap-3 mb-4">
                    <FaCalendar className="text-2xl text-[#F49C00]" />
                    <h3 className="text-xl font-bold text-[#001F5B]">Project Timeline</h3>
                  </div>
                  <div className="space-y-3">
                    {timeline.map((item, i) => (
                      <div key={i} className="flex justify-between items-center">
                        <span className="text-gray-700">{item.task}</span>
                        <span className="font-bold text-[#F49C00]">{item.days}d</span>
                      </div>
                    ))}
                    <div className="border-t pt-3">
                      <div className="flex justify-between items-center">
                        <span className="font-bold">Total Duration</span>
                        <span className="font-bold text-xl text-[#001F5B]">
                          {timeline.reduce((sum, item) => sum + item.days, 0)} days
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <motion.button
                    onClick={orderViaWhatsApp}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-[#25D366] to-[#20bd5a] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-3 shadow-lg btn-ripple"
                  >
                    <FaWhatsapp className="text-2xl" />
                    Order Materials via WhatsApp
                  </motion.button>

                  <motion.button
                    onClick={downloadPlan}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full border-2 border-[#001F5B] text-[#001F5B] py-4 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-[#001F5B] hover:text-white transition"
                  >
                    <FaDownload />
                    Download Full Plan
                  </motion.button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
