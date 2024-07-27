import * as THREE from "three";
import { GLTFLoader } from "gltf";

const size = window.innerWidth * 0.4;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);

const mouse = {
  x: 0,
  y: 0,
};

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(size, size);
const mainImg = document.querySelector(".mainImg");
mainImg.appendChild(renderer.domElement);

const ambientLight = new THREE.AmbientLight(0xffffff, 1);
scene.add(ambientLight);
const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
directionalLight.position.set(200, 500, 300);
scene.add(directionalLight);

// Material //
const material = new THREE.MeshStandardMaterial({
  color: "#ff2b2b",
});

const loader = new GLTFLoader();

let model = undefined;

loader.load(
  "models/icon.glb",
  function (gltf) {
    model = gltf.scene;
    model.children[0].material = material;
    scene.add(model);
  },
  // called while loading is progressing
  function (xhr) {
    console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
  },
  // called when loading has errors
  function (error) {
    console.log("An error happened");
  }
);

camera.position.z = 14;
camera.position.y = 1;

function animate() {
  if (model) {
    model.rotation.y = linear(model.rotation.y, (mouse.x - 0.7) / 4, 0.1);
    model.rotation.x = linear(model.rotation.x, (mouse.y - 0.9) / 4, 0.1);
  }
  renderer.render(scene, camera);
}
renderer.setAnimationLoop(animate);

window.onmousemove = (e) => {
  mouse.x = e.clientX / innerWidth;
  mouse.y = e.clientY / innerHeight;
};

function linear(start, end, increment) {
  return start + (end - start) * increment;
}
