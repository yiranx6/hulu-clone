// structure deconstruction
function HeaderItem({Icon, title}) {
    return (
        <div className='flex flex-col items-center cursor-pointer 
        group w-12 sm:w-20 text-gray-300 hover:text-white'>
            <Icon className ="text-gray  h-8 mb-1 group-hover:text-white  
            group-hover:animate-bounce"/>
            <h2 className='opacity-0 group-hover:opacity-100 
            tracking-widest'>
                {title}
                </h2>
        </div>
    )
}

export default HeaderItem
