import { useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import { Category } from '../../interface/categories'

interface PropsType {
    filterProducts: (event: React.ChangeEvent<HTMLInputElement>) => void
    name: string
    cat: Category | undefined
}
function FilterComponentItem({ filterProducts, name, cat }: PropsType) {
    const [toggle, setToggle] = useState<boolean>(false)
    const handleToggle = () => {
        setToggle(prev => !prev)
    }
    return (
        <>
            <div className='mb-[2px] bg-white px-4 py-3 relative'>
                <h2 className="font-semibold text-[17px]">{cat?.components[name]?.name}</h2>
                <div className="absolute right-2 top-4" onClick={handleToggle}>
                    {
                        toggle ? <IoIosArrowDown className="cursor-pointer" /> : <IoIosArrowUp className="cursor-pointer" />
                    }
                </div>
            </div>

            {
                toggle && <div className="flex flex-col gap-3 bg-white shadow-sm p-4">
                    {cat?.components[name]?.list.map((item: string, index: number) => (
                        <label key={index} className="block">
                            <input className="mr-2" onChange={filterProducts} data-content={name} name={item.toLowerCase()} type="checkbox" /><small className='text-[15px]'>{item}</small>
                        </label>
                    ))}
                </div>
            }
        </>
    )
}

export default FilterComponentItem