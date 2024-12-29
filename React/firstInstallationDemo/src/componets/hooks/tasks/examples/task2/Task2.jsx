import React from 'react'
import useVisibility from './useVisibility'

const Task2 = () => {
    let{visibility,changeVisibility}=useVisibility();
    return(
        <div className='flex items-center  h-[100vh] flex-col gap-5 p-5'>

            {(visibility?<div className='w-[60vw] h-[60vh] bg-slate-100 p-10 shadow-md rounded-lg'>
                <p className='text-xl font-serif'>
                India is a vast and diverse country located in South Asia, known for its rich cultural heritage, historical significance, and dynamic economy. It is the seventh-largest country by land area and the second-most populous, with over 1.4 billion people. India is a federal republic with 28 states and 8 union territories, each with its unique traditions, languages, and customs.
                The country has a deep spiritual and philosophical history, with major religions like Hinduism, Buddhism, Jainism, and Sikhism originating here, alongside a significant presence of Islam, Christianity, and other religions. India is also renowned for its diverse languages, with more than 1,600 languages spoken, although Hindi and English are the official languages.
                India's history spans thousands of years, from the ancient Indus Valley Civilization to the powerful Maurya and Gupta empires, followed by the Mughal era and the British colonial period. Independence in 1947 marked the beginning of modern India, a country that has made significant progress in fields like technology, medicine, and space exploration while maintaining its deep cultural traditions.
                Economically, India is one of the world’s fastest-growing major economies, with a burgeoning tech industry, a robust agricultural sector, and a large and young workforce. The country has become a global hub for information technology services, outsourcing, and innovation.
                India's landscapes range from the snow-capped peaks of the Himalayas in the north to the tropical beaches in the south, offering a rich diversity of flora and fauna. The country is also famous for its vibrant festivals, such as Diwali, Holi, Eid, and Christmas, which celebrate the nation’s diversity.
                India is a blend of the ancient and the modern, offering a fascinating mix of tradition, innovation, and transformation.
                </p>
            </div>:<h1 className='font-serif'>CLICK TO SEE</h1>)}
            <button className='text-white bg-purple-500 rounded-md px-4 py-2 text-xl' onClick={changeVisibility}>{visibility ? 'Hide' : 'Show'}</button>
        </div>
    )
    
}

export default Task2