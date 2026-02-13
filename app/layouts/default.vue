<template>
  <div class="d-flex" id="wrapper">
    <!-- Sidebar -->
    <div class="bg-white shadow" id="sidebar-wrapper" style="width: 260px;">
      <div class="sidebar-heading text-center py-4 primary-text fs-4 fw-bold text-uppercase border-bottom">
        Volt Nuxt
      </div>
      <div class="list-group list-group-flush">
        <NuxtLink to="/" class="list-group-item list-group-item-action bg-transparent">
          <i class="pi pi-home me-2"></i>Dashboard
        </NuxtLink>
        <NuxtLink to="/example/1" class="list-group-item list-group-item-action bg-transparent">
          <i class="pi pi-tag me-2"></i>Example Detail
        </NuxtLink>
      </div>
    </div>

    <!-- Page Content -->
    <div id="page-content-wrapper" class="w-100">
      <nav class="navbar navbar-expand-lg navbar-light bg-white border-bottom px-4">
        <button class="btn" id="menu-toggle"><i class="pi pi-bars"></i></button>
        <div class="ms-auto d-flex align-items-center gap-3">
          <AppSearchBar placeholder="Search..." @search="handleSearch" />
          <span class="text-muted">Admin</span>
        </div>
      </nav>

      <div class="container-fluid p-4">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const handleSearch = (q: string) => {
  console.log('Search:', q)
}
</script>