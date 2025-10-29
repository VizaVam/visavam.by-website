export const schedule = {
    weekdays: [
      { start: 9, end: 12, type: "promo" }, 
      { start: 14, end: 14, type: "insurance" },
      { start: 17, end: 18, type: "insurance" },
      { start: 20, end: 23, type: "promo" },
    ],
    weekends: [
      { start: 11, end: 12, type: "promo" },
      { start: 14, end: 15, type: "insurance" },
      { start: 18, end: 23, type: "promo" },
    ],
    always: [
      { start: 0, end: 23, type: "always" }
    ]  };