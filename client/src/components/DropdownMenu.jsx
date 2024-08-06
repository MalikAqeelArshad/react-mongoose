import { useState } from 'react';
import { FaCaretDown, FaReact, FaVuejs } from 'react-icons/fa';
import { TbBrandNuxt, TbBrandNextjs } from 'react-icons/tb';

const DropdownMenu = () => {
	const [hidden, setHidden] = useState(true);
	const preventDefault = (e) => e.preventDefault();

	return (
		<div className='flex mx-2' onMouseEnter={() => setHidden(false)} onMouseLeave={() => setHidden(true)}>
			<div className='relative inline-block text-left'>
				<button
					className='p-2 text-white rounded-md'>
					More <FaCaretDown className='inline text-lg mb-1 ml-1' />
				</button>
				<div
					className={`${hidden ? 'hidden' : ''} overflow-hidden origin-top-right absolute right-0 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 animate-fadeIn`}>
					<a
						href='' onClick={preventDefault}
						className='block px-4 py-2 text-gray-300'>
						<FaReact className='inline text-xl mb-1 mr-1' /> React
					</a>
					<a
						href='' onClick={preventDefault} target="_blank"
						className='block px-4 py-2 text-gray-700 hover:bg-gray-100'>
						<TbBrandNextjs className='inline text-xl mb-1 mr-1' /> Next
					</a>
					<a
						href='' onClick={preventDefault} target="_blank"
						className='block px-4 py-2 text-gray-700 hover:bg-gray-100'>
						<FaVuejs className='inline text-xl mb-1 mr-1' /> Vue
					</a>
					<a
						href='' onClick={preventDefault} target="_blank"
						className='block px-4 py-2 text-gray-700 hover:bg-gray-100'>
						<TbBrandNuxt className='inline text-xl mb-1 mr-1' /> Nuxt
					</a>
				</div>
			</div>
		</div>
	);
};
export default DropdownMenu;