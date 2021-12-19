function ChangeUsername({user,setUserData, isUserUpdating, userError}) {
    const setUsername = () =>{
        const username = prompt(
            `Enter your new Username (current: ${user.getUsername()})`
        )
        if(!username) return;
        setUserData({
            username,
        })
    }
    return (
        <div className='text-sm absolute top-5 right-5'>
            <button disabled={isUserUpdating} 
            className="hover:text-pink-700"
            onClick={setUsername}
            >Change your username</button>
        </div>
    )
}

export default ChangeUsername
