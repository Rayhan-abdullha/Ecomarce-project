interface Category {
    id: string;
    name: string;
}

interface Brand {
    id: string;
    name: string;
}

interface Discount {
    percentage: number;
    startDate: string;
    endDate: string;
}

interface Price {
    current: number;
    currency: string;
    regular: number;
    discount: Discount;
}

interface Image {
    id: string;
    url: string;
    alt: string;
}

interface Variant {
    id: string;
    name: string;
    options: string[];
}

interface Inventory {
    inStock: boolean;
    quantity: number;
}

interface Rating {
    average: number;
    count: number;
}

interface Review {
    id: string;
    author: string;
    rating: number;
    title: string;
    content: string;
    date: string;
}

interface BasicInformation {
    name: string;
    value: string;
  }
  
  interface MemorySpecification {
    name: string;
    value: string;
  }
  
  interface GraphicsSpecification {
    name: string;
    value: string;
  }
  
  interface WarrantyInformation {
    name: string;
    value: string;
  }
  
  interface ListOfObject {
    name: string;
    description: string;
    "PCIe 4.0 & 5.0"?: string; // Optional since it's not present in all objects
  }

  export interface Product {
    id: string;
    name: string;
    productCode: number;
    description: string[];
    category: Category;
    brand: Brand;
    model: {id: string, name: string}
    price: Price;
      images: Image[];
      basicInformation: BasicInformation[];
    memorySpecifications: MemorySpecification[];
    GraphicsSpecifications: GraphicsSpecification[];
    warrantyInformation: WarrantyInformation[];
    listOfObjects: ListOfObject[];
    variants: Variant[];
    inventory: Inventory;
    ratings: Rating;
    reviews: Review[];
    recentlyViewed: boolean;
    addedToCart: boolean;
}
