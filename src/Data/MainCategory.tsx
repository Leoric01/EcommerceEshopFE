export const mainCategory = [
  {
    name: "Men",
    categoryId: "men",
    level: 1,
    levelTwoCategory: [
      {
        name: "Topwear",
        categoryId: "men_topwear",
        parentCategoryId: "men",
        level: 2,
      },
      {
        name: "Bottomwear",
        categoryId: "men_bottomwear",
        parentCategoryId: "men",
        level: 2,
      },
    ],
  },
  {
    name: "Women",
    categoryId: "women",
    level: 1,
    levelTwoCategory: [
      {
        name: "Topwear",
        categoryId: "women_topwear",
        parentCategoryId: "women",
        level: 2,
      },
      {
        name: "Bottomwear",
        categoryId: "women_bottomwear",
        parentCategoryId: "women",
        level: 2,
      },
    ],
  },
  {
    name: "Home & Furniture",
    categoryId: "home_furniture",
    level: 1,
    levelTwoCategory: [
      {
        name: "Living Room Furniture",
        categoryId: "living_room_furniture",
        parentCategoryId: "home_furniture",
        level: 2,
      },
      {
        name: "Bedroom Furniture",
        categoryId: "bedroom_furniture",
        parentCategoryId: "home_furniture",
        level: 2,
      },
      {
        name: "Home Decor",
        categoryId: "home_decor",
        parentCategoryId: "home_furniture",
        level: 2,
      },
    ],
  },
  {
    name: "Electronics",
    categoryId: "electronics",
    level: 1,
    levelTwoCategory: [
      {
        name: "Mobile Phones",
        categoryId: "mobile_phones",
        parentCategoryId: "electronics",
        level: 2,
      },
      {
        name: "Laptops",
        categoryId: "laptops",
        parentCategoryId: "electronics",
        level: 2,
      },
      {
        name: "Television",
        categoryId: "television",
        parentCategoryId: "electronics",
        level: 2,
      },
    ],
  },
];
