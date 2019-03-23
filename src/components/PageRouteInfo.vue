<template>
  <table class="demo-table">
    <tr>
      <th width="80">
        name
      </th>
      <td>{{ $route.name }}</td>
    </tr>
    <tr>
      <th>path</th>
      <td>{{ $route.path }}</td>
    </tr>
    <tr>
      <th>params</th>
      <td>{{ $route.params }}</td>
    </tr>
    <tr>
      <th>query</th>
      <td>{{ $route.query }}</td>
    </tr>
    <tr>
      <th>hash</th>
      <td>{{ $route.hash }}</td>
    </tr>
    <tr>
      <th>fullPath</th>
      <td>{{ $route.fullPath }}</td>
    </tr>
  </table>
</template>
