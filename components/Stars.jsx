'use client'

import { OrbitControls, Stars } from "@react-three/drei"


const StarsBg = () => {
  return (
    <>
    {/* <pointLight position={[2, 0, 5]} intensity={1} color='#ffffff88' /> */}
			//stars//
			<Stars
				radius={300}
				depth={50}
				count={20000}
				factor={7}
				saturation={0}
				fade={true}
			/>
      <OrbitControls />
    </>
  )
}

export default StarsBg