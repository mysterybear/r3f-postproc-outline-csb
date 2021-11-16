import { OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { EffectComposer, Outline } from "@react-three/postprocessing"
import { BlendFunction, KernelSize, Resizer } from "postprocessing"
import { useRef } from "react"
import { Mesh } from "three"

const App = () => {
  const meshRef1 = useRef<Mesh>()
  return (
    <Canvas>
      <mesh ref={meshRef1}>
        <boxBufferGeometry args={[1, 1, 1]} />
        <meshBasicMaterial color="tomato" />
      </mesh>
      <EffectComposer>
        <Outline
          selection={[meshRef1] as any} // selection of objects that wiill be outlined
          selectionLayer={10} // selection layer
          blendFunction={BlendFunction.SCREEN} // set this to BlendFunction.ALPHA for dark outlines
          edgeStrength={2.5} // the edge strength
          pulseSpeed={0.0} // a pulse speed. A value of zero disables the pulse effect
          visibleEdgeColor={0xffffff} // the color of visible edges
          hiddenEdgeColor={0x22090a} // the color of hidden edges
          width={Resizer.AUTO_SIZE} // render width
          height={Resizer.AUTO_SIZE} // render height
          kernelSize={KernelSize.LARGE} // blur kernel size
          blur={false} // whether the outline should be blurred
          xRay={true} // indicates whether X-Ray outlines are enabled
        />
      </EffectComposer>
      <OrbitControls />
    </Canvas>
  )
}

export default App
