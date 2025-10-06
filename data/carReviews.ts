
import { CarReview } from '../types/CarReview';

export const carReviews: CarReview[] = [
  {
    id: '1',
    make: 'Tesla',
    model: 'Model 3',
    year: 2024,
    image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&h=600&fit=crop',
    rating: 4.5,
    summary: 'The Tesla Model 3 continues to set the standard for electric vehicles with impressive range, cutting-edge technology, and minimalist design.',
    fullReview: 'The 2024 Tesla Model 3 represents the pinnacle of electric vehicle engineering, combining impressive performance with environmental consciousness. The vehicle\'s sleek exterior design maintains Tesla\'s signature minimalist aesthetic while incorporating subtle refinements that enhance both aerodynamics and visual appeal.\n\nThe interior is dominated by a 15-inch touchscreen that controls virtually every aspect of the vehicle, from climate control to entertainment. While this approach may seem daunting to traditional car buyers, the interface is intuitive and responsive. The cabin is spacious and comfortable, with premium materials throughout.\n\nPerformance is where the Model 3 truly shines. The instant torque delivery characteristic of electric motors provides exhilarating acceleration, while the low center of gravity ensures confident handling around corners. The regenerative braking system takes some getting used to but becomes second nature with practice.\n\nThe Autopilot system continues to impress with its ability to handle highway driving scenarios, though full self-driving capabilities remain a work in progress. Over-the-air updates regularly add new features and improvements, making the car feel like it\'s constantly evolving.',
    specifications: {
      engine: 'Electric Motor',
      horsepower: '283 hp',
      fuelEconomy: '132 MPGe',
      transmission: 'Single-Speed',
      drivetrain: 'RWD',
      price: '$38,990'
    },
    pros: [
      'Excellent electric range',
      'Cutting-edge technology',
      'Impressive performance',
      'Low operating costs',
      'Over-the-air updates'
    ],
    cons: [
      'Minimalist interior may not appeal to everyone',
      'Build quality inconsistencies',
      'Limited service network',
      'Road noise at highway speeds'
    ],
    reviewerName: 'Sarah Johnson',
    reviewDate: '2024-01-15'
  },
  {
    id: '2',
    make: 'BMW',
    model: 'M3',
    year: 2024,
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=600&fit=crop',
    rating: 4.8,
    summary: 'The BMW M3 delivers exceptional performance and luxury, making it one of the best sports sedans on the market.',
    fullReview: 'The 2024 BMW M3 stands as a testament to the brand\'s commitment to the "Ultimate Driving Machine" philosophy. This latest iteration successfully balances raw performance with everyday usability, creating a vehicle that\'s equally at home on the track as it is navigating city streets.\n\nThe exterior design is bold and aggressive, with the controversial large kidney grille that has become BMW\'s signature. While polarizing, it undeniably gives the M3 a commanding presence on the road. The aerodynamic enhancements, including the carbon fiber hood and rear spoiler, aren\'t just for show – they contribute meaningfully to the car\'s high-speed stability.\n\nUnder the hood, the twin-turbocharged inline-six engine is a masterpiece of engineering. It delivers power in a linear, predictable manner while producing an intoxicating soundtrack that reminds you this is a proper M car. The eight-speed automatic transmission is lightning-quick and perfectly calibrated for both spirited driving and comfortable cruising.\n\nThe interior strikes an excellent balance between luxury and sportiness. The M-specific seats provide excellent support during aggressive driving while remaining comfortable for long journeys. The iDrive infotainment system is one of the best in the industry, offering intuitive controls and crisp graphics.',
    specifications: {
      engine: '3.0L Twin-Turbo I6',
      horsepower: '473 hp',
      fuelEconomy: '16/23 MPG',
      transmission: '8-Speed Automatic',
      drivetrain: 'RWD',
      price: '$73,800'
    },
    pros: [
      'Exceptional performance',
      'Luxurious interior',
      'Advanced technology',
      'Excellent handling',
      'Strong resale value'
    ],
    cons: [
      'Controversial styling',
      'Expensive options',
      'Firm ride quality',
      'Complex infotainment system'
    ],
    reviewerName: 'Michael Chen',
    reviewDate: '2024-01-20'
  },
  {
    id: '3',
    make: 'Toyota',
    model: 'Camry',
    year: 2024,
    image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&h=600&fit=crop',
    rating: 4.2,
    summary: 'The Toyota Camry offers reliability, comfort, and value in a well-rounded midsize sedan package.',
    fullReview: 'The 2024 Toyota Camry continues to be a benchmark in the midsize sedan segment, offering a compelling combination of reliability, efficiency, and value that has made it America\'s best-selling car for years running.\n\nThe exterior design has evolved significantly from the conservative Camrys of the past. The current generation features bold lines, an aggressive front grille, and sculpted body panels that give it a more dynamic appearance. While it may not turn heads like a sports car, it certainly looks more engaging than its predecessors.\n\nInside, the Camry offers a spacious and well-appointed cabin with quality materials throughout. The seats are comfortable and supportive, making long drives a pleasure. The infotainment system has improved dramatically in recent years, with a responsive touchscreen and intuitive menu structure. Apple CarPlay and Android Auto come standard, ensuring seamless smartphone integration.\n\nThe base four-cylinder engine provides adequate power for most driving situations while delivering excellent fuel economy. For those seeking more performance, the available V6 engine offers significantly more power without sacrificing too much efficiency. The CVT transmission, while not the most engaging, is smooth and contributes to the car\'s impressive fuel economy figures.',
    specifications: {
      engine: '2.5L 4-Cylinder',
      horsepower: '203 hp',
      fuelEconomy: '28/39 MPG',
      transmission: 'CVT',
      drivetrain: 'FWD',
      price: '$25,295'
    },
    pros: [
      'Excellent reliability',
      'Great fuel economy',
      'Spacious interior',
      'Strong safety ratings',
      'Good value for money'
    ],
    cons: [
      'CVT transmission feels sluggish',
      'Road noise at highway speeds',
      'Rear seat could be more comfortable',
      'Limited cargo space'
    ],
    reviewerName: 'Emily Rodriguez',
    reviewDate: '2024-01-10'
  },
  {
    id: '4',
    make: 'Ford',
    model: 'Mustang',
    year: 2024,
    image: 'https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?w=800&h=600&fit=crop',
    rating: 4.6,
    summary: 'The Ford Mustang remains an iconic American muscle car with modern performance and classic styling.',
    fullReview: 'The 2024 Ford Mustang successfully bridges the gap between classic American muscle car heritage and modern performance expectations. This latest generation maintains the iconic design cues that have made the Mustang instantly recognizable while incorporating contemporary technology and engineering advances.\n\nThe exterior design is evolutionary rather than revolutionary, retaining the long hood, short deck proportions that define the Mustang silhouette. The LED headlights and taillights provide a modern touch while maintaining the classic three-bar design that Mustang enthusiasts expect. The available performance packages add aggressive aerodynamic elements that enhance both form and function.\n\nInside, the Mustang offers a driver-focused cockpit with supportive seats and intuitive controls. The SYNC 4 infotainment system is a significant improvement over previous generations, offering crisp graphics and responsive touch controls. The available digital instrument cluster can be customized to display various performance metrics, adding to the sporty atmosphere.\n\nThe engine lineup caters to different performance preferences. The base EcoBoost four-cylinder provides surprising performance with excellent fuel economy, while the legendary V8 delivers the soundtrack and power that muscle car enthusiasts crave. Both engines are paired with excellent transmissions that enhance the driving experience.',
    specifications: {
      engine: '2.3L EcoBoost I4',
      horsepower: '315 hp',
      fuelEconomy: '21/32 MPG',
      transmission: '10-Speed Automatic',
      drivetrain: 'RWD',
      price: '$31,895'
    },
    pros: [
      'Iconic styling',
      'Strong performance',
      'Excellent transmission',
      'Good fuel economy (EcoBoost)',
      'Rich heritage and community'
    ],
    cons: [
      'Limited rear seat space',
      'Firm ride quality',
      'Road noise',
      'Limited cargo capacity'
    ],
    reviewerName: 'David Thompson',
    reviewDate: '2024-01-25'
  },
  {
    id: '5',
    make: 'Honda',
    model: 'Civic',
    year: 2024,
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&h=600&fit=crop',
    rating: 4.3,
    summary: 'The Honda Civic continues to be a compact car leader with excellent reliability, fuel economy, and practicality.',
    fullReview: 'The 2024 Honda Civic represents the latest evolution of one of the automotive industry\'s most successful compact cars. This generation successfully combines Honda\'s reputation for reliability and efficiency with a more mature, sophisticated design approach.\n\nThe exterior styling marks a departure from the polarizing design of the previous generation, adopting cleaner lines and a more conventional three-box sedan silhouette. The result is a car that looks more upscale and mature while maintaining a youthful energy. The LED lighting elements and available alloy wheels add visual interest without being overly flashy.\n\nThe interior is where the Civic truly shines. The cabin feels more spacious than the exterior dimensions would suggest, with excellent use of space throughout. The materials quality has improved significantly, with soft-touch surfaces and attractive trim pieces creating a premium atmosphere. The seats are comfortable and supportive, suitable for both daily commuting and longer road trips.\n\nUnder the hood, the naturally aspirated four-cylinder engine provides smooth, linear power delivery that\'s perfectly suited to the Civic\'s character. While not particularly exciting, it\'s refined and efficient, delivering excellent fuel economy figures. The CVT transmission, while not the most engaging, is well-calibrated and contributes to the car\'s impressive efficiency.',
    specifications: {
      engine: '2.0L 4-Cylinder',
      horsepower: '158 hp',
      fuelEconomy: '31/40 MPG',
      transmission: 'CVT',
      drivetrain: 'FWD',
      price: '$23,750'
    },
    pros: [
      'Excellent fuel economy',
      'Spacious interior',
      'Strong reliability record',
      'Good value proposition',
      'Comprehensive safety features'
    ],
    cons: [
      'CVT transmission lacks engagement',
      'Engine noise under acceleration',
      'Limited rear visibility',
      'Firm suspension tuning'
    ],
    reviewerName: 'Lisa Park',
    reviewDate: '2024-01-12'
  }
];
