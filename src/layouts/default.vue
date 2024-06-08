<template>
  <div class="drawer drawer-open">
    <input
      id="my-drawer-2"
      type="checkbox"
      class="drawer-toggle"
    >
    <div class="drawer-content">
      <!-- Page content here -->
      <slot />
    </div>
    <div class="drawer-side">
      <ul class="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
        <!-- Sidebar content here -->
        <li>
          <a @click="navigateTo({ path: '/' })">
            Sidebar Item 1
          </a>
        </li>
        <li>
          <a @click="navigateTo({ path: '/timetables' })">
            Sidebar Item 2
          </a>
        </li>
        <li :class="{ 'bg-black': currentRoute.path === '/timetables' }">
          <a @click="navigateTo({ path: '/timetables' })">Item 3</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
const router = useRouter()

const { currentRoute } = router

watch(currentRoute, () => {
  console.log(currentRoute.value.path)
})
</script>
