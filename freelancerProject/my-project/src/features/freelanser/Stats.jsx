import React from 'react'
import { HiCollection, HiCurrencyDollar, HiOutlineViewGrid } from 'react-icons/hi';
import Stat from '../owner/Stat';
import { persianNumber } from '../../utils/persianNumber';

function Stats({ proposals }) {

    const numOfproposal = proposals.length;
    const numOfAcceptedproposal = proposals.filter((p) => p.status === 2)
    const balance = numOfAcceptedproposal.reduce((acc, curr) => acc + curr.price, 0)



    return (
        <div className='flex flex-col w-full md:grid md:grid-cols-2 gap-8'>
            <Stat icon={<HiOutlineViewGrid className='w-20 h-20' />} title="درخواست ها" value={numOfproposal} />
            <Stat icon={<HiCurrencyDollar className='w-20 h-20' />} title="درخواست های تایید شده" value={numOfAcceptedproposal.length} />
            <Stat icon={<HiCollection className='w-20 h-20' />} title="کیف پول" value={persianNumber(balance)} />

        </div>
    )
}

export default Stats
