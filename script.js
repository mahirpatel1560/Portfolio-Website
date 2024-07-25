import * as THREE from "three";
import { EffectComposer } from "EffectComposer";
import { RenderPass } from "RenderPass";
import { UnrealBloomPass } from "UnrealBloomPass";

const size = window.innerWidth * 0.4;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(size, size);
const mainImg = document.querySelector(".mainImg");
mainImg.appendChild(renderer.domElement);

const ambientLight = new THREE.AmbientLight(0xffffff, 1);
scene.add(ambientLight);
const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
directionalLight.position.set(200, 500, 300);
scene.add(directionalLight);

const group = new THREE.Group();

// Material //
const material = new THREE.MeshStandardMaterial({
  color: "#ff2b2b",
});

const geometry = new THREE.TorusKnotGeometry(10, 3, 200, 32);
const torus = new THREE.Mesh(geometry, material);
scene.add(torus);

camera.position.z = 40;

function animate() {
  torus.rotation.x += 0.003;
  torus.rotation.y += 0.003;
  renderer.render(scene, camera);
}
renderer.setAnimationLoop(animate);
