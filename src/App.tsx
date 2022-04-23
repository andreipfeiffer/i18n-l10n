import React from "react";

import { useTranslation, getI18n } from "react-i18next";

import { LanguageSelector } from "./components/LanguageSelector";
import { Input } from "./components/Input";
import { DatePicker } from "./components/DatePicker";
import { TimePicker } from "./components/TimePicker";

function App() {
  const { t, i18n } = useTranslation();
  const { language } = i18n;

  const [nr, setNr] = React.useState(0);
  const [date, setDate] = React.useState(new Date());
  const [total, setTotal] = React.useState(1000);

  const name = "tim.js";

  return (
    <div>
      <LanguageSelector
        lang={language}
        onChange={(lang) => i18n.changeLanguage(lang)}
      />

      <p>{t("hello", { to: name })}</p>
      {/* <p>Hello everybody</p> */}

      <fieldset>
        <Input value={nr} onChange={setNr} length={3} />
        <strong>{t("fruit", { count: nr })}</strong>
        {/* <strong>2 fruits</strong> */}
      </fieldset>

      <fieldset>
        <DatePicker value={date} onChange={setDate} />
        <strong>{formatDate(date)}</strong>
        {/* <strong>Friday, Sep 18 2020</strong> */}
      </fieldset>

      <fieldset>
        <TimePicker value={date} onChange={setDate} />
        <strong>{formatTime(date)}</strong>
        {/* <strong>11:30 PM</strong> */}
      </fieldset>

      <fieldset>
        Total: <Input value={total} onChange={setTotal} />
        <strong>{formatCurrency(total)}</strong>
        {/* <strong>{total} EUR</strong> */}
      </fieldset>
    </div>
  );
}

function formatDate(date: Date) {
  return new Intl.DateTimeFormat(getI18n().language, {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(date);
}

function formatTime(date: Date) {
  return new Intl.DateTimeFormat(getI18n().language, {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  }).format(date);
}

function formatCurrency(value: number) {
  return new Intl.NumberFormat(getI18n().language, {
    style: "currency",
    currency: "EUR",
  }).format(value);
}

export default App;
