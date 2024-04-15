import HalfStar from "../components/HalfStar";
import Star from "../components/Star";

export function generateStarRating(rating) {
  const stars = [];
  for (let i = 0; i < Math.floor(rating); i++) {
    stars.push(<Star key={i} />);
  }
  if (rating % 1 !== 0) {
    stars.push(<HalfStar key={stars.length} />);
  }
  return stars;
}
