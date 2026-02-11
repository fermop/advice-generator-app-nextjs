'use client';
import Image from 'next/image'
import { useState } from 'react'
import { getAdvice, AdviceData } from '@/services/adviceService'
import { Skeleton } from '@/components/ui/skeleton'

export default function Card() {
  const [ advice, setAdvice ] = useState<AdviceData | null>(null);
  const [ isLoading, setIsLoading ] = useState(false);

  const handleNewAdvice = async () => {
    setIsLoading(true)

    try {
      await new Promise(resolve => setTimeout(resolve, 1000)); 
      
      const newAdvice = await getAdvice()
      setAdvice(newAdvice)
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  const adviceDemo = {
    id: '117',
    advice: 'It is easy to sit up and take notice, what\'s difficult is getting up and taking action'
  }

  return (
    <div className={`${isLoading ? 'animate-pulse' : 'animate-fade-in-up'}`}>
      <article className='relative min-h-79 md:min-h-83 w-full max-w-135 bg-neutral-blue-900 text-center rounded-lg px-6 py-12 md:p-12 m-auto shadow-xl flex flex-col gap-6'>

        {/* ADVICE ID */}
        {isLoading ? (
          <Skeleton className='h-4 w-20 bg-neutral-blue-600/50 mx-auto' />
        ) : (
          <h2 className='text-primary-green-300 font-bold text-[.625rem] md:text-sm tracking-[.125rem]'>ADVICE # { advice ? advice.id : adviceDemo.id}</h2>
        )}

        {/* ADVICE */}
        {isLoading ? (
          <div className="flex flex-col gap-2 w-full items-center">
            <Skeleton className="h-8 w-full bg-neutral-blue-600/50" />
            <Skeleton className="h-8 w-2/3 bg-neutral-blue-600/50" />
            <Skeleton className="h-8 w-3/4 bg-neutral-blue-600/50" />
          </div>
        ) : (
          <p className='text-primary-blue-200 font-bold text-[24px] md:text-[1.75rem]'>"{ advice ? advice.advice : adviceDemo.advice}"</p>
        )}

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
          onClick={handleNewAdvice}
          disabled={isLoading}
          className={`absolute -bottom-8 left-1/2 -translate-x-1/2 w-fit p-5 bg-primary-green-300 rounded-full cursor-pointer duration-200 ${!isLoading && 'hover:shadow-neon hover:shadow-primary-green-300'}`}
          aria-label="Generate new advice"
        >
          <Image
            src='/images/icon-dice.svg'
            alt=''
            width={44}
            height={44}
            className={`w-6 h-6 ${isLoading && 'animate-pulse'}`}
          />
        </button>
      </article>
    </div>
  )
}
