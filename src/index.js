import { produce } from "immer";

let book = { title: "Harry Potter", section: { data: "HSIJ"} };

function publish(book) {
  return produce(book, draftBook => {
    draftBook.section.data = "BOKA";
  });
}

let updated = publish(book);

console.log(book);
console.log(updated);