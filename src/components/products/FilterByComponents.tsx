import { filterPropertyType } from '../../interface';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { useParams } from 'react-router-dom';
import { Category } from '../../interface/categories';

interface PropTypes {
    setChecke: React.Dispatch<React.SetStateAction<filterPropertyType>>
    check: filterPropertyType
}
const FilterByComponents = ({ setChecke, check }: PropTypes) => {
    const url = useParams()
    const productCat = useSelector((state: RootState) => state.categoriesList.catItems)
    const pd = productCat.find((item: Category) => item.cat.toLowerCase() === url.category?.toLowerCase())

    function filterProducts(event: React.ChangeEvent<HTMLInputElement>) {
        const checked = event.target.checked;
        const name = event.target.name;
        const brand = event.target.getAttribute('data-content')

        setChecke({
            ...check,
            [brand as string]: { ...check[brand as string], [name]: checked }
        });
    }
    return (
        <div>
            {Object.keys(pd?.components || {})?.map((key: string, index: number) => (
                <div key={index} className="bg-white p-4 mb-2 shadow-sm">
                    <h2 className="font-semibold mb-2 text-[17px]">{pd?.components[key]?.name}</h2>
                    <div className="flex flex-col gap-3">
                        {pd?.components[key]?.list.map((item: string, index: number) => (
                            <label key={index} className="block">
                                <input className="mr-2" onChange={filterProducts} data-content={key} name={item.toLowerCase()} type="checkbox" /><small className='text-[15px]'>{item}</small>
                            </label>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FilterByComponents;
