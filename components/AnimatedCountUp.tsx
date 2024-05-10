"use client"

import CountUp from "react-countup"

const AnimatedCountUp = ({ amount }: { amount: number }) => {
  return (
    <div className="w-full">
        <CountUp end={amount} decimal="," decimals={2} prefix="$" />
    </div>
  )
}

export default AnimatedCountUp