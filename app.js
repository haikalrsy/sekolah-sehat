// Inisialisasi scene, kamera, dan renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('container').appendChild(renderer.domElement);

// Tambahkan pencahayaan
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(1, 1, 1).normalize();
scene.add(light);

// Load model glTF yang diekspor dari Blender
const loader = new THREE.GLTFLoader();
loader.load('path-to-your-animation.glb', function(glb) {
    const model = glb.scene;
    scene.add(model);

    // Setup Animation
    const mixer = new THREE.AnimationMixer(model);
    gltf.animations.forEach((clip) => {
        mixer.clipAction(clip).play();
    });

    // Update animasi setiap frame
    const clock = new THREE.Clock();
    function animate() {
        requestAnimationFrame(animate);
        mixer.update(clock.getDelta());
        renderer.render(scene, camera);
    }
    animate();
});

// Posisikan kamera
camera.position.z = 5;
