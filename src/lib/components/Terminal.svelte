<script lang="ts">
  import { onDestroy } from 'svelte';
  import { fly } from 'svelte/transition';

  interface CodePart {
    text: string;
    color: string;
  }

  const codeParts: CodePart[] = [
    { text: 'console', color: 'text-[#89b4fa]' },
    { text: '.', color: 'text-[#bac2de]' },
    { text: 'log', color: 'text-[#cba6f7]' },
    { text: '(', color: 'text-[#bac2de]' },
    {
      text: '"Salam Projects is a not-for-profit organisation creating ethical digital tools that benefit the global Muslim community. We provide a platform for developers to build and distribute applications that adhere to Islamic values."',
      color: 'text-[#a6e3a1]',
    },
    { text: ')', color: 'text-[#bac2de]' },
  ];

  const fullCode = codeParts.map((p) => p.text).join('');
  let typedParts = $state<CodePart[]>([]);
  let fullTypedCode = $derived(typedParts.map((p) => p.text).join(''));
  let showCursor = $state(true);

  let typingInterval: ReturnType<typeof setInterval>;
  let blinkerInterval: ReturnType<typeof setInterval> | undefined = undefined;

  let partIndex = 0;
  let charIndex = 0;

  typingInterval = setInterval(() => {
    if (partIndex < codeParts.length) {
      const currentPart = codeParts[partIndex];
      if (typedParts.length === partIndex) {
        typedParts.push({ text: '', color: currentPart.color });
      }

      if (charIndex < currentPart.text.length) {
        typedParts[partIndex].text += currentPart.text.charAt(charIndex);
        charIndex++;
      } else {
        partIndex++;
        charIndex = 0;
      }
    } else {
      clearInterval(typingInterval);
      blinkerInterval = setInterval(() => {
        showCursor = !showCursor;
      }, 500);
    }
  }, 100);

  onDestroy(() => {
    clearInterval(typingInterval);
    if (blinkerInterval) {
      clearInterval(blinkerInterval);
    }
  });
</script>

<div
  class="font-jetbrains-mono rounded-xl bg-[#1e1e2e] p-8 shadow-2xl"
  in:fly={{ y: 50, duration: 800, delay: 600 }}
>
  <div class="mb-4 flex items-center">
    <div class="flex space-x-2">
      <div class="h-3 w-3 rounded-full bg-[#f38ba8]"></div>
      <div class="h-3 w-3 rounded-full bg-[#f9e2af]"></div>
      <div class="h-3 w-3 rounded-full bg-[#a6e3a1]"></div>
    </div>
  </div>
  <div class="min-h-32 text-sm leading-relaxed text-[#cdd6f4] sm:text-base lg:text-lg">
    <span class="text-[#6c7086]">> </span>
    {#each typedParts as part, i (i)}
      <span class={part.color}>{part.text}</span>
    {/each}<span class:opacity-0={!showCursor}>_</span><span class="opacity-0"
      >{fullCode.substring(fullTypedCode.length)}</span
    >
  </div>
</div>
