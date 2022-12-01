import "./index.css";
import { Suspense, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Stars } from "@react-three/drei";

function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/shoe.gltf");
  return (
    <group ref={group} {...props} dispose={null} scale={3}>
      <mesh
        geometry={nodes.shoe.geometry}
        material={materials.laces}
        material-color={props.customColors.setStripes}
      />
      <mesh
        geometry={nodes.shoe_1.geometry}
        material={materials.mesh}
        material-color={props.customColors.mesh}
      />
      <mesh
        geometry={nodes.shoe_2.geometry}
        material={materials.caps}
        material-color={props.customColors.soul}
      />
      <mesh
        geometry={nodes.shoe_3.geometry}
        material={materials.inner}
        material-color={props.customColors.soul}
      />
      <mesh
        geometry={nodes.shoe_4.geometry}
        material={materials.sole}
        material-color={props.customColors.soul}
      />
      <mesh
        geometry={nodes.shoe_5.geometry}
        material={materials.stripes}
        material-color={props.customColors.stripes}
      />
      <mesh
        geometry={nodes.shoe_6.geometry}
        material={materials.band}
        material-color={props.customColors.stripes}
      />
      <mesh
        geometry={nodes.shoe_7.geometry}
        material={materials.patch}
        material-color={props.customColors.soul}
      />
    </group>
  );
}

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
          <Model
            customColors={{ mesh: "red", stripes: "blue", soul: "green" }}
          />
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
