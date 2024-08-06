// import * as THREE from "three";

// const size = window.innerWidth * 0.4;

// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);

// const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
// renderer.setSize(size, size);
// const mainImg = document.querySelector(".mainImg");
// mainImg.appendChild(renderer.domElement);

// const ambientLight = new THREE.AmbientLight(0xffffff, 1);
// scene.add(ambientLight);
// const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
// directionalLight.position.set(200, 500, 300);
// scene.add(directionalLight);

// const group = new THREE.Group();

// // Material //
// const material = new THREE.MeshStandardMaterial({
//   color: "#ff1c1c",
// });

// const geometry = new THREE.TorusKnotGeometry(10, 3, 200, 32);
// const torus = new THREE.Mesh(geometry, material);
// scene.add(torus);

// camera.position.z = 40;

// function animate() {
//   torus.rotation.x += 0.003;
//   torus.rotation.y += 0.003;
//   renderer.render(scene, camera);
// }
// renderer.setAnimationLoop(animate);

const left = document.querySelector(".left");
const right = document.querySelector(".right");

const parent = document.querySelector("#achievements .container");
const child = document.querySelector("#ach5");

const elems = [];

for (let i = 1; i <= 6; i++) {
  let elem = document.querySelector(`#ach${i}`).getBoundingClientRect();
  elems.push({
    left: elem.left,
    right: elem.right,
  });
}

let count = -1;

right.onclick = () => {
  parent.scrollTo({
    left: elems[count + 1].left,
    behavior: "smooth",
  });

  count = Math.min(count + 1, 4);
};

left.onclick = () => {
  parent.scrollTo({
    left: elems[count - 1].left,
    behavior: "smooth",
  });
  count = Math.max(count - 1, 0);
};
