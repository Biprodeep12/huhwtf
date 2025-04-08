import Image from 'next/image';

export default function HomeSec() {
  return (
    <>
      <section className='bg-[#dafada] w-full py-[50px] items-center justify-center flex flex-row flex-wrap gap-[25px] px-[10px]'>
        <div className='max-w-[420] w-full flex flex-col'>
          <div className='flex flex-row items-center gap-3'>
            <Image
              src='/studymunchlogo2.png'
              width={80}
              height={80}
              alt='Logo'
            />
            <div className='text-[#04285a] text-[2rem] font-bold'>
              StudyMunch
            </div>
          </div>
          <div className='text-[#555] text-[1.8rem] my-[20px]'>
            Get smarter, faster. Your personalized path to academic success
            starts here with StudyMunch
          </div>
          <div>
            <button className='bg-[#04285a] py-3 px-5 font-bold rounded-xl text-xl hover:bg-[#476690] cursor-pointer'>
              Get Started
            </button>
          </div>
        </div>
        <div className='px-[30px] flex flex-row gap-[30px] bg-white min-h-[400px] rounded-xl shadow pt-[50px] pb-[90px] flex-wrap justify-center'>
          <Image src='/studying.jpg' alt='studing' width={260} height={200} />
          <Image src='/studying.jpg' alt='studing' width={260} height={200} />
        </div>
      </section>
      <section className='flex flex-col py-[50px] px-[10px] bg-white items-center'>
        <div className=' max-w-[900px] mt-[20px] flex flex-col  gap-[40px]'>
          <div className='text-center text-[40px] text-[#04285a] font-bold'>
            Tired of Study Chaos? Unleash Your Academic Superpower with Our
            Expanded Features
          </div>
          <div className='flex flex-col items-center'>
            <div className='text-black text-center text-[17px]'>
              Remember those frantic late-night cram sessions? The scattered
              notes? The feeling of being overwhelmed? StudyMunch here with
              it&apos;s unique features is your strategic advantage to turn
              study sessions into engaging quests with exciting milestones.
            </div>
            <div className='w-full p-[10px] flex flex-row flex-wrap items-center justify-center gap-[20px]'>
              <div className='bg-gray-100 flex flex-col max-w-[280px] w-full items-center rounded-xl text-black py-[20px] px-[15px] gap-3'>
                <Image
                  src='/dash.jpg'
                  alt='dash'
                  className='rounded-[100%]'
                  width={145}
                  height={145}
                />
                <div className='font-bold'>Your Quest Log</div>
                <div className='text-center'>
                  Record your tasks and visualize your journey.
                </div>
              </div>
              <div className='bg-gray-100 flex flex-col max-w-[280px] w-full items-center rounded-xl text-black py-[20px] px-[15px] gap-3'>
                <Image
                  src='/dash.jpg'
                  alt='dash'
                  className='rounded-[100%]'
                  width={145}
                  height={145}
                />
                <div className='font-bold'>Your Quest Log</div>
                <div className='text-center'>
                  Record your tasks and visualize your journey.
                </div>
              </div>
              <div className='bg-gray-100 flex flex-col max-w-[280px] w-full items-center rounded-xl text-black py-[20px] px-[15px] gap-3'>
                <Image
                  src='/dash.jpg'
                  alt='dash'
                  className='rounded-[100%]'
                  width={145}
                  height={145}
                />
                <div className='font-bold'>Your Quest Log</div>
                <div className='text-center'>
                  Record your tasks and visualize your journey.
                </div>
              </div>
              <div className='bg-gray-100 flex flex-col max-w-[280px] w-full items-center rounded-xl text-black py-[20px] px-[15px] gap-3'>
                <Image
                  src='/dash.jpg'
                  alt='dash'
                  className='rounded-[100%]'
                  width={145}
                  height={145}
                />
                <div className='font-bold'>Your Quest Log</div>
                <div className='text-center'>
                  Record your tasks and visualize your journey.
                </div>
              </div>
              <div className='bg-gray-100 flex flex-col max-w-[280px] w-full items-center rounded-xl text-black py-[20px] px-[15px] gap-3'>
                <Image
                  src='/dash.jpg'
                  alt='dash'
                  className='rounded-[100%]'
                  width={145}
                  height={145}
                />
                <div className='font-bold'>Your Quest Log</div>
                <div className='text-center'>
                  Record your tasks and visualize your journey.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
