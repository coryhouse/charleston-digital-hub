// Centralized propTypes
import { shape, number, string } from "prop-types";

export const course = shape({
  id: number.isRequired,
  title: string.isRequired,
  slug: string.isRequired,
  authorId: number.isRequired,
  category: string.isRequired
});
