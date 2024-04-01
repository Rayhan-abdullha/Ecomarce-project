interface SubCategory {
    id: string;
    label: string;
    desc: string;
    list: string[];
}  
export interface Category {
    id: number;
    cat: string;
    components: {[key: string]: {id: number , name: string, list: string[]}}
    sub_category: SubCategory;
  }

