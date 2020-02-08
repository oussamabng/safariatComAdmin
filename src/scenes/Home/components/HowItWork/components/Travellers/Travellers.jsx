import React from 'react';
import Paragraph from '../Paragraph/Paragraph'
import {paragraphs} from './data';
import lolo from './lolo.png'
const Travellers = () => {
    return (
        <div className="bg-gray py-20 flex justify-between">
            <div className="w-2/3 pt-16 pl-20">
                {
                    paragraphs.map(paragraph => 
                        {
                        let i = 0;
                        let classname = `pl-${i}` ;
                        i+= 4;
                        console.log(classname)
                        
                        return (<Paragraph 
                            padding={classname}
                            key={paragraph.id}
                            title={paragraph.title}
                            body={paragraph.body}
                        /> )
                        
                    }  
                        )
                }
            </div>
            <div className="w-1/3">
                <img className="pt-12  z-3" src={lolo} alt=""/>
            </div>
        </div>
    );
}

export default Travellers;
