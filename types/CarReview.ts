
export interface CarReview {
  id: string;
  make: string;
  model: string;
  year: number;
  image: string;
  rating: number;
  summary: string;
  fullReview: string;
  specifications: {
    engine: string;
    horsepower: string;
    fuelEconomy: string;
    transmission: string;
    drivetrain: string;
    price: string;
  };
  pros: string[];
  cons: string[];
  reviewerName: string;
  reviewDate: string;
}
