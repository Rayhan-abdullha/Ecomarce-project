interface Component {
    id: number;
    name: string;
    list: string[];
  }
  
  interface SubCategory {
    id: string;
    label: string;
    desc: string;
    list: string[];
  }
  
  export interface Category {
    id: number;
    cat: string;
    components: {
      [key: string]: Component | undefined
    },
    sub_category: SubCategory;
  }
  
