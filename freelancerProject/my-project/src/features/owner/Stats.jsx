import React from 'react'
import Stat from './Stat';
import { HiCollection, HiCurrencyDollar, HiOutlineViewGrid } from 'react-icons/hi';

function Stats({ projects }) {

    const numOfProject = projects.length;
    const numOfAcceptedProject = projects.map((p) => p.status === 2).length
    const numOfProposals = projects.map((projct) => projct.proposals).length
    console.log(numOfProposals);

    return (
        <div className='flex flex-col w-full md:grid md:grid-cols-2 gap-8 whitespace-nowrap'>
            <Stat icon={<HiOutlineViewGrid className='w-10 h-10 md:w-16  md:h-16' />} title="تعداد پروژه ها" value={numOfProject} />
            <Stat icon={<HiCurrencyDollar className='w-10 h-10 md:w-16  md:h-16' />} title="پروژه های واگذار شده" value={numOfAcceptedProject} />
            <Stat icon={<HiCollection className='w-10 h-10 md:w-16  md:h-16' />} title="درخواست ها" value={numOfProposals} />

        </div>
    )
}

export default Stats
