import useUser from './useUser'

function UserAvatar() {
    const { user, isLoading } = useUser()

    return (
        <div className='flex items-center gap-x-2 object-cover '>
            <img
                src="/user.jpg"
                alt=" user-account"
                className='w-6  md:w-8 md:h-8 object-cover overflow-hidden rounded-full'
            />
            <span className='text-sm text-secondary-700'>{user?.name}</span>
        </div>
    )
}

export default UserAvatar
