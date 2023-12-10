import React, { useState, useEffect } from 'react';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // Main style file
import 'react-date-range/dist/theme/default.css'; // Theme CSS
import { loadData } from '../lib/storage';

// Function to create a date without the timezone offset
function createDateWithoutTimezoneOffset(dateString) {
  const date = new Date(dateString);
  const userTimezoneOffset = date.getTimezoneOffset() * 60000;
  return new Date(date.getTime() + userTimezoneOffset);
}

// This function generates a range of dates between two dates
const generateDateRange = (start, end) => {
  let dates = [];
  let currentDate = new Date(start.toISOString().split('T')[0]); // Remove the time part
  let endDate = new Date(end.toISOString().split('T')[0]);

  while (currentDate <= endDate) {
    dates.push(new Date(currentDate));
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return dates;
};

const Modal = ({ booking, onClose }) => {
    if (!booking) return null;

    // Validate that the booking has valid start and end dates
    if (!booking.startDate || !booking.endDate) {
        console.error('Booking has invalid start or end date', booking);
        return null; // Or some error handling here
    }

    // Create start and end dates without timezone offset
    const startDate = createDateWithoutTimezoneOffset(booking.startDate);
    const endDate = createDateWithoutTimezoneOffset(booking.endDate);

    // Check if the end date is before the start date
    if (endDate < startDate) {
        console.error('End date is before start date', booking);
        return null; // Or some error handling here
    }

    // Initialize selectedAgents as an array
    const [selectedAgents, setSelectedAgents] = useState([]);

    // Load agents
    const [agents, setAgents] = useState(loadData('agents') || []);

    useEffect(() => {
        // Populate the selectedAgents state based on booking.agentCounts
        const dateRange = generateDateRange(startDate, endDate);
        const initialSelectedAgents = dateRange.map((date, index) => {
            // Initialize a new array for each day with the size of the agent count for that day
            return new Array(booking.agentCounts[index] || 0).fill('');
        });
        setSelectedAgents(initialSelectedAgents);
    }, [booking, startDate, endDate]);

    const handleAgentSelection = (dayIndex, agentIndex, selectedAgentId) => {
      const updatedSelection = [...selectedAgents];
      updatedSelection[dayIndex][agentIndex] = selectedAgentId;
      setSelectedAgents(updatedSelection);
    };

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection',
    };

    return (
        <div className="modal">
            <div className="modal-content">
               
                <div className="calendar-container">
                <span className="close" onClick={onClose}>&times;</span>
                <h3>Booking ID: {booking.id}</h3>
                <DateRangePicker
                    ranges={[selectionRange]}
                    moveRangeOnFirstSelection={false}
                    rangeColors={["#3d91ff"]} // Your highlight color
                    showSelectionPreview={true}
                />
                 </div>
                 <div className="table-container">
                <table>
                  <tbody>
                    {selectedAgents.map((agentsForDay, dayIndex) => (
                      <tr key={dayIndex}>
                        {agentsForDay.map((_, agentIndex) => (
                          <td key={agentIndex}>
                            <select
                              value={selectedAgents[dayIndex][agentIndex]}
                              onChange={(e) =>
                                handleAgentSelection(dayIndex, agentIndex, e.target.value)
                              }
                            >
                              <option value="">Select Agent</option>
                              {agents.map((agent) => (
                                <option key={agent.id} value={agent.id}>
                                  {agent.name}
                                </option>
                              ))}
                            </select>
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
                </div>
            </div>
        </div>
    );
};

export default Modal;
