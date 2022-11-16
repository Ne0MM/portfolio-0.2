import React from 'react'

type Props = {}

export default function Projects({}: Props) {
    const Projects = [1, 2, 3]
  return (
    <div className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row
    max-w-full justify-evenly mx-auto items-center z-0 '>
        <h3 className="absolute top-24 uppercase tracking-[20px] text-[#00A1D5]">
            Projetos
        </h3>

        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x
        snap-mandatory z-20 '>
            {Projects.map((project, i) => (
                <div className='w-screen flex-shrink-0 snap-center flex flex-col
                space-y-5 items-center justify-center p-20 md:p-44 h-screen '>
                    <img src='' alt=''/>
                    <div className='space-y-10 px-0 md:px-10 max-w-6xl '>
                        <h4 className='text-4xl font-semibold text-center text-[#00A1D5]'>
                            <span className='text-[#00BE67]'>
                                Case Study {i+1} of {Projects.length}: 
                            </span>
                            UPS clone
                        </h4>

                        <p className='text-lg text-center md:text-left'>
                            Praesent molestie sem in lorem placerat suscipit vitae id magna. 
                            Orci varius natoque penatibus et magnis dis parturient montes, nascetur 
                            ridiculus mus. Sed ut gravida turpis. Sed imperdiet, odio id dignissim 
                            faucibus, lectus erat auctor neque, nec suscipit nunc nisi vel ante. Vivamus
                            lacinia congue fermentum. Nullam non condimentum justo, tincidunt hendrerit 
                            leo. Praesent eu mi lectus. Etiam pulvinar sapien sed nulla sagittis, egestas
                            accumsan orci interdum. Quisque maximus mollis velit ac iaculis. Aliquam sodales
                            erat sit amet leo lacinia laoreet. Mauris rhoncus fringilla risus, sed hendrerit 
                            urna rutrum sit amet. Suspendisse at arcu gravida nibh mattis semper eu id lectus.
                            Duis vulputate erat vitae dictum aliquam. Class aptent taciti sociosqu ad litora
                            torquent per conubia nostra,
                            per inceptos himenaeos. Aenean sodales venenatis ex sed aliquet.
                        </p>
                    </div>
                </div>
            ))}

        </div>

        <div className='w-full absolute top-[30%] bg-gradient-to-r from-[#00A1D5] via-[#00be67] to-[#f500bd] left-0 h-[500px] -skew-y-12 
        opacity-20 blur-3xl '>
        </div>
    </div>
  )
}