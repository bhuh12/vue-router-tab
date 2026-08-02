<template>
  <table class="demo-table">
    <tbody>
      <tr class="demo-table__row">
        <th class="demo-table__head-cell" width="80">name</th>
        <td class="demo-table__cell">{{ route.name }}</td>
      </tr>
      <tr class="demo-table__row">
        <th class="demo-table__head-cell">path</th>
        <td class="demo-table__cell">{{ route.path }}</td>
      </tr>
      <tr class="demo-table__row">
        <th class="demo-table__head-cell">params</th>
        <td class="demo-table__cell">{{ route.params }}</td>
      </tr>
      <tr class="demo-table__row">
        <th class="demo-table__head-cell">query</th>
        <td class="demo-table__cell">{{ route.query }}</td>
      </tr>
      <tr class="demo-table__row">
        <th class="demo-table__head-cell">hash</th>
        <td class="demo-table__cell">{{ route.hash }}</td>
      </tr>
      <tr class="demo-table__row">
        <th class="demo-table__head-cell">fullPath</th>
        <td class="demo-table__cell">{{ route.fullPath }}</td>
      </tr>
      <tr class="demo-table__row">
        <th class="demo-table__head-cell"><b>meta</b></th>
        <td class="demo-table__cell">{{ route.meta }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
</script>
