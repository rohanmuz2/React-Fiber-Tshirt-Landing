import "./index.css";
import { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Stars, useAnimations } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";

// function Model({ ...props }) {
//   const group = useRef();
//   const { nodes, materials } = useGLTF("/shoe.gltf");
//   return (
//     <group ref={group} {...props} dispose={null} scale={3}>
//       <mesh
//         geometry={nodes.shoe.geometry}
//         material={materials.laces}
//         material-color={props.customColors.setStripes}
//       />
//       <mesh
//         geometry={nodes.shoe_1.geometry}
//         material={materials.mesh}
//         material-color={props.customColors.mesh}
//       />
//       <mesh
//         geometry={nodes.shoe_2.geometry}
//         material={materials.caps}
//         material-color={props.customColors.soul}
//       />
//       <mesh
//         geometry={nodes.shoe_3.geometry}
//         material={materials.inner}
//         material-color={props.customColors.soul}
//       />
//       <mesh
//         geometry={nodes.shoe_4.geometry}
//         material={materials.sole}
//         material-color={props.customColors.soul}
//       />
//       <mesh
//         geometry={nodes.shoe_5.geometry}
//         material={materials.stripes}
//         material-color={props.customColors.stripes}
//       />
//       <mesh
//         geometry={nodes.shoe_6.geometry}
//         material={materials.band}
//         material-color={props.customColors.stripes}
//       />
//       <mesh
//         geometry={nodes.shoe_7.geometry}
//         material={materials.patch}
//         material-color={props.customColors.soul}
//       />
//     </group>
//   );
// }

function Model(props) {

  const tshirtRef = useRef();

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    tshirtRef.current.rotation.y = elapsedTime / 1;
  });


  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/tee2_v2.gltf')
  const { actions } = useAnimations(animations, group)

  return (
    <group ref={group} {...props} dispose={null} scale={7}>
      <group name="Scene" >
        <mesh name="Seems" geometry={nodes.Seems.geometry} material={materials['Material #25.002']} position={[0, -1, -0.02]} scale={0.45} />
        <mesh ref={tshirtRef} name="T-Shirt" geometry={nodes['T-Shirt'].geometry} material={materials['Material #26.001']} position={[0, -1, 0]} scale={0.03} />
      </group>
    </group>
  )
}

// function Model(props) {
//   const group = useRef()
//   const { nodes, materials, animations } = useGLTF("/tee2.gltf");
//   const { actions } = useAnimations(animations, group)
//   return (
//     <group ref={group} {...props} dispose={null}>
//       <group name="Scene">
//         <mesh name="Cube" geometry={nodes.Cube.geometry} material={materials.Material} />
//         <mesh name="Seems" geometry={nodes.Seems.geometry} material={materials.Material} position={[0, -0.77, -0.02]} scale={0.45} />
//         <mesh name="T-Shirt" geometry={nodes['T-Shirt'].geometry} material={materials.Material} position={[0, -0.6, 0]} scale={0.03} />
//       </group>
//     </group>
//   )
// }


// function Model({ ...props }) {
//   const group = useRef();
//   const { nodes, materials } = useGLTF("/t_shirt_body_male_copy.gltf");
//   return (
//     <group ref={group} {...props} dispose={null}>
//       <mesh
//         geometry={nodes.male_tshirt_1.geometry}
//         material={nodes.male_tshirt_1.material}
//         position={[3.19, 41.43, -3.94]}
//         rotation={[0, -0.03, 0]}
//         scale={[1.02, 1, 1.02]}
//       />
//       {/* <directionalLight
//         intensity={0.75}
//         decay={2}
//         position={[850003.92, 1299996.45, 1001635.31]}
//         rotation={[-0.91, 0.48, -0.34]}
//       /> */}
//       {/* <OrthographicCamera makeDefault={false} far={100000} near={-100000} position={[0, 0, 1000]} /> */}
//     </group>
//   );
// }

function App() {
  return (
    <div className="App">
      <Canvas>
        <Suspense fallback={null}>
          <ambientLight />
          <spotLight
            intensity={0.9}
            angle={0.1}
            penumbra={1}
            position={[10, 15, 10]}
            castShadow
          />
          <Stars
            radius={300}
            depth={60}
            count={20000}
            factor={7}
            saturation={0}
            fade={true}
          />
          <Model />
          {/* <Model
            customColors={{ mesh: "red", stripes: "blue", soul: "green" }}
          /> */}
          <OrbitControls
            enablePan={true}
            enableZoom={true}
            enableRotate={true}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
