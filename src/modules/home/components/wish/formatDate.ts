function getMonthAbbreviation(month) {
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  return months[month];
}

export function formatDate(dateString) {
  const date = new Date(dateString);
  const day = date.getDate();
  const monthAbbreviation = getMonthAbbreviation(date.getMonth());
  const year = date.getFullYear();
  return `${day} ${monthAbbreviation} ${year}`;
}
