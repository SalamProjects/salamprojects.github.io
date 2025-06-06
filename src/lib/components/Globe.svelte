<script lang="ts">
  import { onMount } from 'svelte';
  import createGlobe from 'cobe';

  let canvas: HTMLCanvasElement;

  onMount(() => {
    let phi = 0;
    const globe = createGlobe(canvas, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      markers: [
        { location: [37.7595, -122.4367], size: 0.03 },
        { location: [40.7128, -74.006], size: 0.1 },
        { location: [51.5072, -0.1276], size: 0.1 },
        { location: [35.6762, 139.6503], size: 0.1 },
        { location: [25.2048, 55.2708], size: 0.1 },
        { location: [-33.8651, 151.2099], size: 0.1 },
        { location: [3.139, 101.6869], size: 0.1 },
        { location: [5.55, -0.2167], size: 0.1 },
      ],
      onRender: (state) => {
        state.phi = phi;
        phi += 0.005;
      },
    });

    return () => {
      globe.destroy();
    };
  });
</script>

<div class="absolute inset-0 z-0 flex items-center justify-center">
  <canvas bind:this={canvas} class="h-[600px] w-[600px] max-w-full"></canvas>
</div>
