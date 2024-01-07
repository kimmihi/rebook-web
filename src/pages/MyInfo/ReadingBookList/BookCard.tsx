import type { Book } from "types/book";

import Image from "components/Image";

interface Props {
  book: Book;
}

const BookCard = ({ book }: Props) => {
  return (
    <Image src={book.thumbnail} alt={book.title} width={100} height={100} />
  );
};

export default BookCard;
