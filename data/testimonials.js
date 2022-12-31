const testimonials = [
  {
    name: "Scott",
    review:
      "Very impressed with the speedy services they provided. Within a day my air conditioner was back up and running. Grateful for their professional services.",
    stars: 5,
  },
  {
    name: "Maria",
    review:
      "All Solutions was excellent to work with! They were able to repair my unit without having to replace the whole thing! I’m so happy that I went with them! Highly recommend.",
    stars: 5,
  },
  {
    name: "Ryan",
    review:
      "Such a great deal for the quality of services provided! I’m ecstatic about my choice going with All Solutions. I’m going to tell all of my friends!",
    stars: 4,
  },
  {
    name: "Igor",
    review:
      "I had trouble with my air conditioning... All Solutions pin pointed the problem and fixed it for a very reasonable price. I highly recommend them!",
    fullReview:
      "I had trouble with my air conditioning as soon as the temperature started to hit 100 deg. I called around and each business I spoke with wanted to change my whole system. All Solutions pin pointed the problem and fixed it for a very reasonable price. I highly recommend them!",
    stars: 5,
  },
  {
    name: "Ceridwen",
    review:
      "Great service. They changed the thermostats and blower to get my AC back up and running the same day! I appreciated that they took the time to fix the problem...",
    fullReview:
      "Great service. They changed the thermostats and blower to get my AC back up and running the same day! I appreciated that they took the time to see what the problem was and saved me a ton of money, by fixing my existing AC, instead of having to get a whole new system.",
    stars: 5,
  },
];

testimonials.forEach((obj, index) => (obj.id = index + 1));

export default testimonials;
