import mac from '../assets/mac.png';
import windows from '../assets/windows.png';
import linux from '../assets/linux.png';
import { useState, useEffect } from 'react';
import { detect } from 'detect-browser';
import Image from 'next/image';

// const UAParser = require('ua-parser-js');
// const parser = new UAParser();
// const result = parser.getResult();
// const OS = result.os.name;
// console.log(OS)


const Download = () =>{
    const [downloadObject, setDownloadObject] = useState({
        text: 'Download for Windows',
        image: windows,
        download: 'link'
    });

    useEffect(() => {
        const browser = detect();

        if (browser.os === 'windows') {
            setDownloadObject({
                text: 'Download for Windows',
                image: windows,
                download: 'link'
            })

        } else if (browser.os === 'Mac OS') {
            setDownloadObject({
                text: 'Download for Mac',
                image: mac,
                download: 'link'
            })
        } else if (browser.os === 'Linux') {
            setDownloadObject({
                text: 'Download for Linux',
                image: linux,
                download: 'link'
            })
        } else {
            setDownloadObject({
                text: 'Access on Computer To Download',
                image: mac,
                download: 'link'
            })
        }
      }, []);





    return(
        <div className='flex justify-center items-center m-30 mx-150 p-10 border-2'>
            <button className="bg-green-200 hover:bg-green-400 text-black-700 font-semibold hover:text-white py-2 px-4 border  hover:border-transparent rounded">
                {downloadObject.text}
            </button>
            <Image src={downloadObject.image} alt="download" id="download-image" className = "filter brightness-50 invert pb-2.5" height={50} />
        </div>
    )

}

export default Download;