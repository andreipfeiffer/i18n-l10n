import React from "react";

type Props = {
  value: number;
  onChange(lang: number): void;
  length?: number;
};

export function Input({ value, onChange, length = 8 }: Props) {
  return (
    <input
      type="number"
      value={value}
      maxLength={length}
      onChange={(e) => onChange(+e.target.value)}
      style={{ width: `${length + 2}em`, marginRight: "1em" }}
    />
  );
}
