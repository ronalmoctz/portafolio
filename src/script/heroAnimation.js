 import * as THREE from "three";

  export function initHeroAnimation(containerId = "textContainer") {
    const textContainer = document.getElementById(containerId);
    if (!textContainer) return;

    let easeFactor = 0.02;
    let scene, camera, renderer, planeMesh;
    let mousePosition = { x: 0.5, y: 0.5 };
    let targetMousePosition = { x: 0.5, y: 0.5 };
    let prevPosition = { x: 0.5, y: 0.5 };

    const vertexShader = `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `;

    const fragmentShader = `
    varying vec2 vUv;
    uniform sampler2D u_texture;
    uniform vec2 u_mouse;
    uniform vec2 u_prevMouse;

    void main() {
      vec2 gridUV = floor(vUv * vec2(40.0, 40.0)) / vec2(40.0, 40.0);
      vec2 centerOfPixel = gridUV + vec2(1.0/40.0, 1.0/40.0);

      vec2 mouseDirection = u_mouse - u_prevMouse;
      vec2 pixelToMouse = centerOfPixel - u_mouse;
      float dist = length(pixelToMouse);
      float strength = smoothstep(0.3, 0.0, dist);

      vec2 uvOffset = strength * -mouseDirection * 0.3;
      vec2 uv = vUv - uvOffset;
      vec4 color = texture2D(u_texture, uv);
      gl_FragColor = color;
    }
  `;

    function createTextTexture(text, font, size, color, fontWeight = "100") {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      const canvasWidth = window.innerWidth * 2;
      const canvasHeight = window.innerHeight * 2;
      canvas.width = canvasWidth;
      canvas.height = canvasHeight;

      ctx.fillStyle = color || "#ffffff";
      ctx.fillRect(0, 0, canvasWidth, canvasHeight);

      const fontSize = size || Math.floor(canvasWidth * 0.2);
      ctx.fillStyle = "#1a1a1a";
      // ← CORRECCIÓN: asignación a ctx.font
      ctx.font = `${fontWeight} ${fontSize}px "${font || "Recursive Variable"}"`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";

      const metrics = ctx.measureText(text);
      const textWidth = metrics.width;
      // ← CORRECCIÓN: paréntesis balanceados
      const scaleFactor = Math.min(1, (canvasWidth * 1) / textWidth);
      const aspectCorrection = canvasWidth / canvasHeight;

      ctx.setTransform(
        scaleFactor,
        0,
        0,
        scaleFactor / aspectCorrection,
        canvasWidth / 2,
        canvasHeight / 2
      );

      ctx.strokeStyle = "#1a1a1a";
      ctx.lineWidth = fontSize * 0.005;
      for (let i = 0; i < 3; i++) {
        ctx.strokeText(text, 0, 0);
      }
      // ← CORRECCIÓN: fillText requiere x e y
      ctx.fillText(text, 0, 0);

      return new THREE.CanvasTexture(canvas);
    }

    function initializeScene(texture) {
      scene = new THREE.Scene();

      const aspectRatio = window.innerWidth / window.innerHeight;
      camera = new THREE.OrthographicCamera(
        -1,
        1,
        1 / aspectRatio,
        -1 / aspectRatio,
        0.1,
        1000
      );
      camera.position.z = 1;

      const shaderUniforms = {
        u_mouse: { value: new THREE.Vector2() },
        u_prevMouse: { value: new THREE.Vector2() },
        u_texture: { value: texture },
      };

      // ← CORRECCIÓN: nombre consistente planeMesh
      planeMesh = new THREE.Mesh(
        new THREE.PlaneGeometry(2, 2),
        new THREE.ShaderMaterial({
          uniforms: shaderUniforms,
          vertexShader,
          fragmentShader,
        })
      );
      scene.add(planeMesh);

      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setClearColor(0xffffffff, 1);
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(window.devicePixelRatio);

      textContainer.appendChild(renderer.domElement);
    }

    function reloadTexture() {
      const newTex = createTextTexture(
        "RONALDO",
        "Recursive Variable",
        null,
        "#ffffff",
        "100"
      );
      planeMesh.material.uniforms.u_texture.value = newTex;
    }

    initializeScene(
      createTextTexture("RONALDO", "Recursive Variable", null, "#ffffff", "100")
    );

    function animateScene() {
      requestAnimationFrame(animateScene);

      mousePosition.x += (targetMousePosition.x - mousePosition.x) * easeFactor;
      mousePosition.y += (targetMousePosition.y - mousePosition.y) * easeFactor;

      planeMesh.material.uniforms.u_mouse.value.set(
        mousePosition.x,
        1.0 - mousePosition.y
      );
      planeMesh.material.uniforms.u_prevMouse.value.set(
        prevPosition.x,
        1.0 - prevPosition.y
      );
      renderer.render(scene, camera);
    }
    animateScene();

    // ← CORRECCIÓN: listeners apuntando a funciones correctas
    textContainer.addEventListener("mousemove", handleMouseMove);
    textContainer.addEventListener("mouseenter", handleMouseEnter);
    textContainer.addEventListener("mouseleave", handleMouseLeave);

    function handleMouseMove(event) {
      easeFactor = 0.04;
      const rect = textContainer.getBoundingClientRect();
      prevPosition = { ...targetMousePosition };
      targetMousePosition.x = (event.clientX - rect.left) / rect.width;
      targetMousePosition.y = (event.clientY - rect.top) / rect.height;
    }

    function handleMouseEnter(event) {
      easeFactor = 0.02;
      const rect = textContainer.getBoundingClientRect();
      mousePosition.x = targetMousePosition.x =
        (event.clientX - rect.left) / rect.width;
      mousePosition.y = targetMousePosition.y =
        (event.clientY - rect.top) / rect.height;
    }

    function handleMouseLeave() {
      easeFactor = 0.02;
      targetMousePosition = { ...prevPosition };
    }

    window.addEventListener("resize", onWindowResize, false);
    function onWindowResize() {
      const aspectRatio = window.innerWidth / window.innerHeight;
      camera.left = -1;
      camera.right = 1;
      camera.top = 1 / aspectRatio;
      camera.bottom = -1 / aspectRatio;
      camera.updateProjectionMatrix();

      renderer.setSize(window.innerWidth, window.innerHeight);
      reloadTexture();
    }
  }