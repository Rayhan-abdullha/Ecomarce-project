import { filterPropertyType } from '../../interface';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { useParams } from 'react-router-dom';
import { Category } from '../../interface/categories';
import FilterComponentItem from './FilterComponentItem';

interface PropTypes {
    setChecke: React.Dispatch<React.SetStateAction<filterPropertyType>>
    check: filterPropertyType
}
const FilterByComponents = ({ setChecke, check }: PropTypes) => {
    const url = useParams()
    const productCat = useSelector((state: RootState) => state.categoriesList.catItems)
    const subCat = productCat.find((item: Category) => item.cat.toLowerCase() === url.category?.toLowerCase())

    function filterProducts(event: React.ChangeEvent<HTMLInputElement>) {
        const checked = event.target.checked;
        const name = event.target.name;
        const brand = event.target.getAttribute('data-content')

        setChecke({
            ...check,
            [brand as string]: {
                ...check[brand as string],
                [name]: checked
            }
        });
    }


    return (
        <div>
            {Object.keys(subCat?.components ?? {}).map((key: string, index: number) => (
                <div key={index} className="mb-2">
                    <FilterComponentItem cat={subCat} name={key} filterProducts={filterProducts} />
                </div>
            ))}
        </div>
    );
};

export default FilterByComponents;
