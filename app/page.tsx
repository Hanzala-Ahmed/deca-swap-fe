'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push('/swaps');
  }, []);

  return;
  // return (
  //   <div className="">
  //     <Navbar />
  //     <div className="mt-[110px] mb-10 mx-auto w-fit">
  //       <SELSection />
  //     </div>
  //   </div>
  // );
}
