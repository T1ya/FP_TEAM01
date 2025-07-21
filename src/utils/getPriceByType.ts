// export function getPriceByType(type: string): string {
//   switch (type) {
//     case "hot":
//       return "3.56";
//     case "iced":
//       return "3.36";
//     default:
//       return "3.06";
//   }
// }
export function getPriceByType(type: string): number {
  switch (type) {
    case "hot":
      return 3.56;
    case "iced":
      return 3.36;
    default:
      return 3.06;
  }
}
