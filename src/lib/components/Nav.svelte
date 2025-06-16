<div class="fixed right-0 z-50 md:relative">
  <!-- Hidden checkbox toggle -->
  <input id="menu-toggle" type="checkbox" class="peer hidden" />

  <!-- Mobile Menu Button -->
  <label
    for="menu-toggle"
    class="z-50 flex h-20 w-20 cursor-pointer flex-col items-center justify-center space-y-2 md:hidden"
    aria-label="Toggle menu"
  >
    <span
      class="h-1 w-8 bg-emerald-800 transition-all duration-200 peer-checked:translate-y-1.5 peer-checked:rotate-45"
    ></span>
    <span class="h-1 w-8 bg-emerald-800 transition-opacity duration-200 peer-checked:opacity-0"
    ></span>
    <span
      class="h-1 w-8 bg-emerald-800 transition-all duration-200 peer-checked:-translate-y-1.5 peer-checked:-rotate-45"
    ></span>
  </label>

  <!-- Desktop Navigation -->
  <nav class="hidden items-center space-x-8 md:flex">
    <a href="/" class="font-medium text-emerald-800 hover:text-emerald-600">Home</a>
    <a href="#mission" class="font-medium text-emerald-800 hover:text-emerald-600">Mission</a>
    <a href="#goals" class="font-medium text-emerald-800 hover:text-emerald-600">Goals</a>
    <a href="#community" class="font-medium text-emerald-800 hover:text-emerald-600">Community</a>
    <a
      href="https://discord.gg/tfGEVUEc"
      target="_blank"
      rel="noopener noreferrer"
      class="flex w-32 items-center space-x-2 rounded-full bg-emerald-600 px-6 py-2 text-white hover:bg-emerald-700"
    >
      <span>Join Us</span>
      <img src="/discord.svg" alt="Discord Icon" class="inline h-5 w-5" />
    </a>
  </nav>

  <!-- Mobile Navigation -->
  <div
    class="pointer-events-none fixed top-full left-0 z-40 w-full -translate-y-4 bg-white opacity-0 shadow-md
      transition-all duration-200 peer-checked:pointer-events-auto
      peer-checked:translate-y-0 peer-checked:opacity-100 md:hidden"
  >
    <div class="items-center space-y-1 px-4 py-6">
      <a
        href="/"
        class="block rounded-md px-3 py-2 text-center text-2xl text-emerald-800 hover:bg-emerald-50"
        >Home</a
      >
      <a
        href="#mission"
        class="block rounded-md px-3 py-2 text-center text-2xl text-emerald-800 hover:bg-emerald-50"
        >Mission</a
      >
      <a
        href="#goals"
        class="block rounded-md px-3 py-2 text-center text-2xl text-emerald-800 hover:bg-emerald-50"
        >Goals</a
      >
      <a
        href="#community"
        class="block rounded-md px-3 py-2 text-center text-2xl text-emerald-800 hover:bg-emerald-50"
        >Community</a
      >

      <a
        href="https://discord.gg/tfGEVUEc"
        target="_blank"
        rel="noopener noreferrer"
        class="mx-auto flex w-full max-w-md items-center justify-center space-x-2 rounded-full bg-emerald-600 px-6 py-2 text-2xl text-white hover:bg-emerald-700"
      >
        <span>Join Us</span>
        <img src="/discord.svg" alt="Discord Icon" class="inline h-10 w-10" />
      </a>
    </div>
  </div>
</div>
