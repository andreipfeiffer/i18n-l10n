import React from "react";

type Props = {
  value: Date;
  onChange(lang: Date): void;
};

export function TimePicker({ value, onChange }: Props) {
  const h = String(value.getHours()).padStart(2, "0");
  const m = String(value.getMinutes()).padStart(2, "0");
  const v = `${h}:${m}`;

  function setTime(time: string) {
    const [h, m] = time.split(":");
    value.setHours(+h);
    value.setMinutes(+m);
    onChange(new Date(value));
  }

  return (
    <input
      type="time"
      value={v}
      onChange={(e) => setTime(e.target.value)}
      style={{ marginRight: "1em" }}
    />
  );
}
