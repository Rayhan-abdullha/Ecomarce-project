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
      availability: Component;
      brand: Component;
      ram: Component;
      ssd: Component;
      hdd: Component;
      graphics: Component;
      series?: Component;
      processor_model?: Component;
      display_type?: Component;
      ram_size?: Component;
    };
    sub_category: SubCategory;
  }
  
