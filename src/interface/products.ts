export interface Product {
  id: string;
  name: string;
  description: string[];
  productCode: number;
  category: {
    id: string;
    name: string;
  };
  brand: {
    id: string;
    name: string;
  };
  model: {
    id: string;
    name: string;
  };
  price: {
    current: number;
    regular: number;
    currency: string;
    discount: {
      percentage: number;
      startDate: string;
      endDate: string;
    };
  };
  images: {
    id: string;
    url: string;
    alt: string;
  }[];
  basicInformation: {
    name: string;
    value: string;
  }[];
  memorySpecifications: {
    name: string;
    value: string;
  }[];
  GraphicsSpecifications: {
    name: string;
    value: string;
  }[];
  warrantyInformation: {
    name: string;
    value: string;
  }[];
  listOfObjects: {
    name: string;
    description: string
  }[];
  variants: {
    id: string;
    name: string;
    options: string[];
  }[];
  inventory: {
    inStock: boolean;
    quantity: number;
  };
  ratings: {
    average: number;
    count: number;
  };
  reviews: {
    id: string;
    author: string;
    rating: number;
    title: string;
    content: string;
    date: string;
  }[];
  recentlyViewed: boolean;
  addedToCart: boolean;
}
