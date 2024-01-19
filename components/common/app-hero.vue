<!-- heavily inspired by https://flowbite.com/blocks/marketing/hero/ with minor modifications -->
<template>
  <section>
    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
      <div class="mr-auto place-self-center lg:col-span-7">
        <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
          TODO list app
        </h1>
        <p class="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl">
          A simple TODO list app built with Nuxt 3
        </p>
        <nuxt-link to="/tasks"
          class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
          Get started
         <img src="/assets/arrow-right.svg" alt="arrow-right" class="w-5 h-5 ml-2 -mr-1" />
        </nuxt-link>
        <common-generic-button>
          <nuxt-link to="/tasks/create">
            Add a task
          </nuxt-link>
        </common-generic-button>
      </div>
      <div 
        class="hidden lg:mt-0 lg:col-span-5 lg:flex">
        <img 
        width="943"
        height="706"
        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
        alt=""
        loading="lazy" 
        />
      </div>
    </div>
  </section>
</template>
