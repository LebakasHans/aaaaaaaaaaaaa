<template>
  <div class="drawer drawer-open">
    <input
      id="my-drawer-2"
      type="checkbox"
      class="drawer-toggle"
    >
    <div class="drawer-content flex flex-col items-center justify-center">
      <!-- Page content here -->
      Content
    </div>
    <div class="drawer-side">
      <ul class="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
        <!-- Sidebar content here -->
        <li>
          <a>Sidebar Item 1</a>
        </li>
        <li>
          <a>Sidebar Item 2</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
onMounted(() => {
  console.log('mounted')
})
</script>
