import React from 'react'
import RHFselect from '../../ui/RHFselect'
import { useForm } from 'react-hook-form'
import useChangeProposalStatus from '../projects/useChangeProposalStatus'
import { useQueryClient } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'


const options = [
  {
    label: "رد شده",
    value: 0
  },
  {
    label: "در انتظار تایید",
    value: 1
  },
  {
    label: "تایید شده",
    value: 2
  },
]


function ChangeProposalStatus({ proposalId, onClose }) {

  const { id } = useParams()
  const { register, handleSubmit } = useForm()
  const { changeProposalStatus, isUpdating } = useChangeProposalStatus()
  const queryClient = useQueryClient()

  const onSubmit = (data) => {
    changeProposalStatus({ proposalId, id, ...data }, {
      onSuccess: () => {
        onClose()
        queryClient.invalidateQueries({ queryKey: ["project", id] })
      }
    })
  }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <RHFselect
          label="تغییر وضعیت"
          name="status"
          options={options}
          register={register}
          required
        />
        <div>
          <button className='btn btn--primary w-full my-4' type='submit'>تایید</button>
        </div>
      </form>
    </div>
  )
}

export default ChangeProposalStatus
