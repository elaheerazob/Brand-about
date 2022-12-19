import React from 'react';

const LastFooter = ({items}) => {
//    console.log(items);
    return (
        <div className='grid grid-cols-1 md:grid-cols-4  '>
           {items.map((d,i)=>{
            return(
                <div key={d + i}>
                    {d.map((dt,ii) =>{
                        return(
                            <div key={dt +ii }>
                               <p>{dt.title}</p>
                               <div>
                                {dt.items?.map((item) =>{
                                    return(
                                       <p>{item}</p>
                                    )
                                })}
                               </div>
                            </div>
                        
                        )
                    })}
                </div>
            )
           })}
        </div>
    );
};

export default LastFooter;