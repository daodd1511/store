<script setup></script>
<template>
  <div>
    <div
      id="defaultModal"
      tabindex="-1"
      aria-hidden="true"
      class="h-modal fixed top-0 right-0 left-0 z-50 flex w-full items-center justify-center overflow-y-auto overflow-x-hidden bg-black/40 md:inset-0 md:h-full"
    >
      <div class="relative h-full w-full max-w-2xl p-4 md:h-auto">
        <!-- Modal content -->
        <div class="relative rounded-lg bg-white shadow dark:bg-gray-700">
          <!-- Modal header -->
          <div
            class="flex items-start justify-between rounded-t border-b p-5 dark:border-gray-600"
          >
            <h3
              class="text-xl font-medium text-gray-900 dark:text-white lg:text-2xl"
            >
              <slot name="header"></slot>
            </h3>
            <button
              type="button"
              class="ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
              @click="$emit('closeModal')"
            >
              <svg
                class="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <!-- Modal body -->
          <div class="space-y-6 p-6">
            <slot name="content"></slot>
          </div>
          <!-- Modal button -->
          <div>
            <slot name="button"></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
