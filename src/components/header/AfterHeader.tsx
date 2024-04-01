import { useSelector } from "react-redux"
import { RootState } from "../../redux/store"
import Breadcrumb from "./Bradcrumb"
import { useParams } from "react-router-dom"
const AfterHeader = () => {
    const params = useParams()
    const categories = useSelector((state: RootState) => state.categoriesList.catItems)
    const cat = categories.find(item => item.cat.toLowerCase() === params?.category?.toLowerCase())
    return (
        <div className="bg-white py-4 shadow-sm">
            <div className="max-w-[1290px] mx-auto px-4">
                <Breadcrumb />
                {
                    (!params?.sub_cat_name && !params?.productId) && <div className="mt-5">
                        <div className="mb-5">
                            <h2 className="text-2xl mb-3 text-[#3749bb]">{cat?.sub_category?.label}</h2>
                            <p className="text-sm">{cat?.sub_category?.desc}</p>
                        </div>

                        <div className="flex gap-2 flex-wrap">
                            {
                                cat?.sub_category?.list?.map((item: string, index: number) => {
                                    return (
                                        <a href={`${params?.category}/sub_cat/${item}`} className="capitalize border text-[13px] border-[#ddd] px-3 py-[7px] rounded-full hover:bg-[#3749BB] hover:text-white" key={index}>
                                            {item}
                                        </a>
                                    )
                                })
                            }
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default AfterHeader