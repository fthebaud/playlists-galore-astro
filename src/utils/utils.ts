export function printDetails(nbTracks: number, date: number) {
  const dateStr = date.toString();
  const formattedDate = new Date(
    parseInt(dateStr.substring(0, 4)), // Year
    parseInt(dateStr.substring(4, 6)) - 1, // Month (0-based index)
    parseInt(dateStr.substring(6, 8)), // Day
  ).toLocaleDateString("fr-FR");
  return `${nbTracks} tracks, published ${formattedDate}`;
}
