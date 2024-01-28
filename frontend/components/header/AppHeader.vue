<template>
  <header class="bg-light-header dark:bg-dark-header custom:bg-custom-header border-b-[1px] border-b-gray-400">
    <nav class="container px-24 grid grid-cols-7 m-auto items-center h-header">
      <div>
        <AppLogo :width="64" />
      </div>
      <div class="col-span-6 flex justify-end gap-8">
        <ThemeSelector />
        <LanguageSelector />
      </div>
    </nav>
  </header>
</template>