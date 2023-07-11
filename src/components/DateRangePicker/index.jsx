import moment from "moment";
import React, { forwardRef, useEffect } from "react";
import DatePicker from "react-datepicker";

const DateRangePicker = ({
  initalStart = null,
  initialEnd = null,
  onChange,
  ...rest
}) => {
  const [startDate, setStartDate] = React.useState(initalStart);
  const [endDate, setEndDate] = React.useState(initialEnd);

  useEffect(() => {
    if (onChange) {
      onChange(startDate, endDate);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startDate, endDate]);

  return (
    <>
      <div className="flex gap-2" {...rest}>
        <div>
          <DatePicker
            selected={startDate || null}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            maxDate={endDate}
            onChange={(date) => {
              setStartDate(date);
            }}
            customInput={<CustomDateButton />}
          />
        </div>
        <span> - </span>
        <div>
          <DatePicker
            selected={endDate || null}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            onChange={(date) => {
              setEndDate(date);
            }}
            customInput={<CustomDateButton />}
          />
        </div>
      </div>
    </>
  );
};

const CustomDateButton = forwardRef(({ value, onClick }, ref) => (
  <button
    className="transition-all hover:text-primary"
    onClick={onClick}
    ref={ref}
  >
    {value ? moment(value).format("DD/MM/YYYY") : "DD/MM/YYYY"}
  </button>
));

export default DateRangePicker;
