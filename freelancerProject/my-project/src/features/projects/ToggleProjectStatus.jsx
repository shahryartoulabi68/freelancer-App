import { Switch, SwitchLabel } from '@headlessui/react'
import React, { useState } from 'react'
import useToggleProjectStatus from './useToggleProjectStatus'
import Toggle from '../../ui/Toggle'

function ToggleProjectStatus({ project }) {
    const [enabled, setEnabled] = useState(project.status === "OPEN" ? true : false)
    const { isUpdateing, toggleProjectStatus } = useToggleProjectStatus()

    const handleToggle = () => {
        const status = project.status === "OPEN" ? "CLOSED" : "OPEN"
        toggleProjectStatus(
            {
                id: project._id,
                data: { status }
            },
            {
                onSuccess: () => setEnabled((priv) => !priv)
            }
        )

    }

    return (
        <div className='w-[5rem]'>
            {isUpdateing ? <p className='w-10 h-10'>در حال تغییر...</p> : (
                <Toggle
                    enabled={enabled}
                    onChange={handleToggle}
                    Label={project.status === "OPEN" ? "باز" : "بسته"} />
            )

            }
        </div >
    )
}

export default ToggleProjectStatus

