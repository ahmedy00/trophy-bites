<template>
  <header class="bg-light-header dark:bg-dark-header custom:bg-custom-header border-b-[1px] border-b-gray-400">
    <nav class="px-24 h-header">
      <div class="container hidden sm:grid grid-cols-7 m-auto items-center">
        <div>
          <AppLogo :width="64" />
        </div>
        <div class="col-span-6 flex justify-end gap-8">
          <ThemeSelector />
          <LanguageSelector />
        </div>
      </div>
      <div class="flex sm:hidden justify-center">
        <div>
          <AppLogo :width="64" />
        </div>
      </div>
    </nav>
  </header>
</template>