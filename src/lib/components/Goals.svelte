<script lang="ts">
  import { fly } from 'svelte/transition';

  interface Goals {
    title: string;
    description: string;
    class?: string;
  }

  const goals: Goals[] = [
    {
      title: 'Set Up the Foundation',
      description:
        'Establish Salam Projects as a nonprofit to support ethical Muslim-centric digital projects.',
    },
    {
      title: 'Build a Developer Platform',
      description:
        'Create a platform where developers can list apps and tools under Salam Projects.',
    },
    {
      title: 'Set Quality and Ethical Standards',
      description:
        'Ensure apps follow Islamic values, with no user tracking and minimal or no ads.',
    },
    {
      title: 'Support Developers',
      description: 'Offer resources, code, and community support to help build better tools.',
    },
    {
      title: 'Maintain Financial Sustainability',
      description:
        'Encourage free apps, and take a small share (e.g. 10–25%) from paid apps to fund hosting and future work.',
    },
    {
      title: 'Promote Community Involvement',
      description: 'Welcome ideas, feedback, and collaboration from users and developers alike.',
    },
    {
      title: 'Reach Global Users',
      description:
        'Focus on making simple, useful apps for Muslims worldwide — especially in underserved areas.',
    },
  ];
</script>

<section id="goals" class="mx-auto max-w-7xl px-2 py-16 sm:px-4 md:px-6 lg:px-10">
  <h2 class="mb-12 text-center text-4xl font-bold text-emerald-800">Our Goals</h2>

  <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
    {#each goals as goal, i (goal.title)}
      <div
        class="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white via-emerald-50 to-emerald-100/60 p-8 shadow-lg shadow-emerald-100/50 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-emerald-200/30 {goal.class ||
          ''}"
        in:fly={{ y: 30, duration: 500, delay: 200 + i * 100 }}
      >
        <div
          class="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-gradient-to-br from-emerald-200/40 to-emerald-300/20 transition-all duration-500 group-hover:scale-110"
        ></div>
        <div class="relative">
          <div
            class="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 shadow-lg shadow-emerald-500/25 transition-all duration-300 group-hover:shadow-emerald-500/40"
          >
            <span class="text-2xl font-bold text-white">{i + 1}</span>
          </div>
          <h3
            class="mb-4 text-xl font-bold text-emerald-900 transition-colors group-hover:text-emerald-700"
          >
            {goal.title}
          </h3>
          <p class="leading-relaxed text-gray-600 transition-colors group-hover:text-gray-700">
            {goal.description}
          </p>
        </div>
      </div>
    {/each}
  </div>
</section>
