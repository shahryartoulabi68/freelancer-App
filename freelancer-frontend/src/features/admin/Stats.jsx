import { HiCurrencyDollar, HiOutlineViewGrid, HiUser } from "react-icons/hi"
import Stat from "../owner/Stat"


function Stats({ proposals, projects, users }) {

if(!proposals || !projects || !users)return <p>ناموجود</p>
    return (
        <div className='flex flex-col w-full md:grid md:grid-cols-2 gap-8'>
            <Stat icon={<HiUser className='w-14 h-14' />} title="کاربران" value={users.length} />
            <Stat icon={<HiCurrencyDollar className='w-14 h-14' />} title="درخواست " value={proposals.length} />
            <Stat icon={<HiOutlineViewGrid className='w-14 h-14' />} title="پروژه ها" value={projects.length} />
        </div>
    )
}

export default Stats