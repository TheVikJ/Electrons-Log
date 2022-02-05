import React from 'react';

function Section({id, children}) {
    return (
        <section id={id ? id : ''} className={'h-screen flex flex-col w-full items-center justify-center'}>
            {children}
        </section>
    );
}

export default Section;
