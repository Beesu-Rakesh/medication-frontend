import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "/src/App.css"; // Custom styling

const MedicationCalendar = ({ markedDates }) => {
  const tileClassName = ({ date, view }) => {
    if (view === "month") {
      const iso = date.toISOString().split("T")[0];
      if (markedDates?.taken?.includes(iso)) return "taken";
      if (markedDates?.missed?.includes(iso)) return "missed";
      if (iso === new Date().toISOString().split("T")[0]) return "today";
    }
  };

  return (
    <div className="calendar-container">
      <h3>Medication Calendar</h3>
      <Calendar tileClassName={tileClassName} />
      <div className="legend">
        <span className="dot green"></span> Taken
        <span className="dot red"></span> Missed
        <span className="dot blue"></span> Today
      </div>
    </div>
  );
};

export default MedicationCalendar;
