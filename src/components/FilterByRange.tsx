
const FilterByRange = () => {
    return (
        <div>
            <label htmlFor="">
                <span>Price Range</span>
            </label>
            <div>
                <input type="range" />
            </div>
            <div>
                <input type="text" value={42740} />
                <input type="text" value={3214556} />
            </div>
        </div>
    )
}

export default FilterByRange