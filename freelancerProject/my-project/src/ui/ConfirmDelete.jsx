import React from 'react'

function ConfirmDelete({ projectName, onClose,onConfirm ,disabled}) {
    
    return (
        <div>
            <h2 className='font-bold text-secondary-900 mb-8'>
                آیا از حذف {projectName} مطمعن هستید؟
            </h2>
            <div className="flex items-center justify-between gap-6">
                <button
                    onClick={onClose}
                    disabled={disabled}
                    className='btn btn--primary p-3 flex-1'>لغو</button>
                <button
                    onClick={onConfirm}
                    disabled={disabled}
                    className='btn border-2 border-red-800 p-3 text-red-800 font-bold flex-1'>تایید</button>
            </div>

        </div>
    )
}

export default ConfirmDelete
