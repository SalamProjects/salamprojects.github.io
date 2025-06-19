<script>
  import Nav from './Nav.svelte';
</script>

<header class="fixed top-0 right-0 left-0 z-50 bg-white/80 shadow-sm backdrop-blur-lg">
  <div class="mx-auto flex max-w-7xl px-2 sm:px-4 md:px-6 lg:px-10">
    <div class="flex h-16 w-full items-center justify-between">
      <div class="flex w-full items-center space-x-4">
        <a href="/" class="mx-auto md:mx-1">
          <img src="/favicon.svg" alt="Salam Projects Logo" class="h-10 w-10" />
        </a>
        <a href="/" class="hidden items-center space-x-2 md:block">
          <span class="text-2xl font-bold text-emerald-900">Salam Projects</span>
        </a>
      </div>
      <Nav />
    </div>
  </div>
</header>
