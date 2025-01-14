import { Switch } from '@headlessui/react'

function Toggle({ enabled, onChange, Label }) {
    return (
        <div>
            <Switch.Group>
                <div className="flex gap-x-2">
                    <Switch.Label className="mb-4">
                        {Label}
                    </Switch.Label>
                    <Switch
                        checked={enabled}
                        onChange={onChange}
                        className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-[checked]:bg-blue-600"
                    >
                        <span className="size-4 -translate-x-1 rounded-full bg-white transition group-data-[checked]:-translate-x-6" />
                    </Switch>
                </div>
            </Switch.Group>
        </div>
    )
}

export default Toggle
