import { CardProps } from "@/types";

export function chunkCards(
  cards: CardProps[],
): { cards: CardProps[]; rowNumber: number }[] {
  const rows: { cards: CardProps[]; rowNumber: number }[] = [];
  let index = 0;
  let rowNumber = 1;
  for (let rowSize = 1; index < cards.length; rowSize++) {
    rows.push({
      cards: cards.slice(index, index + rowSize),
      rowNumber: rowNumber,
    });
    index += rowSize;
    rowNumber++;
  }
  return rows;
}
