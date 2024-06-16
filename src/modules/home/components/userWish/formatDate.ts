function getMonthAbbreviation(month: number): string {
  const months: string[] = [
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

export function formatDate(dateString: string): string {
  const date: Date = new Date(dateString);
  const day: number = date.getDate();
  const monthAbbreviation: string = getMonthAbbreviation(date.getMonth());
  const year: number = date.getFullYear();
  return `${day} ${monthAbbreviation} ${year}`;
}
