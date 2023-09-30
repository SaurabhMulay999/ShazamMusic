import { Error, Loader, SongCard } from '../components';
import { genres } from '../assets/constants';
import { useState } from 'react';

function Discover() {
    function selectHandler(e) {
        setGenra(e.target.value);
    }
    const [genra, setGenra] = useState("");
    return (
        <div className='flex flex-col'>
            <div className='w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10'>
                <h2 className='font-bold text-3xl text-white text-left'>Discover {genra}</h2>
                <select className='sm:mt-0 mt-5 p-3 rounded-lg bg-black text-gray-300 text-sm outline-none' onChange={selectHandler}>
                    {genres.map(function (label) {
                        return(
                            <option key={label.value} value={label.title}>{ label.title}</option>
                    )})}
                </select>

            </div>
            <div className='flex flex-wrap sm:justify-start justify-center gap-8'>
                {
                //showing the songs data here that we are goin to fetch from API
                }
                

                
            </div>
        </div>
    )
    
} 
export default Discover;
