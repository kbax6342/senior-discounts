import React from 'react'
import Footer from '../components/Footer/Footer'

export default function About() {
    return (
        <div >
            <div className='w-[600px] mx-auto flex flex-col  '>
                <h1 className='text-5xl font-bold mulisha text-left'>About Page</h1>
                <p className='text-2xl mt-3 text-gray-400 text-left'>This is a page about the senior citizen discount company</p>
            </div>


            <div className='w-[600px] mx-auto flex flex-col h-screen justify-between '>
                <section>
                <div className='my-5 leading-loose text-left'>
                    This is a website about senior citizen discounts. The reason I decided to write this is because you know they've been fighting about senior citizen parking spaces.

                    And many states have now given up on giving those same spaces to senior citizens in their state.

                    This is a nationwide thing, not just local issues.

                    But one day I wanted to go to my girlfriend's grocery store in Ypsilanti, Michigan, and get her her groceries.

                </div>

                <div className='my-5 leading-loose text-left'>
                    There is only one store there, and it is about 15 miles away from her home.

                    I figured out how much gas I'd be saving by just getting the weekly groceries for her, going to her apartment, bringing her some clean clothes and groceries, and then heading back home.

                    I wasn't going to really do that, but I didn't want to have to pay to park, nor did I want to have to pay a fee. So I look up some senior citizen discounts and decided to make a website showcasing them.
                </div>
                </section>

           

                <Footer className=" h-10" />
            </div>



        </div>
    )
}
