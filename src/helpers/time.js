export const sunrise = (timestamp) => new Date(timestamp * 1000)
  .toLocaleTimeString(navigator.language, {
    hour: '2-digit',
    minute: '2-digit',
  });

export const sunset = (timestamp) => new Date(timestamp * 1000)
  .toLocaleTimeString(navigator.language, {
    hour: '2-digit',
    minute: '2-digit',
  });