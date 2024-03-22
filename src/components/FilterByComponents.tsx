import { useState } from 'react';
import data from '../db/filterByComponentsBrand.json';
import { filterPropertyType } from '../interface';
interface PropTypes {
    setChecke: React.Dispatch<React.SetStateAction<filterPropertyType>>
    check: filterPropertyType
}
const FilterByComponents = ({ setChecke, check }: PropTypes) => {
    const [components] = useState<{ [key: string]: { id: number; name: string; list: string[] } }>(data.components);

    function filterProducts(event: React.ChangeEvent<HTMLInputElement>) {
        const checked = event.target.checked;
        const name = event.target.name;
        const brand = event.target.getAttribute('data-content')

        setChecke({ ...check, [brand as string]: { ...check[brand as string], [name]: checked } });
    }
    return (
        <div>
            {Object.keys(components).map((key, index) => (
                <div key={index} className="bg-white p-4 mb-4">
                    <h2 className="font-semibold mb-2">{components[key].name}</h2>
                    <div className="mb-2">
                        {components[key].list.map((item, index) => (
                            <label key={index} className="block">
                                <input onChange={filterProducts} data-content={key} name={item.toLowerCase()} type="checkbox" className="mr-2" /><small>{item}</small>
                            </label>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FilterByComponents;
