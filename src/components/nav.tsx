import Logo from '../assets/logo-text.png'
export default function Nav() {
    
    return ( 
<nav className="flex justify-between bg{#FFFFFF} container mx-auto">
    <img className='max-w-100' src= {Logo} alt="" />

    <ul className="flex justify-between gap-5">
        <li className='text-[#db2777]'>Home</li>
        <li>Technologies</li>
        <li>Projects</li>
        <li>About </li>
        <li>Contact</li>
    </ul>
   <div>
    <button className=''>Sign In</button>
    <button className="btn btn-secondary rounded-3xl">Sign Up</button>
    </div>
</nav>
    )
}