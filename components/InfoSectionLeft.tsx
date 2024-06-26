import Image from 'next/image'
import React from 'react'

interface InfoSectionProps {
    imageUrl: string;
    title: string;
    listItems: string[];
    spanHeading: string;
}

const InfoSectionLeft: React.FC<InfoSectionProps> = ({ imageUrl, title, listItems, spanHeading }) => {
    return (
        <div className="grid md:grid-cols-12 grid-cols-1 gap-10 my-8 items-center">
            <div className="md:flex hidden col-span-5 p-4">
                <Image src={imageUrl} alt={title} width={400} height={400} className="w-full h-[400px] object-cover rounded-lg" />
            </div>
            <div className="col-span-7 p-4">
                <h2 className="text-[36px] font-garamond font-semibold mb-4">
                    <span className="font-bold">{spanHeading}</span>
                </h2>
                <ul className="list-disc list-inside">
                    {listItems.map((item, index) => (
                        <li key={index} className="mb-2">{item}</li>
                    ))}
                </ul>
            </div>
            <div className="md:hidden flex col-span-5 p-4">
                <Image src={imageUrl} alt={title} width={400} height={400} className="w-full h-[400px] object-cover rounded-lg" />
            </div>
        </div>
    )
}

export default InfoSectionLeft