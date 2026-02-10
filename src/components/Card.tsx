import Image from 'next/image'

const advice = {
  id: '117',
  quote: 'It is easy to sit up and take notice, what\'s difficult is getting up and taking action'
}

export default function Card() {
  return (
    <div className='animate-fade-in-up'>
      <article className='relative min-h-79 md:min-h-83 w-full max-w-135 bg-neutral-blue-900 text-center rounded-lg px-6 py-12 md:p-12 m-auto shadow-xl flex flex-col gap-6'>
        <h2 className='text-primary-green-300 font-bold text-[.625rem] md:text-sm tracking-[.125rem]'>ADVICE # {advice.id}</h2>
        <p className='text-primary-blue-200 font-bold text-[24px] md:text-[1.75rem]'>"{advice.quote}"</p>
        <Image
            src='/images/pattern-divider-mobile.svg'
            alt=''
            width={44}
            height={44}
            className="w-full h-4 md:hidden"
          />
          <Image
            src='/images/pattern-divider-desktop.svg'
            alt=''
            width={44}
            height={44}
            className="w-full h-4 hidden md:block"
          />
        <button 
          className='absolute -bottom-8 left-1/2 -translate-x-1/2 w-fit p-5 bg-primary-green-300 rounded-full cursor-pointer hover:shadow-neon hover:shadow-primary-green-300 duration-200'
          aria-label="Generate new advice"
        >
          <Image
            src='/images/icon-dice.svg'
            alt=''
            width={44}
            height={44}
            className="w-6 h-6"
          />
        </button>
      </article>
    </div>
  )
}
