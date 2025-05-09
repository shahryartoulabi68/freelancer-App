import React from 'react'
import useUser from '../../authentication/useUser';
import useUsers from '../useUsers';
import UserRow from './UserRow';
import Table from '../../../ui/Table';

function UsersTable() {
  const { isLoading, users } = useUsers()


  if (isLoading) return <p>در حال بارگذاری ....</p>
  if (!users.length) return <p>کاربری وجد ندارد</p>;

  return (
    <Table>
      <Table.Headr>
        <th className='w-auto p-2 text-secondary-600'>#</th>
        <th className='w-auto p-2 text-secondary-600'>نام</th>
        <th className='w-auto p-2 text-secondary-600'>ایمیل</th>
        <th className='w-auto p-2 text-secondary-600'>شماره مبایل</th>
        <th className='w-auto p-2 text-secondary-600'>نقش</th>
        <th className='w-auto p-2 text-secondary-600'>وضعیت</th>
        <th className='w-auto p-2 text-secondary-600'>عملیات</th>
      </Table.Headr>
      <Table.body>
        {users.map((user, index) => <UserRow key={user._id} user={user} index={index} />)
        }
      </Table.body>

    </Table>

  )
}

export default UsersTable
