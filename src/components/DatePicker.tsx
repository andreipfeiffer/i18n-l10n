import React from "react";

type Props = {
  value: Date;
  onChange(lang: Date): void;
};

export function DatePicker({ value, onChange }: Props) {
  const y = value.getFullYear();
  const m = String(value.getMonth() + 1).padStart(2, "0");
  const d = String(value.getDate()).padStart(2, "0");
  const v = `${y}-${m}-${d}`;

  return (
    <input
      type="date"
      value={v}
      onChange={(e) => onChange(new Date(e.target.value))}
      style={{ marginRight: "1em" }}
    />
  );
}
